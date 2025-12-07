import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Sun, Moon } from "lucide-react";

export const metadata: Metadata = {
    title: "시차 적응 플래너 | 나이스우먼 도구",
    description: "출발/도착지 시간과 비행 일정을 입력하면 빛·식사·수면 계획을 3일 단위로 제안합니다.",
    keywords: ["시차", "제트랙", "빛 노출", "수면 계획", "여행"],
    alternates: { canonical: "https://nicewomen.kr/tools/jetlag-adjust-planner" },
};

export default function JetlagAdjustPlannerIntro() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-purple-700 hover:text-purple-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Plane className="w-4 h-4" />
                        <span>여행·수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        시차 적응 플래너
                    </h1>
                    <p className="text-lg text-gray-700">
                        출발/도착 시간, 체류 기간을 입력하면 빛 노출, 식사 시점, 낮잠 제한을 포함한
                        3일 플랜을 생성합니다. 교대근무 전환에도 응용할 수 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-purple-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력 항목</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>출발/도착지 시간대, 비행 시간</li>
                                <li>기상/취침 목표 시간</li>
                                <li>첫날 일정(업무/휴식 여부)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-purple-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Sun className="w-5 h-5 text-amber-600" />
                                빛·수면 가이드
                            </h2>
                            <p className="text-gray-700 text-sm">
                                아침 빛/저녁 조도, 낮잠 길이(20~30분 제한), 첫날 카페인·알코올 컷을 제안해
                                시차 적응을 돕습니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/jetlag-adjust-planner/test">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-bold">
                            플래너 생성 →
                        </Button>
                    </Link>
                    <Link href="/blog/jetlag-minimize-plan">
                        <Button size="lg" variant="secondary" className="bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 px-8 py-6 text-lg font-bold">
                            시차 최소화 3일 플랜 보기
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


