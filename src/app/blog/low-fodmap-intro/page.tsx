import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Salad, AlertCircle } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "저 FODMAP 식단 입문: 가스·복부팽만 완화 | 나이스우먼 블로그",
    description: "가스와 복부팽만을 줄이기 위한 저 FODMAP 식품 선택, 단계적 재도입 방법을 정리했습니다.",
    keywords: ["저 FODMAP", "복부팽만", "IBS", "가스", "식단"],
    alternates: { canonical: "https://nicewomen.kr/blog/low-fodmap-intro" },
};

export default function LowFodmapIntroPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "what", label: "저 FODMAP이란?" },
        { id: "foods", label: "먹어도 되는 것/피할 것" },
        { id: "reintro", label: "재도입 단계" },
        { id: "sample", label: "샘플 3일 식단" },
        { id: "checklist", label: "체크리스트" },
        { id: "faq", label: "FAQ" },
    ];

    const allow = ["쌀, 감자, 오트", "바나나, 블루베리, 딸기", "당근, 오이, 시금치", "라이스 누들, 글루텐 프리 빵"];
    const avoid = ["양파, 마늘, 사과, 배", "밀가루 빵/파스타", "꿀, 고과당 옥수수 시럽", "우유(락토스)"];

    return (
        <div className="bg-gradient-to-b from-lime-50 via-white to-lime-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-lime-700 hover:text-lime-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>장 건강</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        저 FODMAP 식단 입문
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
                        FODMAP을 줄이면 가스·복부팽만이 완화될 수 있습니다. 2~6주 저 FODMAP 후 단계적으로 재도입하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="summary" className="bg-lime-50 border border-lime-100 rounded-2xl p-6 space-y-2">
                            <p className="text-sm font-semibold text-lime-700">핵심 요약</p>
                            <p className="text-gray-800">
                                2~6주 저 FODMAP으로 증상을 가라앉힌 뒤, 식품군별로 3일씩 소량 재도입하며 개인 허용치를 찾습니다.
                                양파·마늘·밀·우유가 흔한 트리거이며, 레이블에서 이들을 우선 확인하세요.
                            </p>
                        </section>

                        <section id="what">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">저 FODMAP이란?</h2>
                            <p className="text-gray-700">발효성 당을 줄여 장내 가스 생성을 낮추는 식사법입니다. 2~6주 제한 후 식품군별로 재도입합니다.</p>
                        </section>

                        <section id="foods" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">먹어도 되는 것 / 피할 것</h2>
                            <Card className="border-l-4 border-lime-500">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p className="font-semibold">OK</p>
                                    {allow.map((item) => (
                                        <p key={item}>• {item}</p>
                                    ))}
                                    <p className="font-semibold mt-3">피하기</p>
                                    {avoid.map((item) => (
                                        <p key={item}>• {item}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="reintro" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">재도입 단계</h2>
                            <Card className="border-l-4 border-lime-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 2~6주 제한 후 식품군별 3일간 소량 재도입</p>
                                    <p>• 증상 없으면 양을 서서히 늘리고, 있다면 다시 제한</p>
                                    <p>• 식단·증상을 기록해 개인 허용 범위를 찾기</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="sample" className="bg-white border border-lime-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">샘플 3일 식단 (저 FODMAP)</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>Day1: 아침 오트+블루베리, 점심 쌀국수+닭가슴살, 저녁 연어+감자+시금치</li>
                                <li>Day2: 아침 스크램블에그+토마토, 점심 현미+닭가슴살+오이, 저녁 두부스테이크+당근</li>
                                <li>Day3: 아침 라이스케이크+땅콩버터, 점심 김 없는 주먹밥+채소, 저녁 흰살생선+주키니</li>
                            </ul>
                        </section>

                        <section id="checklist" className="bg-lime-50 border border-lime-100 rounded-2xl p-6 space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">체크리스트</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>제거 단계 2~6주: 고FODMAP(양파·마늘·밀·우유·꿀) 엄격히 제한</li>
                                <li>재도입: 식품군별 3일, 양을 단계적으로 증가시키며 증상 기록</li>
                                <li>음식·증상 로그를 매일 작성해 허용 범위 파악</li>
                                <li>프로바이오틱스/보충제는 증상 변하면 중단 후 상담</li>
                            </ul>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 양파·마늘을 완전히 빼야 할까?</p>
                                <p>A. 제거 단계에서는 가급적 제외하고, 재도입 시 1작은술 → 1큰술처럼 양을 단계적으로 늘리며 증상을 기록하세요.</p>
                                <p className="font-semibold">Q. 프로바이오틱스는 도움이 될까?</p>
                                <p>A. 일부에게 도움이 될 수 있으나, 증상이 변하면 중단 후 의료진 상담이 안전합니다.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-lime-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">소화·영양 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">영양소 분석기와 부종/순환 체크로 장 상태를 확인하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/nutrients">
                            <Button size="lg" className="bg-white text-lime-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                영양소 분석 →
                            </Button>
                        </Link>
                        <Link href="/tools/edema">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                부종/순환 체크 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

