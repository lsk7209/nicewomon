import { SITE_CONFIG } from "@/lib/config";

export async function GET() {
    const baseUrl = "https://nicewomen.kr";

    const blogPosts = [
        {
            slug: "menopause-symptoms-guide",
            title: "갱년기 증상, 이것만은 꼭 알아두세요",
            description: "갱년기 증상을 조기에 인지하고 대처하는 방법을 알아봅니다. 안면 홍조, 수면 장애, 감정 변화 등 주요 증상과 관리법을 소개합니다.",
            category: "갱년기",
            date: "2024-11-20",
        },
        {
            slug: "sleep-quality-improvement",
            title: "숙면을 위한 7가지 과학적 방법",
            description: "수면 전문가가 추천하는 수면 질 개선 방법입니다. 수면 위생부터 이완 기법까지, 오늘 밤부터 바로 실천할 수 있는 팁을 공유합니다.",
            category: "수면",
            date: "2024-11-18",
        },
        {
            slug: "stress-management-techniques",
            title: "직장인 여성을 위한 스트레스 관리법",
            description: "바쁜 일상 속에서도 실천 가능한 스트레스 관리 기법을 소개합니다. 5분 명상, 호흡법, 업무 경계 설정 등 실용적인 방법들을 알아봅니다.",
            category: "스트레스",
            date: "2024-11-15",
        },
        {
            slug: "iron-deficiency-women",
            title: "여성의 철분 부족, 왜 중요한가요?",
            description: "생리로 인한 철분 손실과 빈혈 예방법을 알아봅니다. 철분이 풍부한 음식과 효과적인 섭취 방법, 보충제 선택 가이드를 제공합니다.",
            category: "영양",
            date: "2024-11-12",
        },
        {
            slug: "hormone-balance-foods",
            title: "호르몬 밸런스를 위한 식단 가이드",
            description: "호르몬 균형에 도움이 되는 음식과 피해야 할 음식을 소개합니다. 이소플라본, 오메가-3, 비타민 B군 등 핵심 영양소를 알아봅니다.",
            category: "호르몬",
            date: "2024-11-10",
        },
        {
            slug: "exercise-for-40s-women",
            title: "40대 여성을 위한 운동 루틴",
            description: "40대부터 시작해야 할 운동과 피해야 할 운동을 알아봅니다. 근력 운동, 유산소 운동, 유연성 운동의 황금 비율을 소개합니다.",
            category: "운동",
            date: "2024-11-08",
        },
    ];

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} 블로그</title>
    <link>${baseUrl}/blog</link>
    <description>${SITE_CONFIG.description}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
            .map(
                (post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.description}</description>
      <category>${post.category}</category>
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
        },
    });
}
