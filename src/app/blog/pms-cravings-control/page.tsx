import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Utensils, Heart, Brain } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "PMS 과식·당 당기는 날, 갈망 다루기 | 나이스우먼 블로그",
    description: "PMS 시기 당·짠 음식 갈망을 줄이는 식사 순서, 단백질·섬유 전략, 카페인·알코올 컷오프를 안내합니다.",
    keywords: ["PMS", "과식", "식욕", "당 줄이기", "카페인 컷오프"],
    alternates: { canonical: "https://nicewomen.kr/blog/pms-cravings-control" },
};

export default function PmsCravingsControlPost() {
    const tocItems = [
        { id: "why", label: "PMS 때 식욕이 폭주하는 이유" },
        { id: "strategy", label: "갈망을 줄이는 식사 전략" },
        { id: "habits", label: "일상 루틴으로 유지하기" },
    ];

    const tips = [
        "아침 단백질 20g 이상(계란·그릭요거트)으로 혈당 스파이크 완화",
        "점심·저녁: 채소 → 단백질 → 탄수 순서로 먹기",
        "카페인·알코올은 오후 1~2시/취침 3시간 전 컷오프",
        "갈망 시 저당 스낵: 견과+프로틴 소량, 탄산수로 포만감 보조",
    ];

    const habits = [
        "생리 주기/기분/식욕을 2주만 기록해 패턴 확인",
        "4-7-8 호흡 3세트로 감정적 식사 끊기",
        "밤 스크린타임 60분 차단으로 숙면 확보",
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>PMS 관리</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        PMS 과식·당 당기는 날, 갈망 다루기
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.02</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        PMS 시기 혈당 변동과 수면 저하가 식욕을 키웁니다. 순서·타이밍·컷오프로 갈망을 줄여보세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 식욕이 폭주할까?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                황체기에는 프로게스테론 변화로 혈당 변동과 기분 기복이 커집니다. 수면 부족과 카페인·야식이 겹치면
                                렙틴/그렐린 불균형으로 단 음식이 더 당깁니다.
                            </p>
                        </section>

                        <section id="strategy" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">갈망을 줄이는 식사 전략</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    {tips.map((tip) => (
                                        <p key={tip}>• {tip}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="habits" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">루틴으로 유지하기</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    {habits.map((h) => (
                                        <p key={h}>• {h}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">주기별 증상 체크하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        PMS/PMDD 자가체크와 호르몬 테스트로 증상을 수치화하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/pms">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                PMS 자가체크 →
                            </Button>
                        </Link>
                        <Link href="/tools/hormone">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                호르몬 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

