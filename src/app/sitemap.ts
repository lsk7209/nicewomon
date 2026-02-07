import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://nicewomen.kr';

// 정적 페이지 목록
const staticPages = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/guide',
    '/tools',
    '/search',
    '/bookmarks',
];

// 가이드 페이지 목록
const guidePages = [
    '/guide/30s-health',
    '/guide/40s-health',
    '/guide/50s-health',
    '/guide/hormone-basics',
    '/guide/nutrition',
    '/guide/sleep',
    '/guide/stress',
    '/guide/symptoms',
    '/guide/pms',
    '/guide/air-quality-sleep',
    '/guide/blood-sugar',
    '/guide/cbti-basics',
    '/guide/food-label-reading',
    '/guide/hrv-monitoring-guide',
    '/guide/migraine-trigger-guide',
    '/guide/morning-evening-routine',
    '/guide/pelvic-floor-care',
    '/guide/reflux-gerd-lifestyle',
    '/guide/thyroid-hypo-lifestyle',
    '/guide/trf-fasting-women',
];

// 도구 페이지 목록
const toolPages = [
    '/tools/hormone',
    '/tools/sleep',
    '/tools/stress',
    '/tools/body-age',
    '/tools/nutrients',
    '/tools/anemia',
    '/tools/blood-sugar',
    '/tools/edema',
    '/tools/pms',
    '/tools/digital-burnout',
    '/tools/alcohol-sleep-impact',
    '/tools/burnout-risk-screener',
    '/tools/caffeine-cutoff-calculator',
    '/tools/hrv-rest-day-advisor',
    '/tools/jetlag-adjust-planner',
    '/tools/light-exposure-planner',
    '/tools/pelvic-floor-reminder',
    '/tools/protein-tracker-basic',
    '/tools/sodium-intake-score',
    '/tools/water-electrolyte-planner',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts();

    // 블로그 포스트
    const blogs = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 정적 페이지
    const staticRoutes = staticPages.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.7,
    }));

    // 가이드 페이지
    const guideRoutes = guidePages.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 도구 페이지
    const toolRoutes = toolPages.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...guideRoutes, ...toolRoutes, ...blogs];
}
