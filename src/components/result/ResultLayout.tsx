"use client";

import { Button } from "@/components/ui/button";
import { Download, Share2, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { createResultImage, downloadImage, shareUrl } from "@/lib/utils";

interface ResultLayoutProps {
    title: string;
    subtitle: string;
    score: number;
    maxScore: number;
    personaTitle: string;
    children: React.ReactNode;
}

export function ResultLayout({
    title,
    subtitle,
    score,
    maxScore,
    personaTitle,
    children,
}: ResultLayoutProps) {
    const handleShare = async () => {
        const url = window.location.href;
        await shareUrl(title, subtitle, url);
    };

    const handleDownload = async () => {
        const image = await createResultImage(
            title,
            subtitle,
            `${score}점`,
            personaTitle
        );
        if (image) {
            downloadImage(image, "nice-woman-result.png");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Actions */}
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-gray-500 hover:text-gray-900">
                        ← 홈으로
                    </Link>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleShare}>
                            <Share2 className="w-4 h-4 mr-2" />
                            공유
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleDownload}>
                            <Download className="w-4 h-4 mr-2" />
                            저장
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {children}
                </div>

                {/* Footer Actions */}
                <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/self-check/hormone">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            다시 진단하기
                        </Link>
                    </Button>
                </div>

                {/* Disclaimer */}
                <div className="text-center text-xs text-gray-400 space-y-1">
                    <p>본 결과는 의학적 진단이 아니며, 참고용으로만 활용하세요.</p>
                    <p>Source: Adapted from WHO/NIH, 보건복지부 자료 기반</p>
                </div>
            </div>
        </div>
    );
}
