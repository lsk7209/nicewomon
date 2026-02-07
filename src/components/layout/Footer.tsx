"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // TODO: 실제 뉴스레터 API 연동 필요 (현재 준비 중)
            alert("뉴스레터 서비스를 준비 중입니다. 빠른 시일 내에 서비스를 시작할 예정입니다.");
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer className="bg-gray-50 border-t py-12">
            <div className="container mx-auto px-4">
                {/* 뉴스레터 구독 섹션 */}
                <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        💌 건강 뉴스레터 구독하기
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        매주 여성 건강 팁과 최신 콘텐츠를 받아보세요.
                    </p>
                    {subscribed ? (
                        <p className="text-green-600 font-medium">
                            ✅ 구독해 주셔서 감사합니다!
                        </p>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일 주소 입력"
                                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 w-full sm:w-64"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors"
                            >
                                구독하기
                            </button>
                        </form>
                    )}
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">나이스우먼</h4>
                        <p className="text-sm text-gray-600">
                            여성 건강 데이터 플랫폼
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">진단 도구</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/tools/hormone" className="hover:text-rose-600 transition-colors">호르몬 밸런스</Link></li>
                            <li><Link href="/tools/sleep" className="hover:text-rose-600 transition-colors">수면 질</Link></li>
                            <li><Link href="/tools/stress" className="hover:text-rose-600 transition-colors">스트레스</Link></li>
                            <li><Link href="/tools/body-age" className="hover:text-rose-600 transition-colors">체형 나이</Link></li>
                            <li><Link href="/tools/nutrients" className="hover:text-rose-600 transition-colors">영양소 결핍</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">가이드</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/guide/hormone-basics" className="hover:text-rose-600 transition-colors">호르몬 기초</Link></li>
                            <li><Link href="/guide/30s-health" className="hover:text-rose-600 transition-colors">30대 건강</Link></li>
                            <li><Link href="/guide/40s-health" className="hover:text-rose-600 transition-colors">40대 건강</Link></li>
                            <li><Link href="/guide/50s-health" className="hover:text-rose-600 transition-colors">50대 건강</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">정보</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-rose-600 transition-colors">소개</Link></li>
                            <li><Link href="/blog" className="hover:text-rose-600 transition-colors">블로그</Link></li>
                            <li><Link href="/faq" className="hover:text-rose-600 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-rose-600 transition-colors">문의</Link></li>
                            <li><Link href="/privacy" className="hover:text-rose-600 transition-colors">개인정보처리방침</Link></li>
                            <li><Link href="/terms" className="hover:text-rose-600 transition-colors">이용약관</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto mt-8 pt-8 border-t text-center text-sm text-gray-500">
                    <p className="mb-2">
                        본 서비스는 의학적 진단 또는 치료를 대신할 수 없습니다.
                    </p>
                    <p className="mb-4">
                        Source: Adapted from WHO/NIH, 보건복지부 자료 기반. Health Lab Research Team 재구성.
                    </p>
                    <p>© 2025 나이스우먼. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
