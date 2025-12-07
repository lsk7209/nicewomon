import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Utensils, Heart, Brain } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "PMS 과식·당 당기는 날, 갈망 다루기 | 나이스우먼 블로그",
    description: "PMS 시기 당·짠 음식 갈망을 줄이는 식사 순서, 단백질·섬유 전략, 카페인·알코올 컷오프를 안내합니다.",
    keywords: ["PMS", "과식", "식욕", "당 줄이기", "카페인 컷오프"],
    alternates: { canonical: "https://nicewomen.kr/blog/pms-cravings-control" },
};

export default function PmsCravingsControlPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "PMS 때 식욕이 폭주하는 이유" },
        { id: "strategy", label: "갈망을 줄이는 식사 전략" },
        { id: "checklist", label: "체크리스트" },
        { id: "sample", label: "샘플 하루 식단" },
        { id: "habits", label: "일상 루틴으로 유지하기" },
        { id: "faq", label: "FAQ" },
    ];

    const tips = [
        "아침 단백질 20g 이상(계란·그릭요거트)으로 혈당 스파이크 완화",
        "점심·저녁: 채소 → 단백질 → 탄수 순서로 먹기",
        "카페인·알코올은 오후 1~2시/취침 3시간 전 컷오프",
        "갈망 시 저당 스낵: 견과+프로틴 소량, 탄산수로 포만감 보조",
    ];

    const habits = [
        "생리 주기/기분/식욕을 2주만 기록해 패턴 확인",
        "4-7-8 호흡 3세트로 감정적 식사 끊기",
        "밤 스크린타임 60분 차단으로 숙면 확보",
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
                        <span>PMS 관리</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        PMS 과식·당 당기는 날, 갈망 다루기
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.02</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        PMS 시기 혈당 변동과 수면 저하가 식욕을 키웁니다. 순서·타이밍·컷오프로 갈망을 줄여보세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-2">
                            <p className="text-sm font-semibold text-rose-700">핵심 요약</p>
                            <p className="text-gray-800">
                                아침 단백질 20~30g, 식사 순서(채소·단백질 → 탄수), 식후 10~15분 걷기, 카페인 컷오프 13~14시, 알코올 취침
                                3시간 전 중단이 갈망을 줄이는 핵심입니다.
                            </p>
                            <p className="text-xs text-rose-700">* 금단 두통이 걱정되면 카페인을 1~2주에 걸쳐 점진 감량하세요.</p>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 식욕이 폭주할까?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                황체기에는 프로게스테론 변화로 혈당 변동과 기분 기복이 커집니다. 수면 부족과 카페인·야식이 겹치면
                                렙틴/그렐린 불균형으로 단 음식이 더 당깁니다.
                            </p>
                        </section>

                        <section id="strategy" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">갈망을 줄이는 식사 전략</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    {tips.map((tip) => (
                                        <p key={tip}>• {tip}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="checklist" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">체크리스트</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>아침 단백질 20~30g, 식사 간격 3~4시간</li>
                                <li>카페인 13~14시 컷오프, 알코올 주 2회 이하·취침 3시간 전 금지</li>
                                <li>식후 10~15분 걷기, 밤 스크린 60분 차단</li>
                                <li>단 음료·디저트는 주 2회, 식사 직후 소량으로 제한</li>
                            </ul>
                        </section>

                        <section id="sample" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">샘플 하루 식단 (저당·고단백)</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>아침: 스크램블에그+시금치, 그릭요거트+블루베리</li>
                                <li>점심: 샐러드(채소+닭가슴살)+현미 반공기, 국물은 맛만</li>
                                <li>간식: 견과 20g + 탄산수, 또는 프로틴 쉐이크 소량</li>
                                <li>저녁: 연어/두부 + 구운 채소, 과일은 소량(한 손 컵)</li>
                            </ul>
                        </section>

                        <section id="habits" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">루틴으로 유지하기</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    {habits.map((h) => (
                                        <p key={h}>• {h}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 단 음료를 끊기 힘들면?</p>
                                <p>A. 주 2회로 횟수 제한 후 식사 직후 소량 섭취로 혈당 스파이크를 줄이고, 탄산수/무가당 차로 대체하세요.</p>
                                <p className="font-semibold">Q. 카페인 줄일 때 두통이 오면?</p>
                                <p>A. 1~2주에 걸쳐 용량을 20~30%씩 줄이고, 수분을 늘리며 디카페인·허브티로 치환하면 금단 두통을 완화할 수 있습니다.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">주기별 증상 체크하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        PMS/PMDD 자가체크와 호르몬 테스트로 증상을 수치화하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/pms">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                PMS 자가체크 →
                            </Button>
                        </Link>
                        <Link href="/tools/hormone">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                호르몬 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

