import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Coffee, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "카페인 컷오프 계산기 | 나이스우먼 도구",
    description: "기상/취침 시간과 민감도에 맞춰 오후 몇 시에 카페인을 끊어야 할지 계산합니다.",
    keywords: ["카페인 컷오프", "수면", "불면", "카페인 민감도"],
    alternates: { canonical: "https://nicewomen.kr/tools/caffeine-cutoff-calculator" },
};

export default function CaffeineCutoffCalculatorIntro() {
    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-emerald-700 hover:text-emerald-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Coffee className="w-4 h-4" />
                        <span>수면·카페인</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        카페인 컷오프 계산기
                    </h1>
                    <p className="text-lg text-gray-700">
                        취침 8~10시간 전에 카페인을 끊으면 수면 질을 지킬 수 있습니다.
                        기상/취침 시간, 민감도를 입력해 나만의 컷오프 시간을 계산하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-emerald-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-emerald-600" />
                                이렇게 활용하세요
                            </h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>기상/취침 시간, 카페인 민감도를 입력</li>
                                <li>추천 컷오프 시간과 대체 음료 제안 확인</li>
                                <li>수면 테스트와 함께 매주 점검</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-emerald-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">주의사항</h2>
                            <p className="text-gray-700 text-sm">
                                심박수·불안·속쓰림이 심하면 더 이른 시간에 컷오프하고,
                                임산부/수유부, 심혈관 질환자는 의료진과 상담하세요.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/caffeine-cutoff-calculator/test">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-bold">
                            컷오프 계산 시작하기 →
                        </Button>
                    </Link>
                    <Link href="/blog/caffeine-sensitivity-check">
                        <Button size="lg" variant="secondary" className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 px-8 py-6 text-lg font-bold">
                            카페인 감수성 가이드 보기
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    본 도구는 일반 정보 제공용이며, 의료 진단을 대체하지 않습니다.
                </p>
            </section>
        </div>
    );
}


