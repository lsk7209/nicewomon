import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Bone, Dumbbell, Sun } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "50대 이후 골다공증 예방 루틴 | 나이스우먼 블로그",
    description: "칼슘·비타민D·단백질 섭취와 저강도 근력·햇빛 루틴으로 골다공증을 예방하는 방법을 정리합니다.",
    keywords: ["골다공증", "칼슘", "비타민D", "근력운동", "50대 건강"],
    alternates: { canonical: "https://nicewomen.kr/blog/osteoporosis-prevention-over50" },
};

export default function OsteoporosisPreventionPost() {
    const tocItems = [
        { id: "why", label: "왜 지금 대비해야 할까?" },
        { id: "diet", label: "식단·보충 전략" },
        { id: "exercise", label: "운동·햇빛 루틴" },
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
                        <span>뼈 건강</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        50대 이후 골다공증 예방 루틴
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.04</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        폐경 이후 뼈 손실은 빠르게 진행됩니다. 영양과 저강도 근력, 햇빛 노출로 뼈를 지키세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 지금 대비해야 할까?</h2>
                            <p className="text-gray-700">폐경 후 에스트로겐 감소로 뼈 손실 속도가 빨라집니다. 50대 초반부터 대비하는 것이 중요합니다.</p>
                        </section>

                        <section id="diet" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">식단·보충 전략</h2>
                            <Card className="border-l-4 border-amber-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>칼슘 1000~1200mg/일, 비타민D 800~1000IU/일</p>
                                    <p>단백질 1.2g/kg, 식사마다 분배</p>
                                    <p>카페인·염분 과다, 탄산음료는 줄이기</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="exercise" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">운동·햇빛 루틴</h2>
                            <Card className="border-l-4 border-amber-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 주 3회 저강도 근력(스쿼트, 밴드 로우, 브리지)</p>
                                    <p>• 10~15분 가벼운 점프/스텝으로 골밀도 자극</p>
                                    <p>• 오전 햇빛 10분, 필요 시 비타민D 보충</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">뼈 건강 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">체형 나이 측정기와 영양 분석으로 현재 상태를 확인하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/body-age">
                            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                체형 나이 측정 →
                            </Button>
                        </Link>
                        <Link href="/tools/nutrients">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                영양소 분석 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

