import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Baby, Moon, Utensils, Activity, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "출산 후 회복기 수면·영양 루틴 | 나이스우먼 블로그",
    description: "단편 수면을 보완하는 낮잠 전략, 철·단백질·수분을 채우는 식사 팁, 24시간 블록 스케줄과 자가 체크를 제공합니다.",
    keywords: ["출산 후 회복", "산후 수면", "산후 영양", "철분", "단백질", "모유수유"],
    alternates: { canonical: "https://nicewomen.kr/blog/postpartum-sleep-nutrition" },
};

export default function PostpartumSleepNutritionPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "sleep", label: "수면 전략" },
        { id: "nutrition", label: "영양 포인트" },
        { id: "dayplan", label: "24시간 예시" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    const sleepTips = [
        "24시간을 3~4개 블록으로 나누고, 90분 코어 수면 확보를 목표",
        "파트너/가족 교대 시간을 정해 최소 1회 연속 3시간 수면 확보",
        "카페인은 오전/이른 오후에만, 저녁 이후는 허브티",
    ];

    const nutritionTips = [
        "단백질 20g+ 아침(달걀, 그릭요거트, 두부), 철·비타민C 조합 섭취",
        "수분·전해질: 모유수유 중이면 수분 섭취를 식사·간식마다 소량 보충",
        "철분·칼슘·약 복용은 전문의 안내에 따르기, 위 불편 시 식사와 함께",
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">출산 후 회복기 수면·영양 루틴</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.07</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        산후에는 긴 수면을 확보하기 어렵습니다. 짧은 코어 수면 블록, 철·단백질 중심 식사, 수분·전해질 균형으로 회복 속도를 높이세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">수면</p>
                                    <p>90분 코어 수면 블록 + 가족 교대로 3h 연속 수면 1회 확보</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">영양/수분</p>
                                    <p>단백질 20g 아침, 철+비타민C 조합, 식사마다 물/전해질 소량</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">카페인/환경</p>
                                    <p>카페인 오전~이른 오후, 저녁 조도↓·스크린↓</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="sleep" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">수면 전략</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Moon className="w-5 h-5 text-indigo-600" />
                                    코어 + 보충 수면
                                </h3>
                                <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                                    {sleepTips.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="nutrition" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">영양 포인트</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-emerald-600" />
                                    단백질·철·수분
                                </h3>
                                <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                                    {nutritionTips.map((n) => (
                                        <li key={n}>{n}</li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-700">약/보충제는 의료진 지시에 따르고, 빈혈 증상 시 추가 상담이 필요합니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="dayplan" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-amber-600" />
                            24시간 예시 (신생아 2~3시간 수유)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>블록 A: 00:00~03:00 수유/수면, 파트너 교대 준비</li>
                            <li>블록 B: 03:00~06:00 파트너 교대 → 3시간 연속 수면 확보</li>
                            <li>아침: 단백질 20g+철·비타민C 조합, 물/전해질</li>
                            <li>오전/점심: 20분 낮잠 1~2회, 카페인은 14시 이전</li>
                            <li>저녁: 밝은 조명 최소화, 스크린↓, 90분 코어 수면 목표</li>
                        </ul>
                    </section>

                    <section id="selfcheck" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-amber-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>3시간 연속 수면을 전혀 확보하지 못했다</li>
                            <li>현기증·두근거림·심한 피로가 지속된다</li>
                            <li>식사를 자주 거르거나, 단백질/철분 섭취가 부족하다</li>
                        </ul>
                        <p className="text-sm text-amber-700">2점 이상이면 교대 수면 계획을 재조정하고, 빈혈·우울 증상이 의심되면 의료 상담을 권장합니다.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">수면이 계속 끊기면?</p>
                                <p className="text-gray-700 text-sm">짧은 낮잠(20분)으로 버티되, 저녁 이후 낮잠은 피하고 조도를 낮춰 수면 신호를 살리세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">카페인 섭취량은?</p>
                                <p className="text-gray-700 text-sm">모유수유 시 200mg/일 이하 권장, 개인 민감도에 따라 더 줄이세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면·영양 점검 도구로 회복 속도 높이기</h2>
                    <p className="text-lg mb-8 opacity-90">수면 테스트, 철분 체크, 수분·전해질 플래너를 활용하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/anemia">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                철분 체크 →
                            </Button>
                        </Link>
                        <Link href="/tools/water-electrolyte-planner">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수분·전해질 플래너 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


