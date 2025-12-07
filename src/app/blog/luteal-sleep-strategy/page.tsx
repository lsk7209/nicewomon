import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Moon, Coffee, ThermometerSun } from "lucide-react";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "황체기 수면 전략: 체온·카페인·식사 관리 | 나이스우먼 블로그",
    description: "황체기 체온 상승으로 인한 수면 질 저하를 막기 위해 온도·카페인 컷오프·식사·호흡 루틴을 정리했습니다.",
    keywords: ["황체기", "수면", "카페인 컷오프", "체온", "멜라토닌"],
    alternates: { canonical: "https://nicewomen.kr/blog/luteal-sleep-strategy" },
};

export default function LutealSleepStrategyPost() {
    const tocItems = [
        { id: "overview", label: "한눈에 보기" },
        { id: "why", label: "왜 황체기에 잠이 뒤틀릴까?" },
        { id: "heat", label: "체온·카페인·식사 컨트롤" },
        { id: "timing", label: "시간대별 루틴" },
        { id: "routine", label: "취침 전 루틴" },
        { id: "faq", label: "FAQ" },
    ];

    const controls = [
        "침실 20~22도, 얇은 이불, 선풍기/쿨패드로 체온 하강 돕기",
        "카페인 13~14시 컷오프, 알코올은 취침 3시간 전 이후 중단",
        "저녁 식사 취침 3시간 전 마감, 단백질·섬유질 위주, 포만감 7부",
        "생리 전 부종 예방: 나트륨 줄이고 칼륨(바나나·잎채소) 보강",
    ];

    const timing = [
        "아침: 기상 후 30분 내 햇빛 10분, 물 1컵, 단백질 아침",
        "오전: 집중 업무 배치, 카페인 허용 시간대",
        "오후: 14시 이후 카페인 금지, 점심 후 10~15분 걷기",
        "저녁: 격한 운동 대신 요가·스트레칭, 식사는 취침 3시간 전 종료",
    ];

    const bedtime = [
        "블루라이트 60분 차단, 노란빛 스탠드로 조도 낮추기",
        "미지근한 샤워 후 4-7-8 호흡 4세트",
        "코로 길게 내쉬며 목·어깨 스트레칭 5분 + 바디스캔",
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
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        황체기 수면 전략: 체온·카페인·식사 관리
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
                        체온이 오르는 황체기에는 침실 환경, 카페인 컷오프, 식사·호흡 루틴으로 수면을 지켜야 합니다.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="overview" className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-2">
                        <p className="text-sm font-semibold text-blue-700">요약 답변</p>
                        <p className="text-gray-800">
                            황체기에는 체온을 낮추고 카페인·알코올을 앞당겨 끊으며, 취침 3시간 전 식사 마감과 스크린 차단 60분이
                            수면 질을 가장 크게 높입니다.
                        </p>
                        <p className="text-xs text-blue-700">* 부종이 동반되면 나트륨을 줄이고 칼륨 식품·가벼운 걷기를 병행하세요.</p>
                    </section>

                    <section id="why">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 황체기에 잠이 뒤틀릴까?</h2>
                        <p className="text-gray-700">
                            프로게스테론 영향으로 코어 체온이 0.3~0.5℃ 오르며 입면이 지연됩니다. 늦은 카페인·야식은 체온 하강을 막고,
                            수면 압력을 떨어뜨려 밤중 각성을 유발합니다.
                        </p>
                    </section>

                    <section id="heat" className="space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">체온·카페인·식사 컨트롤</h2>
                        <Card className="border-l-4 border-blue-500">
                            <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                {controls.map((item) => (
                                    <p key={item}>• {item}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <section id="timing" className="space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">시간대별 루틴</h2>
                        <Card className="border border-blue-100 shadow-sm">
                            <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                {timing.map((item) => (
                                    <p key={item}>• {item}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <section id="routine" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">취침 전 루틴</h2>
                        <Card className="border-l-4 border-blue-400">
                            <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                {bedtime.map((item) => (
                                    <p key={item}>• {item}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 생리 직전 부종이 심하면?</p>
                            <p>A. 나트륨 많은 국물·가공식품을 줄이고 칼륨·마그네슘 식품을 늘리며, 30분 걷기·종아리 펌핑을 추가하세요.</p>
                            <p className="font-semibold">Q. 카페인을 끊기 어렵다면?</p>
                            <p>A. 점진적 감량(1~2주)으로 컷오프를 14시로 앞당기고, 디카페인/허브티로 대체해 금단 두통을 줄입니다.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">수면 질 테스트로 황체기 수면 상태를 점검하세요.</p>
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

