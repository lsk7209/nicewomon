import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Pill, Utensils, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "철분제 복용 시 위 불편 줄이는 법 | 나이스우먼 블로그",
    description: "위장 자극을 줄이는 복용 타이밍, 식사 조합, 상호작용 주의 식품·약물을 정리했습니다.",
    keywords: ["철분제", "위 불편", "복용 타이밍", "상호작용", "빈혈"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-supplement-stomach" },
};

export default function IronSupplementStomachPost() {
    const tips = [
        "가벼운 식사 후 복용: 빈속이 부담되면 소량 탄수+단백질과 함께",
        "비타민C 소량 동시 섭취: 흡수 도움, 위 불편하면 물만",
        "칼슘·커피·차·유제품과 간격 2시간 이상",
    ];

    const faq = [
        { q: "아침·저녁 언제가 좋을까?", a: "불편이 없다면 아침 공복+물, 민감하면 가벼운 식사 후. 취침 직전은 역류가 있다면 피하세요." },
        { q: "변비가 심할 때?", a: "수분·섬유질을 늘리고, 부드러운 제형(글루콘산염 등)이나 분할 복용을 고려하세요." },
    ];

    return (
        <div className="bg-gradient-to-b from-red-50 via-white to-red-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        철분제 복용 시 위 불편 줄이는 법
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        철분은 위 자극을 줄 수 있습니다. 복용 타이밍, 동시 섭취/피해야 할 식품을 조정하면
                        흡수를 유지하면서 불편을 낮출 수 있습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {tips.map((tip) => (
                                <li key={tip}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="timing" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">복용 타이밍·조합</h2>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Pill className="w-5 h-5 text-rose-600" />
                                    공복 vs 식후
                                </h3>
                                <p className="text-gray-700 text-sm">흡수는 공복이 유리하지만, 위 불편 시 소량 식사와 함께. 우유·커피·차는 피하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-amber-600" />
                                    상호작용 회피
                                </h3>
                                <p className="text-gray-700 text-sm">칼슘, 제산제, 특정 항생제와 간격 2시간. 섬유·차·커피도 간격을 두세요.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="safety" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">불편 줄이기 팁</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>물 충분히, 눕지 말고 30분 이상 앉거나 서 있기</li>
                            <li>분할 복용 고려(아침/저녁), 제형 변경(WPI/WPH처럼 부드러운 제형)</li>
                            <li>변비 시 수분·섬유질, 부드러운 식이섬유 보충을 병행</li>
                        </ul>
                        <p className="text-sm text-gray-600">지속적 통증·흑변·구토 시 의료진 상담이 필요합니다.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-rose-100">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-700 text-sm">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">철분 상태 체크하고 복용 스케줄 잡기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        빈혈 체크 도구와 영양 가이드로 안전한 복용 타이밍을 설계하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/anemia">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                빈혈 체크 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://ods.od.nih.gov/factsheets/Iron-Consumer/" className="underline text-white">NIH Iron Fact Sheet</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


