"use client";

import { createArticleSchema } from "@/lib/schema";
import { Author } from "@/lib/authors";

interface ArticleJsonLdProps {
    headline: string;
    description: string;
    author: Author;
    datePublished: string;
    dateModified: string;
    url: string;
    image?: string;
}

/**
 * Article JSON-LD 스키마 컴포넌트
 * 블로그 글에 구조화된 데이터 추가
 */
export function ArticleJsonLd({
    headline,
    description,
    author,
    datePublished,
    dateModified,
    url,
    image,
}: ArticleJsonLdProps) {
    const schema = createArticleSchema(
        headline,
        description,
        author.name,
        datePublished,
        dateModified,
        url,
        `/about#${author.id}`,
        image
    );

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
