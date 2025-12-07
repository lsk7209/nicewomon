/**
 * 북마크 관리 유틸리티
 * localStorage를 사용하여 사용자의 북마크를 관리합니다.
 */

export interface Bookmark {
    id: string;
    type: "tool" | "guide" | "blog";
    title: string;
    url: string;
    addedAt: string;
}

const BOOKMARK_KEY = "nicewoman_bookmarks";

/**
 * 모든 북마크 가져오기
 */
export function getBookmarks(): Bookmark[] {
    if (typeof window === "undefined") return [];

    try {
        const stored = localStorage.getItem(BOOKMARK_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Failed to get bookmarks:", error);
        return [];
    }
}

/**
 * 북마크 추가
 */
export function addBookmark(bookmark: Omit<Bookmark, "addedAt">): void {
    if (typeof window === "undefined") return;

    try {
        const bookmarks = getBookmarks();
        const newBookmark: Bookmark = {
            ...bookmark,
            addedAt: new Date().toISOString(),
        };

        // 중복 체크
        const exists = bookmarks.some((b) => b.id === bookmark.id);
        if (exists) return;

        bookmarks.unshift(newBookmark);
        localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error("Failed to add bookmark:", error);
    }
}

/**
 * 북마크 제거
 */
export function removeBookmark(id: string): void {
    if (typeof window === "undefined") return;

    try {
        const bookmarks = getBookmarks();
        const filtered = bookmarks.filter((b) => b.id !== id);
        localStorage.setItem(BOOKMARK_KEY, JSON.stringify(filtered));
    } catch (error) {
        console.error("Failed to remove bookmark:", error);
    }
}

/**
 * 북마크 여부 확인
 */
export function isBookmarked(id: string): boolean {
    const bookmarks = getBookmarks();
    return bookmarks.some((b) => b.id === id);
}

/**
 * 북마크 토글 (추가/제거)
 */
export function toggleBookmark(bookmark: Omit<Bookmark, "addedAt">): boolean {
    const bookmarked = isBookmarked(bookmark.id);

    if (bookmarked) {
        removeBookmark(bookmark.id);
        return false;
    } else {
        addBookmark(bookmark);
        return true;
    }
}
