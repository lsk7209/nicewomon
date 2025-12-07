import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Weight, Moon, Dumbbell, Utensils } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "갱년기 체중 증가: 호르몬·수면·식단 연쇄 풀어보기 | 나이스우먼 블로그",
    description: "중년 이후 체중 변화의 주요 원인과 수면·근력·단백질 전략을 제안합니다.",
    keywords: ["갱년기 체중", "호르몬", "수면", "근력운동", "단백질"],
    alternates: { canonical: "https://nicewomen.kr/blog/menopause-weight-gain" },
};

export default function MenopauseWeightGainPost() {
    const factors = [
        { title: "에스트로겐 감소", detail: "복부 지방 재분포, 인슐린 민감도 저하로 체중 증가가 쉬워집니다." },
        { title: "수면 부족", detail: "렘·깊은 수면 감소가 렙틴/그렐린 불균형을 만들고 식욕이 증가합니다." },
        { title: "활동량 감소", detail: "근육량 감소와 NEAT(비운동 활동) 감소로 기초대사량이 낮아집니다." },
    ];

    const actions = [
        { title: "단백질 1.2~1.6g/kg", detail: "체중 60kg라면 하루 72~96g, 끼니마다 20~30g씩 분배." },
        { title: "주 3회 근력 + 6천~8천 보", detail: "하체 중심 복합운동 + 일상 걷기 늘리기." },
        { title: "수면 7~8시간, 컷오프 1~2시", detail: "카페인·알코올 시간 관리로 깊은 수면 확보." },
    ];

    const tocItems = [
        { id: "factors", label: "체중 증가의 요인" },
        { id: "actions", label: "바로 시작할 행동" },
        { id: "sleep", label: "수면이 중요한 이유" },
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
                        <span>갱년기</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        갱년기 체중 증가: 호르몬·수면·식단 연쇄 풀어보기
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>7분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        호르몬 변화, 수면 부족, 활동량 감소가 겹치면 체중 관리가 어려워집니다. 세 가지 축을 동시에 잡는 실천 전략을 정리했습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="factors" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Weight className="w-6 h-6 text-rose-600" />
                            체중 증가의 세 가지 축
                        </h2>
                        {factors.map((f) => (
                            <Card key={f.title} className="border-l-4 border-rose-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{f.title}</p>
                                    <p className="text-gray-700 text-sm">{f.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="actions" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Dumbbell className="w-6 h-6 text-rose-600" />
                            바로 시작할 행동 3가지
                        </h2>
                        {actions.map((a) => (
                            <Card key={a.title} className="border-l-4 border-rose-400">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{a.title}</p>
                                    <p className="text-gray-700 text-sm">{a.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="sleep" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-rose-900 flex items-center gap-2">
                            <Moon className="w-5 h-5" />
                            수면이 먼저인 이유
                        </h3>
                        <p className="text-gray-700 text-sm">
                            깊은 수면은 렙틴을 회복시키고 근육 회복을 돕습니다. 수면이 불안정하면 운동·식단 효과가 반감됩니다.
                            카페인은 오후 1~2시 이전, 알코올은 취침 3시간 전 중단이 기본입니다.
                        </p>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">나의 호르몬·수면 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">
                        호르몬 밸런스와 수면 테스트로 현재 상태를 확인하고 맞춤 루틴을 받아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                호르몬 밸런스 테스트 →
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

