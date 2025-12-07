import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Weight, Moon, Dumbbell, Utensils, Activity, NotebookPen, AlertCircle } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "갱년기 체중 증가: 호르몬·수면·식단 연쇄 풀어보기 | 나이스우먼 블로그",
    description: "중년 이후 체중 변화의 주요 원인과 수면·근력·단백질 전략, 7일 샘플 플랜과 자가 체크(0~3점)를 제공합니다.",
    keywords: ["갱년기 체중", "호르몬", "수면", "근력운동", "단백질", "7일 플랜"],
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
        { id: "summary", label: "한눈에 보기" },
        { id: "factors", label: "체중 증가의 요인" },
        { id: "actions", label: "바로 시작할 행동" },
        { id: "sleep", label: "수면이 중요한 이유" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "week", label: "7일 플랜" },
        { id: "faq", label: "FAQ" },
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
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <p className="text-sm font-semibold text-rose-700">핵심 요약</p>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">단백질</p>
                                    <p>1.2~1.6g/kg (60kg → 72~96g), 끼니당 20~30g 분배</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">운동</p>
                                    <p>주 3회 근력 + 6천~8천 보, 하체 복합운동 우선</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">수면</p>
                                    <p>7~8h, 카페인 컷 13~14시, 알코올 취침 3h 전 중단</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section id="factors" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Weight className="w-6 h-6 text-rose-600" />
                            체중 증가의 세 가지 축
                        </h2>
                        {factors.map((f) => (
                            <Card key={f.title} className="border-l-4 border-rose-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{f.title}</p>
                                    <p className="text-gray-800 text-base leading-relaxed">{f.detail}</p>
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
                                    <p className="text-gray-800 text-base leading-relaxed">{a.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="sleep" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-rose-900 flex items-center gap-2">
                            <Moon className="w-5 h-5" />
                            수면이 먼저인 이유
                        </h3>
                        <p className="text-gray-800 text-base leading-relaxed">
                            깊은 수면은 렙틴을 회복시키고 근육 회복을 돕습니다. 수면이 불안정하면 운동·식단 효과가 반감됩니다.
                            카페인은 오후 1~2시 이전, 알코올은 취침 3시간 전 중단이 기본입니다.
                        </p>
                    </section>

                    <section id="selfcheck" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-rose-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>1년 새 허리둘레/체중이 5% 이상 증가</li>
                            <li>단백질 20g 이상 식사 비율이 낮다</li>
                            <li>수면 6시간 이하가 잦거나, 카페인 컷오프가 지켜지지 않는다</li>
                        </ul>
                        <p className="text-sm text-rose-700">2점 이상이면 7일 플랜을 적용하고, 갑작스런 체중·복부 비만 증가는 검진을 권장합니다.</p>
                    </section>

                    <section id="week" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-rose-600" />
                            7일 플랜 (샘플)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>Day1: 단백질 20g 아침, 카페인 컷 14시, 저녁 조도↓</li>
                            <li>Day2: 근력(하체) 30분, 7천 보 걷기</li>
                            <li>Day3: 수면 8h 목표, 알코올 금지, 스트레칭 10분</li>
                            <li>Day4: 근력(전신) 30분, 단백질 90g 이상 분배</li>
                            <li>Day5: 인터벌 걷기 30분, 저녁 탄수 절반으로</li>
                            <li>Day6: 회복일, 블루라이트 최소화, 20분 산책</li>
                            <li>Day7: 주간 체크(허리둘레, 수면, 단백질량) → 다음 주 조정</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">탄수는 얼마나 줄여야 하나요?</p>
                                <p className="text-gray-800 text-base leading-relaxed">총 칼로리의 40~50% 범위 내에서, 단백질을 먼저 채우고 저녁 탄수를 절반 수준으로 조정하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">체중이 안 내려갈 때?</p>
                                <p className="text-gray-800 text-base leading-relaxed">수면·카페인 컷오프·알코올·NEAT(걷기)를 먼저 점검하세요. 2~4주 일관 후에도 변화 없으면 의료 상담을 권장합니다.</p>
                            </CardContent>
                        </Card>
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

