"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBookmarks, removeBookmark, type Bookmark } from "@/lib/bookmark";
import { BookmarkCheck, Trash2, ExternalLink } from "lucide-react";

export default function BookmarksPage() {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

    useEffect(() => {
        setBookmarks(getBookmarks());
    }, []);

    const handleRemove = (id: string) => {
        removeBookmark(id);
        setBookmarks(getBookmarks());
    };

    const getTypeColor = (type: Bookmark["type"]) => {
        switch (type) {
            case "tool":
                return "text-purple-600 bg-purple-50";
            case "guide":
                return "text-blue-600 bg-blue-50";
            case "blog":
                return "text-rose-600 bg-rose-50";
            default:
                return "text-gray-600 bg-gray-50";
        }
    };

    const getTypeLabel = (type: Bookmark["type"]) => {
        switch (type) {
            case "tool":
                return "진단 도구";
            case "guide":
                return "가이드";
            case "blog":
                return "블로그";
            default:
                return type;
        }
    };

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <BookmarkCheck className="w-5 h-5" />
                        <span>내 북마크</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        저장한 콘텐츠
                    </h1>

                    <p className="text-lg text-gray-600">
                        나중에 다시 보고 싶은 콘텐츠를 모아두었습니다
                    </p>
                </header>

                {/* Bookmarks List */}
                {bookmarks.length > 0 ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600">
                                총 <strong className="text-gray-900">{bookmarks.length}개</strong>의 콘텐츠
                            </p>
                        </div>

                        {bookmarks.map((bookmark) => (
                            <Card key={bookmark.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(bookmark.type)}`}>
                                                {getTypeLabel(bookmark.type)}
                                            </div>
                                            <CardTitle className="text-xl mb-2">
                                                {bookmark.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm text-gray-500">
                                                {new Date(bookmark.addedAt).toLocaleDateString("ko-KR", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}에 저장
                                            </CardDescription>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link href={bookmark.url}>
                                                <Button variant="outline" size="sm" className="gap-2">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>보기</span>
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleRemove(bookmark.id)}
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="py-16 text-center">
                            <BookmarkCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                저장한 콘텐츠가 없습니다
                            </h3>
                            <p className="text-gray-600 mb-6">
                                마음에 드는 콘텐츠를 북마크하여 나중에 다시 확인하세요
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/">
                                    <Button className="bg-rose-600 hover:bg-rose-700">
                                        진단 도구 둘러보기
                                    </Button>
                                </Link>
                                <Link href="/guide">
                                    <Button variant="outline">
                                        가이드 보기
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Tips */}
                {bookmarks.length > 0 && (
                    <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                        <h3 className="font-bold text-blue-900 mb-2">💡 북마크 활용 팁</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• 각 페이지의 "저장" 버튼을 클릭하여 북마크에 추가할 수 있습니다</li>
                            <li>• 북마크는 브라우저에 저장되므로 다른 기기에서는 보이지 않습니다</li>
                            <li>• 정기적으로 저장한 콘텐츠를 확인하여 건강 관리에 활용하세요</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
