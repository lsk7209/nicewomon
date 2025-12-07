import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Heart, Wind, Brain } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "갱년기 불안 다루기: 호흡·수면·루틴 | 나이스우먼 블로그",
    description: "갱년기 불안을 줄이는 호흡법, 수면 루틴, 카페인·알코올 관리, 지원 자원 연결을 안내합니다.",
    keywords: ["갱년기 불안", "호흡법", "수면", "카페인 컷오프", "멘탈헬스"],
    alternates: { canonical: "https://nicewomen.kr/blog/menopause-anxiety-coping" },
};

export default function MenopauseAnxietyCopingPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "불안이 커지는 이유" },
        { id: "techniques", label: "즉각 진정법" },
        { id: "sleep", label: "밤 불안 줄이기" },
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
                                낮: 카페인 13~14시 컷, 10분 호흡/걷기, 알림 최소화. 밤: 스크린 60분 차단, 온도 20~22도, 습도 45~55%, 코로 길게
                                내쉬는 호흡. 불안이 일상 기능을 떨어뜨리면 전문 상담이 필요합니다.
                            </p>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 불안이 심해질까?</h2>
                            <p className="text-gray-700">호르몬 변동, 수면 부족, 카페인·알코올, 외부 스트레스가 겹칠 때 불안이 증폭됩니다.</p>
                        </section>

                        <section id="techniques" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">바로 쓸 수 있는 진정법</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>4-7-8 호흡 4세트, 박스 호흡 4세트</p>
                                    <p>손발 찬물 세수, 어깨·목 스트레칭 5분</p>
                                    <p>카페인 컷오프 13~14시, 알코올 취침 3시간 전 차단</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="sleep" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">밤 불안 줄이기</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 취침 1시간 전 스크린 오프, 저조도 조명</p>
                                    <p>• 온도 20~22도, 습도 45~55% 유지</p>
                                    <p>• 가벼운 스트레칭과 코로 길게 내쉬는 호흡</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="checklist" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">체크리스트</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>카페인 13~14시 컷, 알코올 취침 3시간 전 이후 금지</li>
                                <li>스크린 60분 차단, 저조도 조명, 4-7-8/박스 호흡</li>
                                <li>수면 7~8h, 규칙적 기상, 침실 20~22도</li>
                                <li>불안·수면·카페인 기록을 1~2주 작성해 패턴 파악</li>
                            </ul>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 약 없이도 가능할까?</p>
                                <p>A. 생활 조정과 인지행동적 전략으로 개선되는 경우가 많지만, 일상 기능 저하 시 전문 진료를 권장합니다.</p>
                                <p className="font-semibold">Q. 밤에 깨어났을 때는?</p>
                                <p>A. 핸드폰을 보지 말고, 조도를 낮춘 상태에서 4-7-8 호흡 4세트 후 다시 눕습니다. 20분 이상 잠 못 들면 짧은 독서 후 재시도하세요.</p>
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

