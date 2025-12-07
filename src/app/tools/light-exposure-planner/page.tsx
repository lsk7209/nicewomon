import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "빛 노출 플래너 | 나이스우먼 도구",
    description: "기상/취침 시간을 입력하면 아침·점심·저녁 빛 노출 스케줄을 생성해 서카디언 리듬을 맞춥니다.",
    keywords: ["서카디언", "빛 노출", "수면 위생", "아침 루틴"],
    alternates: { canonical: "https://nicewomen.kr/tools/light-exposure-planner" },
};

export default function LightExposurePlannerIntro() {
    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-amber-700 hover:text-amber-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Sun className="w-4 h-4" />
                        <span>수면 리듬</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        빛 노출 플래너
                    </h1>
                    <p className="text-lg text-gray-700">
                        기상/취침 시간에 맞춰 아침 햇빛, 점심 산책, 저녁 조도 낮추기 알림을 제안합니다.
                        교대근무 전환에도 활용해보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-amber-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-amber-600" />
                                스케줄 예시
                            </h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>기상 후 30분 내 10~15분 햇빛</li>
                                <li>점심 5~10분 야외</li>
                                <li>취침 2시간 전 조도 50~100 lux</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-amber-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Moon className="w-5 h-5 text-indigo-600" />
                                함께 보면 좋은 글
                            </h2>
                            <p className="text-gray-700 text-sm">
                                아침 햇빛 수면 가이드, 교대근무 수면 가이드를 참고해 스케줄을 조정하세요.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/light-exposure-planner/test">
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-bold">
                            플래너 생성 →
                        </Button>
                    </Link>
                    <Link href="/blog/morning-sunlight-sleep">
                        <Button size="lg" variant="secondary" className="bg-white text-amber-700 border border-amber-200 hover:bg-amber-50 px-8 py-6 text-lg font-bold">
                            아침 햇빛 노출법 보기
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


