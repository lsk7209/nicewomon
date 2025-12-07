import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Pill, Coffee } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "철분제 언제 먹어야 할까? 흡수 높이는 타이밍 | 나이스우먼 블로그",
    description: "철분제를 효과적으로 먹는 시간, 피해야 할 음식·음료, 비타민C와의 병용 팁을 정리했습니다.",
    keywords: ["철분제", "복용 시간", "흡수", "비타민C", "커피 차"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-supplement-timing" },
};

export default function IronSupplementTimingPost() {
    const tocItems = [
        { id: "why", label: "타이밍이 중요한 이유" },
        { id: "timing", label: "복용 시간·방법" },
        { id: "avoid", label: "함께 피해야 할 것" },
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        철분제 언제 먹어야 할까? 흡수 높이는 타이밍
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.04</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        철분 흡수는 타이밍과 함께 먹는 음식에 크게 좌우됩니다. 커피·차·칼슘은 멀리하고, 비타민C와 함께 복용하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">타이밍이 중요한 이유</h2>
                            <p className="text-gray-700">철분은 위산이 충분할 때, 경쟁하는 미네랄 없이 섭취해야 흡수가 잘 됩니다.</p>
                        </section>

                        <section id="timing" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">언제, 어떻게 먹을까?</h2>
                            <Card className="border-l-4 border-amber-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>아침 공복 또는 취침 2~3시간 전, 비타민C(오렌지 주스)와 함께</p>
                                    <p>하루 2회라면 8~12시간 간격</p>
                                    <p>속 불편함이 있으면 소량 식사와 함께, 단 커피·유제품은 피하기</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="avoid" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">함께 피해야 할 것</h2>
                            <Card className="border-l-4 border-amber-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 커피, 홍차, 녹차 (카페인·탄닌)</p>
                                    <p>• 칼슘이 많은 우유·치즈·요거트</p>
                                    <p>• 멀티미네랄(칼슘·아연 포함)과 동시 복용</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">철분 상태 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">철분 부족이 의심되면 영양소 결핍 분석기와 스트레스/수면 테스트로 함께 점검하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/anemia">
                            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                빈혈 체크 →
                            </Button>
                        </Link>
                        <Link href="/tools/nutrients">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                영양소 분석 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

