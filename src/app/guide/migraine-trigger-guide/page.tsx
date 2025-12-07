import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Zap, AlertTriangle, GlassWater, NotebookPen, Info, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "편두통 트리거 관리 가이드 | 나이스우먼",
    description: "편두통을 유발하는 빛·수면·카페인·식사·호르몬 요인을 추적하고 줄이는 방법.",
    keywords: ["편두통", "두통 트리거", "카페인", "수면", "호르몬 두통"],
    alternates: { canonical: "https://nicewomen.kr/guide/migraine-trigger-guide" },
};

export default function MigraineTriggerGuide() {
    const triggers = [
        "수면 불규칙, 주말 과수면",
        "과도한/갑작스런 카페인 증감",
        "탈수, 끼니 거르기, 과도한 단 음료",
        "강한 빛/소음, 날씨·기압 변화",
        "호르몬 변화(배란기, 생리 직전)",
    ];

    const steps = [
        { title: "기록", detail: "두통 발생 시간, 수면, 카페인, 식사, 날씨, 생리 주기를 2주 이상 기록." },
        { title: "우선순위 트리거 2개 선택", detail: "수면·카페인·탈수 등 영향을 크게 주는 2개부터 조정." },
        { title: "완화 루틴", detail: "정해진 기상·취침, 카페인 컷오프, 수분·식사 리듬 고정." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "triggers", label: "주요 트리거" },
        { id: "steps", label: "3단계 관리" },
        { id: "hydrate", label: "수분·식사 리듬" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
        { id: "caution", label: "의료 상담 포인트" },
    ];

    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>두통</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        편두통 트리거 관리 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        편두통은 여러 트리거가 겹쳐 발생합니다. 기록→우선순위 선정→루틴 정착의 3단계로
                        재발을 줄여보세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">한눈에 보기</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">우선 트리거</p>
                                    <p>수면 일정 고정, 카페인 일정량·컷오프(오후 2시), 수분 6~8컵</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">기록·패턴</p>
                                    <p>2주 이상 두통/수면/카페인/생리/날씨를 기록해 상위 2개 트리거부터 수정</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">완화 루틴</p>
                                    <p>기상·취침 고정, 공복 두통 시 단백질+탄수 간식, 강한 빛·소음 회피</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section id="triggers" className="bg-white border border-purple-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">주요 트리거</h2>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            {triggers.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="steps" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 관리</h2>
                        {steps.map((s) => (
                            <Card key={s.title} className="border border-purple-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-purple-600" />
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-800 text-base leading-relaxed">{s.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="hydrate" className="bg-purple-50 border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <GlassWater className="w-5 h-5 text-indigo-600" />
                            수분·식사 리듬
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>기상 직후 물 1컵, 오전·오후 각 1~2컵 → 총 6~8컵 목표</li>
                            <li>끼니 거르지 않기, 단 음료 대신 물/티</li>
                            <li>카페인 일정량 유지, 오후 2시 이후 컷오프</li>
                            <li>공복 두통 시: 단백질+복합탄수 간식(견과+과일, 그릭요거트+베리)</li>
                        </ul>
                    </section>

                    <section id="selfcheck" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-purple-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>주 2회 이상 두통이 반복된다</li>
                            <li>수면·카페인·수분·생리 주기를 규칙적으로 기록하지 않는다</li>
                            <li>카페인 증감, 끼니 거르기, 탈수가 자주 있다</li>
                        </ul>
                        <p className="text-sm text-purple-700">2점 이상이면 2주간 기록→상위 2개 트리거(수면·카페인·탈수 등)부터 조정하고, 개선 없으면 의료 상담을 권장합니다.</p>
                    </section>

                    <section id="faq" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-purple-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 카페인을 줄이면 두통이 더 심해지는데?</p>
                                <p>양을 10~20%씩 1~2주 간 점진적으로 줄이고, 같은 시간대에 일정량을 유지하세요. 오후 2시 이후는 컷오프를 권장합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 날씨·기압 변화는 어떻게 대비하나요?</p>
                                <p>기압 앱 알림을 켜고, 전날 수분 섭취를 늘리며, 수면·카페인 일정을 평소보다 더 엄격히 유지하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 생리 직전에 두통이 심해요.</p>
                                <p>황체기/생리 직전에는 공복을 피하고, 카페인 일정량을 유지하며, 수면 7~8시간을 고정하세요. 필요 시 의료진과 예방약 여부를 상의합니다.</p>
                            </div>
                        </div>
                    </section>

                    <section id="caution" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            의료 상담이 필요한 경우
                        </h3>
                        <p className="text-base text-gray-800 leading-relaxed">
                            갑작스러운 심한 두통, 신경학적 증상(시야·언어·마비), 발열·경부강직 동반 시 즉시 의료기관을 방문하세요.
                        </p>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">두통 기록과 컷오프 알림 설정하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        카페인 컷오프 계산기와 수면 테스트로 두통 트리거를 줄여보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/caffeine-cutoff-calculator">
                            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                컷오프 계산기 →
                            </Button>
                        </Link>
                        <Link href="/tools/sleep">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수면 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


