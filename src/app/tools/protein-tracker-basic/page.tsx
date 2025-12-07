import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Calculator } from "lucide-react";

export const metadata: Metadata = {
    title: "단백질 섭취 추적기 | 나이스우먼 도구",
    description: "체중·활동·식사별 단백질 섭취량을 기록하고 일일 목표 대비 부족분을 계산합니다.",
    keywords: ["단백질", "섭취 추적", "근력", "체중 관리"],
    alternates: { canonical: "https://nicewomen.kr/tools/protein-tracker-basic" },
};

export default function ProteinTrackerBasicIntro() {
    return (
        <div className="bg-gradient-to-b from-lime-50 via-white to-lime-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-lime-700 hover:text-lime-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Dumbbell className="w-4 h-4" />
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        단백질 섭취 추적기
                    </h1>
                    <p className="text-lg text-gray-700">
                        체중·활동·목표(체중 유지/감량/근력)에 따라 권장 단백질을 제안하고,
                        식사별 기록으로 부족분을 계산해드립니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-lime-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력 항목</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>체중, 활동 수준</li>
                                <li>목표(유지/감량/근력)</li>
                                <li>식사별 단백질 g 기록</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-lime-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-emerald-600" />
                                결과 활용
                            </h2>
                            <p className="text-gray-700 text-sm">
                                일일 목표 대비 부족분을 보여주고, 간편 보충 아이디어(그릭요거트, 콩, 달걀 등)를 제안합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/protein-tracker-basic/test">
                        <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-6 text-lg font-bold">
                            추적 시작 →
                        </Button>
                    </Link>
                    <Link href="/blog/protein-powder-choice">
                        <Button size="lg" variant="secondary" className="bg-white text-lime-700 border border-lime-200 hover:bg-lime-50 px-8 py-6 text-lg font-bold">
                            단백질 파우더 가이드 보기
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


