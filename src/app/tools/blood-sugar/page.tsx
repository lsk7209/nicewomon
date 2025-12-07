import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Utensils, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "혈당 스파이크 체크 | 나이스우먼",
    description: "식사 패턴과 증상을 기록해 혈당 급등 리스크를 점검합니다.",
    keywords: ["혈당", "식사 순서", "저GI", "식후 졸림"],
    alternates: { canonical: "https://nicewomen.kr/tools/blood-sugar" },
};

export default function BloodSugarToolPage() {
    return (
        <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Activity className="w-4 h-4" />
                        <span>혈당 자가진단</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        혈당 스파이크 체크
                    </h1>
                    <p className="text-lg text-gray-700">
                        식사 순서, 간격, 증상을 간단히 입력해 혈당 급등 가능성을 확인하고 실천 팁을 받으세요.
                    </p>
                </div>

                <Card className="border-l-4 border-teal-500">
                    <CardContent className="pt-6 space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Utensils className="w-5 h-5 text-teal-600" />
                            체크 항목
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>아침/점심/저녁 식사 순서와 속도</li>
                            <li>간식·음료(당류/카페인) 섭취 시간</li>
                            <li>식후 졸림·두통·심박 변화 여부</li>
                            <li>하루 걸음수·가벼운 운동 시간</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border border-teal-100">
                    <CardContent className="pt-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-teal-600" />
                            소요 시간
                        </h3>
                        <p className="text-gray-700 text-sm">약 2분. 입력 후 즉시 결과와 식사·간식 루틴 제안을 제공합니다.</p>
                    </CardContent>
                </Card>

                <div className="flex gap-3 flex-wrap">
                    <Link href="/guide/blood-sugar">
                        <Button variant="outline">혈당 관리 가이드 보기</Button>
                    </Link>
                    <Link href="/blog/blood-sugar-eating-out">
                        <Button variant="ghost">외식 주문법 읽기</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

