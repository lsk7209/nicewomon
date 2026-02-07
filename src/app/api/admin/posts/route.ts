import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost } from '@/lib/blog';

export async function GET() {
    try {
        const posts = getBlogPosts();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { slug, title, date, category, description, content, tags } = body;

        if (!slug || !title || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const frontmatter = {
            title,
            date: date || new Date().toISOString().split('T')[0],
            category,
            description,
            tags: tags || [],
        };

        createBlogPost(slug, frontmatter, content);
        return NextResponse.json({ success: true, slug });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
