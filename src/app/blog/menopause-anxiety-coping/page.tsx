import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Heart, Wind, Brain, NotebookPen, Activity, Moon } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "갱년기 불안 다루기: 호흡·수면·루틴 | 나이스우먼 블로그",
    description: "갱년기 불안을 줄이는 호흡·수면 루틴, 카페인·알코올 컷오프, 밤 중 깨어남 대응과 자기 기록 스케일을 제시합니다.",
    keywords: ["갱년기 불안", "호흡법", "수면", "카페인 컷오프", "멘탈헬스", "밤 각성"],
    alternates: { canonical: "https://nicewomen.kr/blog/menopause-anxiety-coping" },
};

export default function MenopauseAnxietyCopingPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "불안이 커지는 이유" },
        { id: "techniques", label: "즉각 진정법" },
        { id: "sleep", label: "밤 불안 줄이기" },
        { id: "dayplan", label: "시간대별 루틴" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "checklist", label: "체크리스트" },
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
                        갱년기 불안 다루기: 호흡·수면·루틴
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.03</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        호르몬 변화로 불안이 커질 수 있습니다. 호흡·수면·카페인 관리로 몸과 마음을 진정시키세요.
                        카페인 컷오프(13~14시)와 밤 조도·온도·호흡 루틴을 함께 조정하면 AEO/스니펫 대응에도 유리합니다.
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
                                        <p className="text-xs font-semibold text-rose-700 uppercase">낮</p>
                                        <p>카페인 컷오프 13~14시, 10분 걷기+호흡, 알림 최소화</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-rose-700 uppercase">밤</p>
                                        <p>스크린 60분 차단, 20~22°C/습도 45~55%, 4-7-8 호흡 4세트</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-rose-700 uppercase">경고</p>
                                        <p>일상 기능 저하·공황 양상 시 전문 상담·진료를 우선</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 불안이 심해질까?</h2>
                            <p className="text-gray-700">호르몬 변동, 수면 부족, 카페인·알코올, 외부 스트레스가 겹칠 때 불안이 증폭됩니다.</p>
                        </section>

                        <section id="techniques" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">바로 쓸 수 있는 진정법</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-base text-gray-800 space-y-2 leading-relaxed">
                                    <p>4-7-8 호흡 4세트 또는 박스 호흡 4세트 (앱·알람으로 리마인더)</p>
                                    <p>손발 찬물 세수, 어깨·목 스트레칭 5분, 10분 걷기</p>
                                    <p>카페인 컷오프 13~14시, 알코올 취침 3시간 전 차단</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="sleep" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">밤 불안 줄이기</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-base text-gray-800 space-y-1 leading-relaxed">
                                    <p>• 취침 1시간 전 스크린 오프, 저조도 조명</p>
                                    <p>• 온도 20~22도, 습도 45~55% 유지</p>
                                    <p>• 가벼운 스트레칭과 코로 길게 내쉬는 호흡 4세트</p>
                                    <p>• 밤중 각성 시: 핸드폰 금지, 4-7-8 호흡 4세트 → 20분 넘으면 짧은 독서 후 재시도</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="dayplan" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <NotebookPen className="w-5 h-5 text-rose-600" />
                                시간대별 루틴 (샘플)
                            </h3>
                            <ul className="list-disc pl-5 text-gray-700 text-base space-y-1 leading-relaxed">
                                <li>아침: 기상 후 햇빛 10분, 단백질 20g 아침, 카페인 첫 컵</li>
                                <li>점심 전/후: 10분 걷기+호흡 2세트, 알림 배치(집중 블록)</li>
                                <li>오후: 카페인 컷오프 13~14시, 수분 1~2컵, 스트레칭 5분</li>
                                <li>저녁: 알코올/당 음료 최소화, 저조도 조명, 감사 3가지 적기</li>
                                <li>취침 전: 스크린 60분 차단, 4-7-8 호흡, 온도 20~22°C</li>
                            </ul>
                        </section>

                        <section id="selfcheck" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-rose-600" />
                                자가 체크 (0~3점)
                            </h3>
                            <ul className="list-disc pl-5 text-gray-700 text-base space-y-1 leading-relaxed">
                                <li>밤중 각성·입면 지연으로 수면 6h 이하</li>
                                <li>평소보다 불안/짜증이 잦고, 심박 증가가 느껴짐</li>
                                <li>카페인·알코올을 줄이지 못해 오후/밤 불안이 심함</li>
                                <li>집중이 어렵고 “멍함/뇌안개”가 자주 온다</li>
                            </ul>
                            <p className="text-xs text-gray-600">2점 이상이면 카페인 컷오프·스크린 차단·호흡 루틴을 즉시 적용, 1~2주 기록 후 지속되면 상담을 권장합니다.</p>
                        </section>

                        <section id="checklist" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">체크리스트</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-base space-y-1 leading-relaxed">
                                <li>카페인 13~14시 컷, 알코올 취침 3h 전 차단</li>
                                <li>스크린 60분 차단, 저조도 조명, 4-7-8/박스 호흡 4세트</li>
                                <li>수면 7~8h, 규칙적 기상, 침실 20~22°C·습도 45~55%</li>
                                <li>밤 각성 시 휴대폰 금지, 4-7-8 4세트 → 20분 넘으면 독서 후 재시도</li>
                                <li>불안·수면·카페인 기록 1~2주 작성, 2점↑이면 상담 고려</li>
                            </ul>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 약 없이도 가능할까?</p>
                                <p>A. 생활 조정과 인지행동적 전략으로 개선되는 경우가 많지만, 일상 기능 저하 시 전문 진료를 권장합니다.</p>
                                <p className="font-semibold">Q. 밤에 깨어났을 때는?</p>
                                <p>A. 핸드폰을 보지 말고, 조도를 낮춘 상태에서 4-7-8 호흡 4세트 후 다시 눕습니다. 20분 이상 잠 못 들면 짧은 독서 후 재시도하세요.</p>
                                <p className="font-semibold">Q. 호르몬 치료(HRT)를 고려해야 할까?</p>
                                <p>A. 일상 기능 저하·야간 각성이 지속되면 의료진과 상담하세요. 생활 조정은 병행해도 안전합니다.</p>
                                <p className="font-semibold">Q. 카페인을 완전히 끊어야 할까?</p>
                                <p>A. 1일 200mg 이하, 13~14시 컷오프를 우선 적용하세요. 불안·심박이 민감하면 데카프/허브티로 대체합니다.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">불안 점검하고 수면 지키기</h2>
                    <p className="text-lg mb-8 opacity-90">스트레스 테스트와 수면 테스트로 현재 상태를 확인하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                스트레스 테스트 →
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

