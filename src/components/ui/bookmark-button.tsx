"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { toggleBookmark, isBookmarked, type Bookmark as BookmarkType } from "@/lib/bookmark";

interface BookmarkButtonProps {
    item: Omit<BookmarkType, "addedAt">;
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
}

export function BookmarkButton({ item, variant = "outline", size = "sm" }: BookmarkButtonProps) {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        setBookmarked(isBookmarked(item.id));
    }, [item.id]);

    const handleToggle = () => {
        const newState = toggleBookmark(item);
        setBookmarked(newState);
    };

    return (
        <Button
            variant={variant}
            size={size}
            onClick={handleToggle}
            className={`gap-2 ${bookmarked ? "text-rose-600 border-rose-600" : ""}`}
        >
            {bookmarked ? (
                <>
                    <BookmarkCheck className="w-4 h-4" />
                    <span>저장됨</span>
                </>
            ) : (
                <>
                    <Bookmark className="w-4 h-4" />
                    <span>저장</span>
                </>
            )}
        </Button>
    );
}
