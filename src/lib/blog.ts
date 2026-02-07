import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: string;
    // 파생 필드
    category: string;
    readTime: string;
    excerpt: string;
    image?: string;
    toc: { level: number; text: string; slug: string }[];
}

export function getBlogPosts(): BlogPost[] {
    const files = fs.readdirSync(BLOG_DIR);

    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        // 읽는 시간 계산 (대략 500자당 1분)
        const readTime = Math.max(1, Math.ceil(content.length / 500)) + "분 읽기";

        // 카테고리 매핑 (첫 번째 태그 또는 '기타')
        const category = data.tags && data.tags.length > 0 ? data.tags[0] : '기타';

        // 첫 번째 이미지 추출 (Thumbnail)
        const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
        const image = data.image || (imageMatch ? imageMatch[1] : undefined);

        // 목차(TOC) 추출
        const toc = content.split('\n')
            .filter(line => line.match(/^#{1,3}\s/))
            .map(line => {
                const level = line.match(/^#+/)?.[0].length || 0;
                const text = line.replace(/^#+\s/, '');
                const slug = text.toLowerCase().replace(/[^a-z0-9가-힣\s-]/g, '').trim().replace(/\s+/g, '-');
                return { level, text, slug };
            });

        return {
            slug,
            title: data.title,
            description: data.description || '',
            date: data.date,
            tags: data.tags || [],
            content,
            category,
            readTime,
            excerpt: data.description || content.slice(0, 100) + '...',
            image,
            toc,
        };
    });

    // 날짜순 정렬 (최신순)
    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getBlogPost(slug: string): BlogPost | null {
    const posts = getBlogPosts();
    return posts.find((post) => post.slug === slug) || null;
}


export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
    const posts = getBlogPosts();
    return posts
        .filter((post) => post.category === category && post.slug !== currentSlug)
        .slice(0, limit);
}

export function saveBlogPost(slug: string, data: any, content: string): void {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, fileContent);
}

export function deleteBlogPost(slug: string): void {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}

export function createBlogPost(slug: string, data: any, content: string): void {
    saveBlogPost(slug, data, content);
}
