import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Brain, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "번아웃 위험 스크리너 | 나이스우먼 도구",
    description: "에너지, 업무통제감, 수면, 정서 소진을 3분 설문으로 측정해 번아웃 위험을 스코어링합니다.",
    keywords: ["번아웃", "스트레스", "피로", "자가 평가"],
    alternates: { canonical: "https://nicewomen.kr/tools/burnout-risk-screener" },
};

export default function BurnoutRiskScreenerIntro() {
    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-orange-700 hover:text-orange-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Flame className="w-4 h-4" />
                        <span>스트레스</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        번아웃 위험 스크리너
                    </h1>
                    <p className="text-lg text-gray-700">
                        에너지, 업무·가정 통제감, 수면, 감정 소진을 평가해
                        현재 번아웃 위험 구간을 알려주고 회복 액션을 제안합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-orange-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">포함 문항</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>피로도·집중도</li>
                                <li>통제감·과부하 체감</li>
                                <li>수면 질·각성</li>
                                <li>감정 둔감/분노/우울감</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-orange-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-600" />
                                결과 활용
                            </h2>
                            <p className="text-gray-700 text-sm">
                                위험 구간별로 휴식일, 알림 차단, 회복 루틴(수면/영양/운동)을 제안하고,
                                필요 시 전문가 상담을 안내합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/burnout-risk-screener/test">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-bold">
                            3분 테스트 시작 →
                        </Button>
                    </Link>
                    <Link href="/blog/burnout-recovery-steps">
                        <Button size="lg" variant="secondary" className="bg-white text-orange-700 border border-orange-200 hover:bg-orange-50 px-8 py-6 text-lg font-bold">
                            회복 3단계 보기
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    증상이 심하거나 일상 기능 저하가 지속되면 전문가 상담이 필요합니다.
                </p>
            </section>
        </div>
    );
}


