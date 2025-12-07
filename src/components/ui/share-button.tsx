"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonProps {
    title: string;
    description?: string;
    url?: string;
}

export function ShareButton({ title, description, url }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const shareText = description || title;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleShareFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookUrl, "_blank", "width=600,height=400");
    };

    const handleShareTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, "_blank", "width=600,height=400");
    };

    const handleShareKakao = () => {
        // Kakao SDK가 로드되어 있다면 사용
        if (typeof window !== "undefined" && (window as any).Kakao) {
            (window as any).Kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: title,
                    description: shareText,
                    imageUrl: "https://nicewoman.kr/og-image.png",
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
            });
        } else {
            // Kakao SDK가 없으면 링크 복사
            handleCopyLink();
        }
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.error("Share failed:", err);
            }
        } else {
            setShowMenu(!showMenu);
        }
    };

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="sm"
                onClick={handleNativeShare}
                className="gap-2"
            >
                <Share2 className="w-4 h-4" />
                <span>공유하기</span>
            </Button>

            {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <button
                        onClick={handleCopyLink}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 text-green-600" />
                                <span className="text-sm text-green-600">복사됨!</span>
                            </>
                        ) : (
                            <>
                                <LinkIcon className="w-4 h-4" />
                                <span className="text-sm">링크 복사</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleShareFacebook}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">페이스북</span>
                    </button>

                    <button
                        onClick={handleShareTwitter}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                        <Twitter className="w-4 h-4 text-sky-500" />
                        <span className="text-sm">트위터</span>
                    </button>

                    <button
                        onClick={handleShareKakao}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                        <div className="w-4 h-4 bg-yellow-400 rounded-sm" />
                        <span className="text-sm">카카오톡</span>
                    </button>
                </div>
            )}

            {/* Backdrop to close menu */}
            {showMenu && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setShowMenu(false)}
                />
            )}
        </div>
    );
}
