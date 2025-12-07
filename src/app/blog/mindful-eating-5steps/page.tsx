import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Brain, Utensils } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "마음챙김 식사 5단계: 폭식 줄이고 포만감 높이기 | 나이스우먼 블로그",
    description: "속도 늦추기, 감각에 집중하기, 배고픔·포만 신호 관찰 등 마음챙김 식사 5단계를 안내합니다.",
    keywords: ["마음챙김 식사", "폭식", "포만감", "식습관", "식욕 조절"],
    alternates: { canonical: "https://nicewomen.kr/blog/mindful-eating-5steps" },
};

export default function MindfulEatingPost() {
    const tocItems = [
        { id: "why", label: "왜 마음챙김 식사인가" },
        { id: "steps", label: "5단계 실천" },
        { id: "tips", label: "지속하는 팁" },
    ];

    const steps = [
        "1) 멈춤: 식사 전 3회 심호흡, 배고픔 정도 점검",
        "2) 관찰: 색·향·식감 살피고 첫 입은 20회 이상 씹기",
        "3) 속도: 포크 내려놓기, 한 입 한 입 삼킨 후 다음 입",
        "4) 신호: 70~80% 포만감에서 멈추기",
        "5) 감사: 식사 후 몸/감정 상태를 짧게 기록",
    ];

    const tips = [
        "TV·폰 없이 먹기, 작은 접시 사용",
        "식전 단백질/섬유질로 포만감 높이기",
        "PMS/스트레스 시 감정·식욕을 함께 기록",
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>식습관</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        마음챙김 식사 5단계: 폭식 줄이고 포만감 높이기
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.05</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        식사 속도를 늦추고 몸의 신호를 인식하면 과식을 줄이고 소화를 돕습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 마음챙김 식사인가</h2>
                            <p className="text-gray-700">식사 속도가 빠르면 포만 신호가 늦게 도착합니다. 천천히 먹으면 혈당과 식욕이 안정됩니다.</p>
                        </section>

                        <section id="steps" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">5단계 실천</h2>
                            <Card className="border-l-4 border-amber-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    {steps.map((s) => (
                                        <p key={s}>• {s}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="tips" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">지속하는 팁</h2>
                            <Card className="border-l-4 border-amber-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    {tips.map((t) => (
                                        <p key={t}>• {t}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">식습관 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">영양소 결핍 분석기와 스트레스 테스트로 식욕 패턴을 살펴보세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/nutrients">
                            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                영양소 분석 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

