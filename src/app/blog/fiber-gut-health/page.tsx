import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Salad, Apple } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "식이섬유로 장 건강 챙기기: 프리·프로바이오틱스 | 나이스우먼 블로그",
    description: "프리바이오틱스와 프로바이오틱스 식품, 하루 섬유질 목표, 가스/복부팽만 줄이는 팁을 정리했습니다.",
    keywords: ["식이섬유", "프리바이오틱스", "프로바이오틱스", "장 건강", "가스"],
    alternates: { canonical: "https://nicewomen.kr/blog/fiber-gut-health" },
};

export default function FiberGutHealthPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "섬유질이 장에 좋은 이유" },
        { id: "foods", label: "프리·프로바이오틱스 식품" },
        { id: "targets", label: "하루 섬유질 목표" },
        { id: "tips", label: "복부팽만 줄이는 팁" },
        { id: "sample", label: "샘플 식단·간식" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>장 건강</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        식이섬유로 장 건강 챙기기: 프리·프로바이오틱스
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
                        하루 섬유질을 채우고 장내 미생물 균형을 잡으면 소화와 면역이 개선됩니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="summary" className="bg-white border border-emerald-100 rounded-2xl p-6 space-y-2">
                            <p className="text-sm font-semibold text-emerald-700">핵심 요약</p>
                            <p className="text-gray-800">
                                하루 섬유질 25g 이상, 물 30~35ml/kg, 프리+프로 식품을 매끼 포함하면 장내 미생물과 배변 리듬이 안정됩니다.
                                속불편 시에는 섬유질을 천천히 올리고 FODMAP이 높은 식품(양파·마늘·우유)을 조절하세요.
                            </p>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">섬유질이 장에 좋은 이유</h2>
                            <p className="text-gray-700">섬유질은 장내 미생물의 먹이가 되어 단쇄지방산을 만들고 장벽을 보호합니다.</p>
                        </section>

                        <section id="foods" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">프리·프로바이오틱스 식품</h2>
                            <Card className="border-l-4 border-emerald-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>프리: 귀리, 바나나, 양파, 마늘, 치커리 뿌리</p>
                                    <p>프로: 요거트, 김치, 된장, 케피어</p>
                                    <p>물은 섬유질과 함께 충분히 섭취</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="targets" className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">하루 섬유질 목표</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>총량: 25g 이상(채소·과일·통곡·콩류 분산)</li>
                                <li>분산: 매끼 8~10g, 간식 3~5g 수준으로 나눠 섭취</li>
                                <li>물: 체중(kg)×30~35ml, 섬유질 증량 시 물도 같이 증가</li>
                            </ul>
                        </section>

                        <section id="tips" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">복부팽만 줄이는 팁</h2>
                            <Card className="border-l-4 border-emerald-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 섬유질은 천천히 늘리기, 수분을 함께</p>
                                    <p>• FODMAP 민감하면 양파/마늘·유제품 양 조절</p>
                                    <p>• 하루 10~15분 걷기와 복식호흡으로 장 운동 돕기</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="sample" className="bg-white border border-emerald-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">샘플 식단·간식 (저자극)</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>아침: 오트+블루베리+아몬드, 요거트 소량</li>
                                <li>점심: 현미/퀴노아 + 닭가슴살 + 데친 채소</li>
                                <li>간식: 바나나 1개 또는 삶은 고구마 소량</li>
                                <li>저녁: 연어/두부 + 잎채소 샐러드, 올리브오일 드레싱</li>
                            </ul>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 섬유질을 늘리면 가스가 늘어요.</p>
                                <p>A. 3~5일 간격으로 조금씩 양을 늘리고, 물을 같이 늘리며, 양파·마늘·우유 등 고FODMAP을 줄여보세요.</p>
                                <p className="font-semibold">Q. 보충제(이눌린/PSYLLIUM)는?</p>
                                <p>A. 소량부터 시작해 물을 충분히 마시고, 복부 불편 시 용량을 줄이거나 중단 후 전문가와 상담하세요.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">장 건강 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">영양소 결핍 분석기와 부종/순환 체크로 소화 상태를 함께 확인하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/nutrients">
                            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                영양소 분석 →
                            </Button>
                        </Link>
                        <Link href="/tools/edema">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                부종/순환 체크 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

