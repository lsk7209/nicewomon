import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Droplets, Activity } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "수분·전해질 밸런스 가이드 | 나이스우먼 블로그",
    description: "활동량과 계절에 맞춘 수분·전해질 섭취법, 카페인·알코올·부종 관리 팁을 정리했습니다.",
    keywords: ["수분 섭취", "전해질", "칼륨", "나트륨", "부종"],
    alternates: { canonical: "https://nicewomen.kr/blog/hydration-electrolyte-guide" },
};

export default function HydrationElectrolyteGuidePost() {
    const tocItems = [
        { id: "overview", label: "한눈에 보기" },
        { id: "why", label: "왜 전해질이 중요할까?" },
        { id: "how", label: "하루 섭취 가이드" },
        { id: "tips", label: "부종·카페인 관리" },
        { id: "schedule", label: "시간대별 수분 루틴" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수분·전해질</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        수분·전해질 밸런스 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.05</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        물만 많이 마신다고 끝이 아닙니다. 나트륨·칼륨·마그네슘 밸런스가 부종과 피로를 좌우합니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="overview" className="bg-teal-50 border border-teal-100 rounded-2xl p-6 space-y-2">
                            <p className="text-sm font-semibold text-teal-700">요약 답변</p>
                            <p className="text-gray-800">
                                체중(kg)×30~35ml 물, 카페인 14시 컷오프, 활동량 많은 날은 저당 전해질 음료 소량, 나트륨↓ 칼륨·마그네슘↑
                                조합이 부종 없이 에너지를 유지하는 핵심입니다.
                            </p>
                            <p className="text-xs text-teal-700">* 만성 질환·신장 문제가 있으면 의료진 상담 후 섭취량을 조정하세요.</p>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 전해질이 중요할까?</h2>
                            <p className="text-gray-700">수분 흡수, 근육·신경 기능, 체온 조절에 핵심입니다. 땀·카페인·알코올이 많으면 전해질 손실이 커집니다.</p>
                        </section>

                        <section id="how" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">하루 섭취 가이드</h2>
                            <Card className="border-l-4 border-teal-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>체중(kg) × 30~35ml로 물 섭취량 계산</p>
                                    <p>활동량·땀 많을 때는 저당 전해질 음료 소량 추가</p>
                                    <p>칼륨 음식(바나나, 시금치), 마그네슘(견과, 녹색채소) 섭취</p>
                                    <p>나트륨: 가공식품·국물 줄이고, 레이블로 나트륨 1일 % 확인</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="tips" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">부종·카페인 관리</h2>
                            <Card className="border-l-4 border-teal-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 카페인 컷오프 13~14시, 알코올은 수분 손실 고려</p>
                                    <p>• 국물·가공식품 줄이고 물+칼륨 식품 늘리기</p>
                                    <p>• 하루 30분 걷기·종아리 펌핑으로 순환 개선</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="schedule" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">시간대별 수분 루틴</h2>
                            <Card className="border border-teal-100 shadow-sm">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>아침: 기상 직후 물 1컵, 카페인 전 가벼운 수분 보충</p>
                                    <p>오전: 집중 시간대 전후 소량씩(200~300ml) 나눠 마시기</p>
                                    <p>운동/땀 많은 날: 운동 전·중·후 200~300ml씩, 저당 전해질 음료는 1회 250ml 이내</p>
                                    <p>저녁: 취침 2시간 전 이후 과다 수분 섭취를 줄여 야간뇨 예방</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 카페인 음료도 수분 섭취로 포함되나요?</p>
                                <p>A. 소량은 포함되지만 이뇨가 있으므로 총량 계산 시 물 중심으로 80% 이상을 채우고, 카페인은 14시 이전에 제한하세요.</p>
                                <p className="font-semibold">Q. 부종이 있는데 물을 줄여야 하나요?</p>
                                <p>A. 물을 과도하게 줄이기보다 나트륨을 줄이고 칼륨·마그네슘을 늘리며, 움직임을 추가하는 편이 안전합니다.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수분·전해질 밸런스 점검</h2>
                    <p className="text-lg mb-8 opacity-90">부종/순환 체크와 영양 분석기로 상태를 확인하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/edema">
                            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                부종/순환 체크 →
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

