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
        };
    });

    // 날짜순 정렬 (최신순)
    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getBlogPost(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const readTime = Math.max(1, Math.ceil(content.length / 500)) + "분 읽기";
    const category = data.tags && data.tags.length > 0 ? data.tags[0] : '기타';

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
    };
}
