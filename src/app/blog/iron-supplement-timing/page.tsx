import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Pill, Coffee, NotebookPen, AlertTriangle, SunMedium, Moon } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "철분제 언제 먹어야 할까? 흡수 높이는 타이밍 | 나이스우먼 블로그",
    description: "철분제를 효과적으로 먹는 시간, 비타민C 동시 섭취, 칼슘·카페인 간격, 아침/취침 전 사례별 가이드를 정리했습니다.",
    keywords: ["철분제", "복용 시간", "흡수", "비타민C", "커피 차", "칼슘 간격"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-supplement-timing" },
};

export default function IronSupplementTimingPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "타이밍이 중요한 이유" },
        { id: "timing", label: "복용 시간·방법" },
        { id: "avoid", label: "함께 피해야 할 것" },
        { id: "plan", label: "시간대별 예시" },
        { id: "checklist", label: "체크리스트" },
        { id: "faq", label: "FAQ" },
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
                        아침 공복이 어려우면 취침 2~3시간 전, 소량 식사와 함께하는 차선책을 활용하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="summary" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                            <p className="text-sm font-semibold text-amber-700">핵심 요약</p>
                            <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                                <Card className="border border-amber-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-amber-700 uppercase">타이밍</p>
                                        <p>1순위: 아침 공복+비타민 C 50~100mg</p>
                                        <p>2순위: 취침 2~3h 전 (역류 없을 때)</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-amber-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-amber-700 uppercase">간격</p>
                                        <p>칼슘·커피·차·유제품·멀티미네랄과 2h 이상</p>
                                        <p>하루 2회 시 8~12h 간격</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-amber-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-amber-700 uppercase">불편 시</p>
                                        <p>반 용량+소량 식사, 제형 변경(글루콘산염 등), 분할 복용</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">타이밍이 중요한 이유</h2>
                            <p className="text-gray-700">철분은 위산이 충분할 때, 경쟁하는 미네랄 없이 섭취해야 흡수가 잘 됩니다. 카페인·칼슘·탄닌은 흡수를 떨어뜨리고, 비타민 C는 2~3배 높여 줍니다.</p>
                        </section>

                        <section id="timing" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">언제, 어떻게 먹을까?</h2>
                            <Card className="border border-amber-200">
                                <CardContent className="pt-5 text-base text-gray-800 space-y-2 leading-relaxed">
                                    <p className="font-semibold text-amber-700 flex items-center gap-2"><SunMedium className="w-4 h-4" /> 아침</p>
                                    <p>기상 직후 물 300ml + 비타민 C 50~100mg, 철분 공복 복용</p>
                                    <p className="font-semibold text-amber-700 flex items-center gap-2"><Moon className="w-4 h-4" /> 취침 전 대안</p>
                                    <p>취침 2~3h 전, 역류 없을 때만. 속 불편 시 바나나 반 개 등 소량 식사와 복용</p>
                                    <p className="font-semibold text-amber-700">하루 2회</p>
                                    <p>8~12h 간격(예: 07:00 / 19:00). 칼슘·커피·유제품은 각 2h 이상 띄우기</p>
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

                        <section id="plan" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <NotebookPen className="w-5 h-5 text-amber-600" />
                                시간대별 예시 (1일 1~2회)
                            </h3>
                            <ul className="list-disc pl-5 text-gray-700 text-base space-y-1 leading-relaxed">
                                <li>옵션 A: 07:00 공복 복용 → 커피/유제품은 09:00 이후</li>
                                <li>옵션 B: 22:00 취침 2~3h 전 복용 → 저녁 식사는 19:00 이전</li>
                                <li>1일 2회: 07:00 / 19:00, 각 복용 전후 칼슘·커피 2h 이상 간격</li>
                                <li>위 불편 시 첫 3일은 반 용량→정량으로 적응</li>
                            </ul>
                        </section>

                        <section id="checklist" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">체크리스트</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-base space-y-1 leading-relaxed">
                                <li>복용 시간: 1순위 공복 아침, 2순위 취침 2~3h 전</li>
                                <li>간격: 커피/차/칼슘/유제품/멀티미네랄과 2h 이상</li>
                                <li>비타민 C 50~100mg 동시 섭취, 1일 2회면 8~12h 간격</li>
                                <li>불편 시 반 용량 3일 → 정량, 소량 식사와 함께</li>
                                <li>지속 통증·흑변·구토 시 즉시 복용 중단 후 상담</li>
                            </ul>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 위장 불편이 심하면?</p>
                                <p>A. 식후 30분에 복용하거나, 용량을 반으로 나눠 하루 2회로 분할해 보세요. 지속되면 의료진과 상의가 필요합니다.</p>
                                <p className="font-semibold">Q. 다른 영양제와 함께 먹어도 될까?</p>
                                <p>A. 칼슘·아연이 있는 멀티미네랄, 커피/차, 유제품과는 2시간 이상 간격을 두는 것이 안전합니다.</p>
                                <p className="font-semibold">Q. 비타민 C는 얼마나?</p>
                                <p>A. 50~100mg이면 충분합니다. 위가 민감하면 물과 함께 복용하고, 과량(500mg 이상)은 피하세요.</p>
                                <p className="font-semibold">Q. 임신/수유 중에도 동일한가?</p>
                                <p>A. 1일 200mg 카페인 이하, 철분 처방량은 의료진 지시를 따르세요. 간격·비타민 C 원칙은 동일합니다.</p>
                            </div>
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

