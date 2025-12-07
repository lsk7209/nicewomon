"use client";

import { ReactNode } from "react";
import { Toc, TocItem } from "./Toc";
import { cn } from "@/lib/utils";

interface ContentWithTocProps {
    children: ReactNode;
    contentClassName?: string;
    items?: TocItem[];
    title?: string;
}

export function ContentWithToc({ children, contentClassName, items, title }: ContentWithTocProps) {
    return (
        <div className="grid md:grid-cols-[1fr,3fr] gap-6">
            <div className="md:sticky md:top-24 h-fit">
                {items && items.length > 0 ? <Toc items={items} title={title} /> : null}
            </div>
            <div className={cn("prose prose-lg max-w-none space-y-10", contentClassName)}>{children}</div>
        </div>
    );
}



