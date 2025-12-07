import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Brain } from "lucide-react";

export const metadata: Metadata = {
    title: "PMS/PMDD 자가체크 | 나이스우먼",
    description: "주기별 증상과 기분 변화를 기록해 맞춤 루틴을 제안합니다.",
    keywords: ["PMS", "PMDD", "월경", "기분", "자가진단"],
    alternates: { canonical: "https://nicewomen.kr/tools/pms" },
};

export default function PmsToolPage() {
    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-4 h-4" />
                        <span>PMS/PMDD 체크</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        PMS/PMDD 자가체크
                    </h1>
                    <p className="text-lg text-gray-700">
                        주기별 기분·통증·피로·수면 변화를 입력하면 증상 패턴과 관리 루틴을 제안합니다.
                    </p>
                </div>

                <Card className="border-l-4 border-indigo-500">
                    <CardContent className="pt-6 space-y-3">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-indigo-600" />
                            체크 항목
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>월경 주기/통증 강도</li>
                            <li>기분(우울/분노/불안) 변화</li>
                            <li>수면 시간·질, 카페인/알코올 섭취</li>
                            <li>식욕·단 음식 갈망</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border border-indigo-100">
                    <CardContent className="pt-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-indigo-600" />
                            결과 예시
                        </h3>
                        <p className="text-gray-700 text-sm">
                            기분·수면·식욕 패턴을 바탕으로 호흡/명상 루틴, 카페인 컷오프, 영양(마그네슘·B6) 제안을 제공합니다.
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-3 flex-wrap">
                    <Link href="/guide/pms">
                        <Button variant="outline">PMS 가이드 보기</Button>
                    </Link>
                    <Link href="/blog/brain-fog-10min-recovery">
                        <Button variant="ghost">브레인 포그 회복 루틴</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

