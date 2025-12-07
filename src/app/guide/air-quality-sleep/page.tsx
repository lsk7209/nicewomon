import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Wind, CloudRain, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "공기질·미세먼지 많은 날 수면 가이드 | 나이스우먼",
    description: "미세먼지·건조·알레르기 시즌에 침실 공기질을 관리하고 수면을 지키는 체크리스트.",
    keywords: ["미세먼지", "공기질", "수면", "가습", "청정기"],
    alternates: { canonical: "https://nicewomen.kr/guide/air-quality-sleep" },
};

export default function AirQualitySleepGuide() {
    const steps = [
        "귀가 후 샤워/세안으로 알레르겐 제거, 침구 먼지 제거",
        "실내 PM2.5 상태 확인, 청정기 자동/수동 강도 조절",
        "습도 40~55% 유지, 과도한 가습은 곰팡이·진드기 주의",
    ];

    const caution = [
        "가습기 물은 매일 교체, 주 1회 이상 세척",
        "청정기 필터 교체 주기 확인, 창문 환기는 미세먼지 낮은 시간대(아침 일시적 피크 주의)",
        "건조한 날 코막힘 시 식염수 세척 후 취침",
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-sky-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>환경</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        공기질·미세먼지 많은 날 수면 가이드
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
                        미세먼지·건조한 계절에는 침실 공기질 관리가 수면 질에 직접 영향을 줍니다.
                        간단한 3단계와 청정·가습 체크리스트를 정리했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="steps" className="bg-white border border-sky-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 3단계</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {steps.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="caution" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">청정·가습 체크</h2>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-sky-600" />
                                    청정기
                                </h3>
                                <p className="text-gray-700 text-sm">필터 주기 확인, 자동 모드 외 고농도 시간대 수동 강도 상향.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <CloudRain className="w-5 h-5 text-indigo-600" />
                                    가습기
                                </h3>
                                <p className="text-gray-700 text-sm">물 매일 교체, 주 1회 세척, 습도 40~55% 유지.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="alert" className="bg-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            호흡기 민감 시
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {caution.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">환경 점수 확인하고 수면 루틴 맞추기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 테스트와 환경 체크로 오늘 밤 컨디션을 준비하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/blog/fine-dust-sleep-care">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                미세먼지 수면 팁 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


