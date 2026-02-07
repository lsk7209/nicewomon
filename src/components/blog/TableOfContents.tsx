"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TOCItem {
    level: number;
    text: string;
    slug: string;
}

interface TableOfContentsProps {
    toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        const headings = document.querySelectorAll("h1, h2, h3");
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    if (toc.length === 0) return null;

    return (
        <nav className="my-8 lg:my-0 lg:fixed lg:top-24 lg:left-[calc(50%+320px)] lg:w-64 max-lg:bg-gray-50 max-lg:p-6 max-lg:rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>목차</span>
                <span className="lg:hidden text-xs text-gray-400 font-normal">(터치하여 이동)</span>
            </h4>
            <ul className="space-y-2 text-sm border-l border-gray-200 pl-4">
                {toc.map((item) => (
                    <li
                        key={item.slug}
                        className={`transition-all duration-200 ${item.level === 3 ? "pl-4" : ""
                            }`}
                    >
                        <Link
                            href={`#${item.slug}`}
                            className={`block hover:text-rose-600 ${activeId === item.slug
                                ? "text-rose-600 font-medium translate-x-1"
                                : "text-gray-500"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${item.slug}`)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
