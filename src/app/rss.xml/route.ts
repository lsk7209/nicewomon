import { SITE_CONFIG } from "@/lib/config";
import { getBlogPosts } from "@/lib/blog";

export async function GET() {
    const baseUrl = "https://nicewomen.kr";

    // 동적으로 블로그 포스트 가져오기
    const blogPosts = getBlogPosts();

    const escapeXml = (str: string) => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    };

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} 블로그</title>
    <link>${baseUrl}/blog</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
            .slice(0, 50) // 최신 50개만
            .map(
                (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${escapeXml(post.description || post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>`
            )
            .join("")}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
