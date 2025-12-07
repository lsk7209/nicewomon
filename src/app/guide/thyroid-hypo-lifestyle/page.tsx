import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Activity, Utensils, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "갑상선 저하 의심 시 생활 가이드 | 나이스우먼",
    description: "피로·한기·부종·체중 증가가 있을 때 점검할 생활 관리, 영양, 의료 상담 포인트를 정리했습니다.",
    keywords: ["갑상선 저하", "피로", "체중 증가", "부종", "생활 관리"],
    alternates: { canonical: "https://nicewomen.kr/guide/thyroid-hypo-lifestyle" },
};

export default function ThyroidHypoLifestyleGuide() {
    const signs = [
        "지속 피로, 한기, 피부 건조",
        "부종, 체중 증가, 변비",
        "심박수 저하, 집중력 저하",
    ];

    const foods = [
        "요오드·셀레늄: 해조류, 달걀, 브라질너트(소량)",
        "단백질·철: 살코기, 콩류, 달걀",
        "과도한 가공식품·과당 음료·과도한 섬유 보충제는 피하기",
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>건강</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        갑상선 저하 의심 시 생활 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        갑상선 기능 저하는 피로·부종·체중 증가 등 비특이 증상으로 놓치기 쉽습니다.
                        증상 체크, 식사/운동, 의료 상담 포인트를 정리했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="signs" className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">의심 증상 체크</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {signs.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-600 mt-2">증상이 지속되면 혈액검사(TSH, Free T4 등)를 의료진과 상의하세요.</p>
                    </section>

                    <section id="lifestyle" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">생활 관리</h2>
                        <Card className="border border-slate-200">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-emerald-600" />
                                    식사
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">요오드·셀레늄·철·단백질을 충분히, 과도한 가공식품과 당을 줄입니다.</p>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    {foods.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border border-slate-200">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-indigo-600" />
                                    운동·수면
                                </h3>
                                <p className="text-gray-700 text-sm">피로가 심하면 저강도 걷기부터, 수면 7~8시간 고정, 카페인 컷오프 준수.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="medical" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            의료 상담 포인트
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>최근 체중·피로·추위 민감도 변화, 생리 변화 기록</li>
                            <li>약물/보충제(요오드, 바이오틴, 비오틴) 복용 여부 공유</li>
                            <li>검사 전후 동일 시간·조건 유지(바이오틴은 검사 2~3일 전 중단 권고)</li>
                        </ul>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-slate-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">피로·부종 점검하고 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        스트레스·수면 테스트와 영양 가이드로 생활 관리를 시작하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


