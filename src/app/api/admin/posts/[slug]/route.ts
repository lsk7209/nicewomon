import { NextRequest, NextResponse } from 'next/server';
import { getBlogPost, saveBlogPost, deleteBlogPost } from '@/lib/blog';

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const post = getBlogPost(params.slug);
    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const body = await request.json();
        const { title, date, category, description, content, tags } = body;

        const frontmatter = {
            title,
            date,
            category,
            description,
            tags,
        };

        saveBlogPost(params.slug, frontmatter, content);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        deleteBlogPost(params.slug);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}
