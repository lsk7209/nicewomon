"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                {/* 404 Illustration */}
                <div className="space-y-4">
                    <h1 className="text-9xl font-bold text-rose-600">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        페이지를 찾을 수 없어요
                    </h2>
                    <p className="text-lg text-gray-600">
                        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                    </p>
                </div>

                {/* Helpful Links */}
                <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        이런 페이지는 어떠세요?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/tools/hormone" className="group">
                            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-rose-500 hover:bg-rose-50 transition-all">
                                <p className="font-bold text-gray-900 group-hover:text-rose-600">
                                    🌸 호르몬 밸런스 체크
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    호르몬 변화 신호 확인하기
                                </p>
                            </div>
                        </Link>

                        <Link href="/tools/sleep" className="group">
                            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all">
                                <p className="font-bold text-gray-900 group-hover:text-blue-600">
                                    😴 수면 질 테스트
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    수면 패턴 분석하기
                                </p>
                            </div>
                        </Link>

                        <Link href="/guide" className="group">
                            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all">
                                <p className="font-bold text-gray-900 group-hover:text-purple-600">
                                    📚 건강 가이드
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    연령별 건강 정보 보기
                                </p>
                            </div>
                        </Link>

                        <Link href="/about" className="group">
                            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all">
                                <p className="font-bold text-gray-900 group-hover:text-green-600">
                                    ℹ️ 서비스 소개
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    나이스우먼 알아보기
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
                            <Home className="w-5 h-5 mr-2" />
                            홈으로 돌아가기
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="px-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        이전 페이지로
                    </Button>
                </div>

                {/* Help Text */}
                <p className="text-sm text-gray-500">
                    문제가 계속되면{" "}
                    <Link href="/contact" className="text-rose-600 hover:underline font-medium">
                        고객센터
                    </Link>
                    로 문의해주세요.
                </p>
            </div>
        </div>
    );
}
