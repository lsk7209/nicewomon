import { NextRequest, NextResponse } from 'next/server';
import { BlogGenerator } from '@/lib/blog-generator';
import { getFileContent, createOrUpdateFile } from '@/lib/github-client';

export const maxDuration = 60;

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        const { searchParams } = new URL(req.url);
        if (searchParams.get('secret') !== process.env.CRON_SECRET) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
    }

    if (!process.env.GEMINI_API_KEY || !process.env.GITHUB_TOKEN) {
        return new NextResponse('Missing Environment Variables (GEMINI_API_KEY or GITHUB_TOKEN)', { status: 500 });
    }

    try {
        const queuePath = 'data/post-queue.json';
        let queueData;
        const queueContent = await getFileContent(queuePath);

        if (queueContent) {
            queueData = JSON.parse(queueContent);
        } else {
            return new NextResponse('Queue file not found in repo', { status: 500 });
        }

        const pendingTopics = queueData.topics.queue.filter(
            (t: string) => !queueData.topics.generated.includes(t)
        );

        if (pendingTopics.length === 0) {
            return new NextResponse('No pending topics', { status: 200 });
        }

        const topic = pendingTopics[0];
        const generator = new BlogGenerator(process.env.GEMINI_API_KEY);

        console.log(`[Cron] Generating content for: ${topic}`);
        const content = await generator.generateContent(topic);
        const tsx = generator.generateTsx(content);

        // GitHub에 파일 생성 (draft) - Vercel 빌드 유발을 피하려면 [skip ci]를 메시지에 추가할 수도 있지만,
        // 여기서는 새 글이 생성되었음을 알리기 위해 빌드를 유발하는 것이 나을 수도 있음. 
        // 하지만 1시간마다 빌드는 부담되므로 [skip ci] 추가 권장.
        const blogPath = `src/app/blog/${content.slug}/page.tsx`;
        await createOrUpdateFile(blogPath, tsx, `📝 [Auto-Generate] ${content.title} [skip ci]`);

        // 큐 업데이트 및 커밋
        queueData.topics.generated.push(topic);
        queueData.posts.push({
            slug: content.slug,
            title: content.title,
            excerpt: content.excerpt,
            category: content.category,
            date: content.date,
            readTime: content.readTime,
            status: 'draft',
            createdAt: new Date().toISOString(),
            scheduledFor: null
        });
        queueData.lastGenerated = new Date().toISOString();

        await createOrUpdateFile(queuePath, JSON.stringify(queueData, null, 2), `🤖 [Queue] Update after generating ${content.slug} [skip ci]`);

        return NextResponse.json({
            success: true,
            topic,
            slug: content.slug,
            status: 'draft'
        });

    } catch (error: any) {
        console.error('[Cron] Generate Error:', error);
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
}
