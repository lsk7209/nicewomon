import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Sun, Moon, AlarmClock } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "서카디언 리듬을 맞추는 수면 위생 | 나이스우먼 블로그",
    description: "아침 빛·저녁 어둠·식사·카페인 타이밍으로 생체리듬을 정렬해 숙면을 돕는 방법을 안내합니다.",
    keywords: ["서카디언", "수면 위생", "아침 햇빛", "카페인 컷오프", "멜라토닌"],
    alternates: { canonical: "https://nicewomen.kr/blog/circadian-sleep-hygiene" },
};

export default function CircadianSleepHygienePost() {
    const tocItems = [
        { id: "why", label: "리듬이 깨지면 생기는 일" },
        { id: "timing", label: "시간대별 실천법" },
        { id: "habits", label: "매일 유지 루틴" },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면 위생</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        서카디언 리듬을 맞추는 수면 위생
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
                        빛·식사·카페인·운동 시간을 맞추면 수면 압력과 멜라토닌 분비가 개선됩니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">리듬이 깨지면?</h2>
                            <p className="text-gray-700">야간 각성, 아침 피로, 혈당 변동이 심해집니다. 빛·식사·카페인 타이밍이 핵심입니다.</p>
                        </section>

                        <section id="timing" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">시간대별 실천법</h2>
                            <Card className="border-l-4 border-blue-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>아침: 기상 후 30분 내 햇빛 10~15분, 물 1컵</p>
                                    <p>오후: 카페인 컷오프 13~14시, 점심 후 10분 걷기</p>
                                    <p>저녁: 식사는 취침 3시간 전 마무리, 격한 운동은 피하기</p>
                                    <p>취침 전: 조도 낮추기, 스크린 60분 차단, 4-7-8 호흡</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="habits" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">매일 유지 루틴</h2>
                            <Card className="border-l-4 border-blue-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 기상 시간 고정, 주말 편차 ±30분</p>
                                    <p>• 침실 20~22도, 암막/화이트노이즈로 방해 최소화</p>
                                    <p>• 저녁 루틴을 매일 같은 순서로 반복</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">수면 질 테스트로 내 리듬 상태를 점검하세요.</p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

