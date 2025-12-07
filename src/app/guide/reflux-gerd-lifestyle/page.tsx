import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, UtensilsCrossed, Bed, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "위식도 역류(GERD) 생활관리 가이드 | 나이스우먼",
    description: "식사·수면 자세·카페인·알코올 관리로 속쓰림과 역류를 줄이는 실천 팁.",
    keywords: ["역류성 식도염", "GERD", "속쓰림", "식사 조절", "수면 자세"],
    alternates: { canonical: "https://nicewomen.kr/guide/reflux-gerd-lifestyle" },
};

export default function RefluxGerdLifestyleGuide() {
    const tips = [
        "취침 3시간 전 식사 종료, 과식·기름진 음식 피하기",
        "카페인·탄산·알코올·초콜릿을 줄이고, 자극적 양념 최소화",
        "좌측으로 누워 자거나 머리를 15~20cm 올려 수면",
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>위장</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        위식도 역류(GERD) 생활관리 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        속쓰림과 역류는 식사 시점·구성, 수면 자세, 카페인·알코올 관리로 크게 개선할 수 있습니다.
                        간단한 생활 팁을 정리했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="tips" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 팁</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {tips.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="meal" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">식사 관리</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <UtensilsCrossed className="w-5 h-5 text-amber-600" />
                                    시간·양
                                </h3>
                                <p className="text-gray-700 text-sm">취침 3시간 전 식사 종료, 소량씩 나누어 먹기, 과식·늦은 야식 피하기.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    자극 식품 최소화
                                </h3>
                                <p className="text-gray-700 text-sm">카페인·탄산·알코올·초콜릿·매운 음식·지방 많은 식사를 줄입니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="sleep" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Bed className="w-5 h-5 text-amber-600" />
                            수면 자세
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>좌측으로 눕거나, 머리를 15~20cm 높여 수면</li>
                            <li>식사 직후 눕지 않기, 최소 2~3시간 뒤 취침</li>
                        </ul>
                    </section>

                    <section id="alert" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            의료 상담 포인트
                        </h3>
                        <p className="text-gray-700 text-sm">
                            체중 감소, 삼킴 곤란, 출혈(흑변), 지속 통증이 있으면 즉시 의료 상담이 필요합니다. 약·보충제 복용은 의료진 지시에 따르세요.
                        </p>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">속쓰림 기록하고 컷오프 조정하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        카페인 컷오프 계산기와 식사 리듬 도구로 역류를 줄여보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/caffeine-cutoff-calculator">
                            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                컷오프 계산기 →
                            </Button>
                        </Link>
                        <Link href="/tools/blood-sugar">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                식사 리듬 도구 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


