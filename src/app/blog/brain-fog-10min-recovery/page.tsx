import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Brain, Wind, Utensils, StretchHorizontal } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "브레인 포그 날, 10분 회복 루틴 | 나이스우먼 블로그",
    description: "호흡·스트레칭·저당 스낵으로 10분 안에 집중력을 회복하는 방법을 안내합니다.",
    keywords: ["브레인포그", "집중력", "스트레스", "회복 루틴", "호흡"],
    alternates: { canonical: "https://nicewomen.kr/blog/brain-fog-10min-recovery" },
};

export default function BrainFogRecoveryPost() {
    const routine = [
        { title: "2분 복식/박스 호흡", detail: "4초 들이마시고-4초 멈추고-4초 내쉬기-4초 멈추기 8회." },
        { title: "5분 목·흉추 스트레칭", detail: "어깨 돌리기, 목 측면 늘리기, 흉추 회전 스트레칭 각 1분씩." },
        { title: "3분 저당 스낵 + 수분", detail: "견과류 한 줌 + 물 1컵. 당 음료 대신." },
    ];

    const triggers = [
        "야근/수면 부족으로 인한 렘수면 감소",
        "카페인 과다/혈당 스파이크 후 저하",
        "장시간 앉은 자세로 인한 혈류 저하",
    ];

    const tocItems = [
        { id: "causes", label: "브레인 포그 원인" },
        { id: "routine", label: "10분 회복 루틴" },
        { id: "snack", label: "먹을 것" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>스트레스</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        브레인 포그 날, 10분 회복 루틴
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        멍하고 집중이 안 되는 날, 10분이면 할 수 있는 회복 루틴을 제안합니다. 호흡-스트레칭-간단 스낵 순서로 뇌 혈류와 안정감을 회복하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="causes" className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Brain className="w-6 h-6 text-indigo-600" />
                            브레인 포그 주요 원인
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {triggers.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="routine" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Wind className="w-6 h-6 text-indigo-600" />
                            10분 회복 루틴
                        </h2>
                        {routine.map((step) => (
                            <Card key={step.title} className="border-l-4 border-indigo-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{step.title}</p>
                                    <p className="text-gray-700 text-sm">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="snack" className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                            <Utensils className="w-5 h-5" />
                            무엇을 먹을까?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            혈당 급락을 막기 위해 당류 많은 간식 대신 견과류+단백질(그릭요거트 소량)을 선택하세요. 수분은 카페인 없는 따뜻한 차로.
                        </p>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">현재 스트레스/피로 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">
                        스트레스·수면 테스트로 컨디션을 측정하고 회복 루틴을 추천받으세요.
                    </p>
                    <Link href="/tools/stress">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            스트레스·번아웃 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

