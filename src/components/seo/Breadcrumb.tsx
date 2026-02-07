"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { createBreadcrumbListSchema } from "@/lib/schema";

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    showHome?: boolean;
}

/**
 * Breadcrumb 컴포넌트 (UI + JSON-LD 스키마)
 * 네비게이션과 SEO 구조화 데이터 동시 제공
 */
export function Breadcrumb({ items, showHome = true }: BreadcrumbProps) {
    const baseUrl = "https://nicewomen.kr";

    // 홈 포함 전체 breadcrumb 목록
    const allItems = showHome
        ? [{ name: "홈", href: "/" }, ...items]
        : items;

    // JSON-LD 스키마용 데이터
    const schemaItems = allItems.map((item) => ({
        name: item.name,
        url: `${baseUrl}${item.href}`,
    }));

    const schema = createBreadcrumbListSchema(schemaItems);

    return (
        <>
            {/* JSON-LD 스키마 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* UI 네비게이션 */}
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center flex-wrap gap-1.5 text-sm text-gray-600">
                    {allItems.map((item, index) => {
                        const isLast = index === allItems.length - 1;
                        const isFirst = index === 0;

                        return (
                            <li key={item.href} className="flex items-center gap-1.5">
                                {!isFirst && (
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                )}
                                {isLast ? (
                                    <span className="text-gray-900 font-medium">
                                        {isFirst && showHome ? (
                                            <span className="flex items-center gap-1">
                                                <Home className="w-4 h-4" />
                                                {item.name}
                                            </span>
                                        ) : (
                                            item.name
                                        )}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-rose-600 transition-colors"
                                    >
                                        {isFirst && showHome ? (
                                            <span className="flex items-center gap-1">
                                                <Home className="w-4 h-4" />
                                                {item.name}
                                            </span>
                                        ) : (
                                            item.name
                                        )}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
