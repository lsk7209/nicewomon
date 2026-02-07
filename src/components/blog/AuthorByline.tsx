"use client";

import { Author } from "@/lib/authors";
import { Calendar, RefreshCw, User } from "lucide-react";

interface AuthorBylineProps {
    author: Author;
    publishedDate: string;
    modifiedDate?: string;
    readTime?: string;
}

/**
 * 저자 바이라인 컴포넌트
 * 블로그 글 상단에 저자 정보 표시
 */
export function AuthorByline({
    author,
    publishedDate,
    modifiedDate,
    readTime,
}: AuthorBylineProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-y border-gray-200 my-6">
            {/* 저자 프로필 */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center overflow-hidden">
                    {author.image ? (
                        <img
                            src={author.image}
                            alt={author.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling?.classList.remove("hidden");
                            }}
                        />
                    ) : null}
                    <User className={`w-6 h-6 text-rose-400 ${author.image ? "hidden" : ""}`} />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{author.name}</p>
                    <p className="text-sm text-gray-600">{author.role}</p>
                </div>
            </div>

            {/* 날짜 및 읽기 시간 */}
            <div className="flex flex-wrap items-center gap-4 sm:ml-auto text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>발행: {publishedDate}</span>
                </div>
                {modifiedDate && modifiedDate !== publishedDate && (
                    <div className="flex items-center gap-1.5">
                        <RefreshCw className="w-4 h-4" />
                        <span>수정: {modifiedDate}</span>
                    </div>
                )}
                {readTime && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                        {readTime}
                    </span>
                )}
            </div>
        </div>
    );
}

/**
 * 저자 자격 증명 표시 컴포넌트 (선택적 사용)
 */
export function AuthorCredentials({ author }: { author: Author }) {
    if (!author.credentials || author.credentials.length === 0) return null;

    return (
        <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">저자 소개</p>
            <p className="text-sm text-gray-600 mb-3">{author.bio}</p>
            <div className="flex flex-wrap gap-2">
                {author.credentials.map((credential, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800"
                    >
                        {credential}
                    </span>
                ))}
            </div>
        </div>
    );
}
