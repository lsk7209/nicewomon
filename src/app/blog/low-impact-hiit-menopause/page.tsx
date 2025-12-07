import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Activity, Heart } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "갱년기 맞춤 저충격 HIIT 10분 루틴 | 나이스우먼 블로그",
    description: "관절 부담을 줄이면서 심박을 올리는 10분 저충격 HIIT 루틴을 소개합니다.",
    keywords: ["HIIT", "저충격", "갱년기 운동", "인터벌", "유산소"],
    alternates: { canonical: "https://nicewomen.kr/blog/low-impact-hiit-menopause" },
};

export default function LowImpactHiitMenopausePost() {
    const tocItems = [
        { id: "why", label: "왜 저충격 HIIT인가?" },
        { id: "routine", label: "10분 루틴" },
        { id: "tips", label: "안전·효과 팁" },
    ];

    const moves = [
        "1분: 마치 워크 + 팔 스윙",
        "1분: 스텝 터치 + 사이드 리치",
        "1분: 스쿼트-리치(저충격)",
        "1분: 무릎 들기 + 팔 스윙",
        "1분: 백런지 스텝백",
        "1분: 사이드 런지 스텝",
        "1분: 암 서클 + 걷기",
        "1분: 힐 리프트 카프레즈",
        "1분: 코어 브레이스 워킹",
        "1분: 쿨다운 스트레칭",
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>운동</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        갱년기 맞춤 저충격 HIIT 10분 루틴
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
                        뼈·관절 부담을 줄이면서 심폐 지구력을 올리고 싶은 갱년기/중년 여성에게 적합한 10분 루틴입니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 저충격 HIIT인가?</h2>
                            <p className="text-gray-700">점프 없이도 인터벌 효과를 낼 수 있어 관절 부담을 줄이면서 심박 상승과 대사 개선에 도움을 줍니다.</p>
                        </section>

                        <section id="routine" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">10분 루틴</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    {moves.map((m) => (
                                        <p key={m}>• {m}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="tips" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">안전·효과 팁</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 호흡은 규칙적으로, 통증 시 즉시 강도 하향</p>
                                    <p>• 수분·전해질 보충, 카페인 컷오프 준수</p>
                                    <p>• 주 3회, 비연속적으로 수행</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">체력·호르몬 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">호르몬·수면·스트레스 테스트로 오늘의 운동 강도를 조절하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                호르몬 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/sleep">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                수면 질 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

