import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, AlertTriangle, Droplets } from "lucide-react";

export const metadata: Metadata = {
    title: "나트륨 섭취 점수 | 나이스우먼 도구",
    description: "식사·가공식품 섭취를 입력해 하루 나트륨 추정 섭취량과 점수를 제공합니다.",
    keywords: ["나트륨", "저염", "부종", "혈압", "식단 점수"],
    alternates: { canonical: "https://nicewomen.kr/tools/sodium-intake-score" },
};

export default function SodiumIntakeScoreIntro() {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-blue-700 hover:text-blue-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <UtensilsCrossed className="w-4 h-4" />
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        나트륨 섭취 점수
                    </h1>
                    <p className="text-lg text-gray-700">
                        국물/가공식품/외식 빈도와 양을 입력해 추정 나트륨 섭취량과 점수를 제공합니다.
                        부종·혈압 관리에 활용하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-blue-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력 항목</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>국/찌개·라면·가공식품 섭취 횟수</li>
                                <li>햄/소시지/치즈 등 가공육 빈도</li>
                                <li>외식/배달 음식 빈도</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-blue-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Droplets className="w-5 h-5 text-emerald-600" />
                                결과 활용
                            </h2>
                            <p className="text-gray-700 text-sm">
                                점수에 따라 감칠맛 대체재, 저염 조리 팁, 수분·칼륨 균형을 안내합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/sodium-intake-score/test">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold">
                            점수 계산 →
                        </Button>
                    </Link>
                    <Link href="/blog/edema-low-salt">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 px-8 py-6 text-lg font-bold">
                            저염·칼륨 가이드 보기
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    만성질환, 신장 질환이 있는 경우 의료진과 상담 후 조절하세요.
                </p>
            </section>
        </div>
    );
}


