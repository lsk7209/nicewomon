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
        { id: "why", label: "섬유질이 장에 좋은 이유" },
        { id: "foods", label: "프리·프로바이오틱스 식품" },
        { id: "tips", label: "복부팽만 줄이는 팁" },
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
                                    <p>하루 섬유질 25g 이상, 물 충분히</p>
                                </CardContent>
                            </Card>
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

