import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://nicewomen.kr';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts();

    const blogs = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const routes = [
        '',
        '/blog',
        '/tools/hormone',
        '/tools/sleep',
        '/tools/stress',
        '/tools/body-age',
        '/tools/nutrients',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogs];
}
