import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Activity, Thermometer } from "lucide-react";

export const metadata: Metadata = {
    title: "수분·전해질 섭취 플래너 | 나이스우먼 도구",
    description: "체중·활동량·날씨를 바탕으로 하루 수분/전해질 권장량과 타이밍을 제안합니다.",
    keywords: ["수분 섭취", "전해질", "칼륨", "나트륨", "운동 수분"],
    alternates: { canonical: "https://nicewomen.kr/tools/water-electrolyte-planner" },
};

export default function WaterElectrolytePlannerIntro() {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-blue-700 hover:text-blue-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Droplets className="w-4 h-4" />
                        <span>수분·전해질</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        수분·전해질 섭취 플래너
                    </h1>
                    <p className="text-lg text-gray-700">
                        체중, 활동량, 날씨(온도/습도)를 반영해 하루 물·전해질 목표와 시간대를 제안합니다.
                        부종이 걱정될 때는 나트륨 점수 도구와 함께 사용하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-blue-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력 항목</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>체중, 평소 수분 섭취</li>
                                <li>운동 시간·강도</li>
                                <li>기온/습도(대략 입력 가능)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-blue-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Thermometer className="w-5 h-5 text-emerald-600" />
                                결과 활용
                            </h2>
                            <p className="text-gray-700 text-sm">
                                시간대별 물/전해질 추천, 부종 예방 팁, 카페인·알코올 섭취 시 보충량 안내를 제공합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/water-electrolyte-planner/test">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold">
                            플래너 시작 →
                        </Button>
                    </Link>
                    <Link href="/blog/hydration-electrolyte-guide">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 px-8 py-6 text-lg font-bold">
                            수분·전해질 가이드 보기
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    만성질환, 신장 질환이 있다면 의료진과 상담 후 사용하세요.
                </p>
            </section>
        </div>
    );
}


