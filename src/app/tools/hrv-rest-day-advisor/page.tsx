import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ActivitySquare, BedDouble, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
    title: "HRV 휴식일 추천기 | 나이스우먼 도구",
    description: "HRV·수면·피로도를 입력해 오늘은 휴식/저강도/고강도 중 무엇이 적절한지 제안합니다.",
    keywords: ["HRV", "회복", "운동 강도", "휴식일", "스트레스"],
    alternates: { canonical: "https://nicewomen.kr/tools/hrv-rest-day-advisor" },
};

export default function HrvRestDayAdvisorIntro() {
    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-indigo-700 hover:text-indigo-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <HeartPulse className="w-4 h-4" />
                        <span>회복</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        HRV 휴식일 추천기
                    </h1>
                    <p className="text-lg text-gray-700">
                        베이스라인 대비 HRV, 수면 시간·각성, 주관적 피로를 입력하면
                        오늘의 권장 강도(휴식/저강도/고강도)를 제안합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-indigo-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력 항목</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>아침 HRV와 평소 베이스라인</li>
                                <li>수면 시간, 밤중 각성 횟수</li>
                                <li>주관적 피로/근육통</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-indigo-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <BedDouble className="w-5 h-5 text-indigo-600" />
                                결과 활용
                            </h2>
                            <p className="text-gray-700 text-sm">
                                HRV가 크게 하락하거나 수면이 부족하면 휴식/저강도를 추천합니다.
                                회복을 위해 수면·영양·저강도 루틴을 함께 안내합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/hrv-rest-day-advisor/test">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-bold">
                            추천 받기 →
                        </Button>
                    </Link>
                    <Link href="/guide/hrv-monitoring-guide">
                        <Button size="lg" variant="secondary" className="bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 px-8 py-6 text-lg font-bold">
                            HRV 가이드 보기
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


