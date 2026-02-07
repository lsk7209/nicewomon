import { NextRequest, NextResponse } from 'next/server';
import { getFileContent, createOrUpdateFile } from '@/lib/github-client';

export const maxDuration = 10;

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        const { searchParams } = new URL(req.url);
        if (searchParams.get('secret') !== process.env.CRON_SECRET) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
    }

    try {
        const queuePath = 'data/post-queue.json';
        const queueContent = await getFileContent(queuePath);

        if (!queueContent) {
            return new NextResponse('Queue file not found in repo', { status: 500 });
        }

        const queueData = JSON.parse(queueContent);
        const draftPostIndex = queueData.posts.findIndex((p: any) => p.status === 'draft');

        if (draftPostIndex === -1) {
            return new NextResponse('No drafts to publish', { status: 200 });
        }

        const postToPublish = queueData.posts[draftPostIndex];

        // 상태 업데이트
        queueData.posts[draftPostIndex].status = 'published';
        queueData.posts[draftPostIndex].publishedAt = new Date().toISOString();
        queueData.lastPublished = new Date().toISOString();

        // 블로그 목록(page.tsx) 업데이트
        const blogListPath = 'src/app/blog/page.tsx';
        const blogListContent = await getFileContent(blogListPath);

        if (blogListContent) {
            const newPostEntry = `    {
        slug: "${postToPublish.slug}",
        title: "${postToPublish.title}",
        excerpt: "${postToPublish.excerpt}",
        category: "${postToPublish.category}",
        date: "${postToPublish.date}",
        readTime: "${postToPublish.readTime}",
        image: "/blog/${postToPublish.slug}.jpg",
    },`;

            const updatedBlogList = blogListContent.replace(
                /const blogPosts = \[\n/,
                `const blogPosts = [\n${newPostEntry}\n`
            );

            // [skip ci] 없이 커밋하여 배포 트리거
            await createOrUpdateFile(blogListPath, updatedBlogList, `📢 [Publish] ${postToPublish.title}`);
        }

        // 큐 파일 저장 (배포 트리거 됨)
        await createOrUpdateFile(queuePath, JSON.stringify(queueData, null, 2), `🤖 [Queue] Published ${postToPublish.slug}`);

        return NextResponse.json({
            success: true,
            slug: postToPublish.slug,
            status: 'published'
        });

    } catch (error: any) {
        console.error('[Cron] Publish Error:', error);
        if (error.status === 409) {
            return new NextResponse('Conflict (Concurrent Update)', { status: 409 });
        }
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
}
