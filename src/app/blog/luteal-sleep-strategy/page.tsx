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
        { id: "why", label: "왜 황체기에 잠이 뒤틀릴까?" },
        { id: "controls", label: "체온·카페인·식사 컨트롤" },
        { id: "routine", label: "취침 전 루틴" },
    ];

    const controls = [
        "침실 20~22도, 얇은 이불, 선풍기/쿨패드 활용",
        "카페인 13~14시 컷오프, 알코올 취침 3시간 전 중단",
        "저녁은 취침 3시간 전 마무리, 가벼운 단백질·섬유질 위주",
    ];

    const bedtime = [
        "블루라이트 60분 차단, 저조도 조명",
        "미지근한 샤워 후 4-7-8 호흡 4세트",
        "코로 길게 내쉬는 호흡 + 목·어깨 스트레칭 5분",
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
                    <section id="why">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 황체기에 잠이 뒤틀릴까?</h2>
                        <p className="text-gray-700">프로게스테론 영향으로 체온이 올라가고, 이는 입면을 방해합니다. 카페인·야식은 이를 더 악화시킵니다.</p>
                    </section>

                    <section id="controls" className="space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">체온·카페인·식사 컨트롤</h2>
                        <Card className="border-l-4 border-blue-500">
                            <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                {controls.map((item) => (
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

