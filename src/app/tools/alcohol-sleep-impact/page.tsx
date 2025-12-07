import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wine, Moon, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "알코올 수면 영향 시뮬레이터 | 나이스우먼 도구",
    description: "잔 수와 마신 시점으로 수면 방해 정도(입면 지연, 각성 증가)를 추정합니다.",
    keywords: ["알코올", "수면 방해", "입면 지연", "각성", "수면 위생"],
    alternates: { canonical: "https://nicewomen.kr/tools/alcohol-sleep-impact" },
};

export default function AlcoholSleepImpactIntro() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-purple-700 hover:text-purple-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Wine className="w-4 h-4" />
                        <span>수면·알코올</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        알코올 수면 영향 시뮬레이터
                    </h1>
                    <p className="text-lg text-gray-700">
                        잔 수, 도수, 마신 시간을 입력하면 입면 지연과 각성 증가 가능성을 추정해
                        오늘 밤 수면 계획을 조정할 수 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-purple-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">이렇게 활용하세요</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>잔 수, 알코올 도수, 마신 시간 입력</li>
                                <li>입면 지연/각성 예상과 수면 최적화 팁 확인</li>
                                <li>전해질·수분 보충, 카페인 회피 시간 계획</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-purple-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Moon className="w-5 h-5 text-indigo-600" />
                                수면을 위한 팁
                            </h2>
                            <p className="text-gray-700 text-sm">
                                알코올 후 바로 눕지 말고, 물·전해질을 소량 보충하고
                                카페인은 다음 날 아침 최소화하세요.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/alcohol-sleep-impact/test">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-bold">
                            시뮬레이션 시작 →
                        </Button>
                    </Link>
                    <Link href="/blog/digital-burnout-detox">
                        <Button size="lg" variant="secondary" className="bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 px-8 py-6 text-lg font-bold">
                            회복 루틴 보기
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    본 도구는 일반 정보 제공용입니다. 음주 운전 금지, 의료 상담 필요 시 전문가와 상의하세요.
                </p>
            </section>
        </div>
    );
}


