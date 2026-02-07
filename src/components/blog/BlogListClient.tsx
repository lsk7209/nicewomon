"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string; // description과 매핑됨
    category: string; // tags[0]과 매핑됨
    date: string;
    readTime: string;
    // image?: string; // 이미지 필드 제거 (사용 안 하므로)
}

interface BlogListClientProps {
    posts: BlogPost[];
    categories: string[];
}

export function BlogListClient({ posts, categories }: BlogListClientProps) {
    const [selectedCategory, setSelectedCategory] = useState("전체");

    // 카테고리 필터링
    const filteredPosts = selectedCategory === "전체"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);

    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>📝</span>
                        <span>건강 블로그</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">여성 건강 이야기</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        전문가가 전하는 건강 정보와
                        <br />
                        <strong className="text-gray-800">실생활에 바로 적용할 수 있는 팁</strong>
                    </p>
                </header>

                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === selectedCategory
                                    ? "bg-purple-600 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-6">
                    <p className="text-gray-600">
                        <strong className="text-purple-600">{selectedCategory}</strong> 카테고리 {filteredPosts.length}개 글
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-purple-100 to-rose-100 flex items-center justify-center">
                                    <span className="text-6xl">{getCategoryEmoji(post.category)}</span>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                                        <span className="font-medium text-xs bg-purple-100 px-2 py-1 rounded">{post.category}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors line-clamp-2">{post.title}</CardTitle>
                                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                                        <span>자세히 보기</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">해당 카테고리의 글이 아직 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function getCategoryEmoji(category: string): string {
    const emojiMap: Record<string, string> = {
        "갱년기": "🌸",
        "수면": "😴",
        "스트레스": "🧘",
        "영양": "🥗",
        "호르몬": "💊",
        "운동": "💪",
        "장 건강": "🍎",
        "심혈관": "❤️",
        "식습관": "🍽️",
        "뼈 건강": "🦴",
        "PMS": "🩸",
    };
    // 부분 일치 또는 기본값
    for (const key in emojiMap) {
        if (category.includes(key)) return emojiMap[key];
    }
    return "📝";
}
