import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/tools/*/result"], // 결과 페이지는 크롤링 방지 (개인 데이터)
            },
        ],
        sitemap: "https://nicewomen.kr/sitemap.xml",
    };
}
