import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, Moon, Coffee, Smartphone, Wind } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "숙면을 위한 7가지 과학적 방법 | 나이스우먼 블로그",
    description: "수면 전문가가 추천하는 수면 질 개선 방법입니다. 수면 위생부터 이완 기법까지, 오늘 밤부터 바로 실천할 수 있는 팁을 공유합니다.",
    keywords: ["숙면", "불면증", "수면위생", "수면질", "잠잘오는법"],
    alternates: { canonical: "https://nicewomen.kr/blog/sleep-quality-improvement" },
};

export default function SleepQualityBlogPost() {
    const tocItems = [
        { id: "why", label: "잠을 잘 못 자는 이유" },
        { id: "tips", label: "숙면 팁 7가지" },
        { id: "advice", label: "전문가 조언" },
        { id: "cta", label: "수면 점수 확인" },
        { id: "related", label: "관련 글" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면 건강</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        숙면을 위한 7가지 과학적 방법
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.21</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        잠들기 어렵거나 자고 일어나도 개운하지 않으신가요?
                        과학적으로 입증된 수면 위생 습관 7가지를 소개합니다.
                        오늘 밤부터 바로 실천해보세요.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">🌙</span>
                </div>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="why">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            왜 우리는 잠을 잘 못 잘까요?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            현대인의 수면 부족은 스트레스, 불규칙한 생활 습관, 과도한 카페인 섭취,
                            그리고 잠들기 전 스마트폰 사용 등 다양한 원인에서 비롯됩니다.
                            수면 부족은 면역력 저하, 집중력 감소, 감정 조절 어려움뿐만 아니라
                            장기적으로는 심혈관 질환과 치매 위험을 높일 수 있습니다.
                        </p>
                    </section>

                    <section id="tips">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            과학적으로 입증된 숙면 팁 7가지
                        </h2>

                        <Card className="mb-6 border-l-4 border-indigo-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-full">
                                        <Moon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            1. 규칙적인 수면 스케줄 유지하기
                                        </h3>
                                        <p className="text-gray-700">
                                            우리 몸의 생체 시계(Circadian Rhythm)를 일정하게 유지하는 것이 가장 중요합니다.
                                            주말에도 평일과 비슷한 시간에 일어나 햇빛을 쬐는 것이 좋습니다.
                                            기상 시간을 고정하면 취침 시간도 자연스럽게 맞춰집니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-amber-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full">
                                        <Coffee className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            2. 카페인 섭취 제한하기 (오후 2시 이후 금지)
                                        </h3>
                                        <p className="text-gray-700">
                                            카페인의 반감기는 사람에 따라 3~7시간입니다.
                                            오후 늦게 마신 커피는 밤늦게까지 혈중 농도가 남아 수면을 방해할 수 있습니다.
                                            점심 식사 이후에는 디카페인 커피나 허브차를 권장합니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-blue-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Smartphone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            3. 잠들기 1시간 전 블루라이트 차단
                                        </h3>
                                        <p className="text-gray-700">
                                            스마트폰, 태블릿, PC에서 나오는 블루라이트는 수면 호르몬인 멜라토닌 분비를 억제합니다.
                                            잠들기 1시간 전부터는 전자기기 사용을 멈추고 독서나 명상 등 아날로그 활동을 하세요.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-green-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Wind className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            4. 침실 환경 최적화 (온도, 습도, 조도)
                                        </h3>
                                        <p className="text-gray-700">
                                            이상적인 침실 온도는 18~22도입니다. 약간 서늘한 환경이 심부 체온을 낮춰 입면을 돕습니다.
                                            암막 커튼으로 빛을 완전히 차단하고, 습도는 50% 내외로 유지하세요.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="border-l-4 border-purple-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        5. 낮잠은 20분만
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        오후 3시 이전, 20분 이내의 짧은 낮잠은 활력을 주지만, 긴 낮잠은 밤잠을 방해합니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-rose-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        6. 4-7-8 호흡법
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        4초간 들이마시고, 7초간 멈추고, 8초간 내뱉는 호흡법은 부교감 신경을 활성화합니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-teal-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        7. 규칙적인 운동
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        낮 동안의 신체 활동은 수면 압력을 높여줍니다. 단, 잠들기 3시간 전 격한 운동은 피하세요.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="advice" className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-indigo-900 mb-3">
                            💡 수면 전문가의 조언
                        </h3>
                        <p className="text-gray-700">
                            "잠이 오지 않는데 억지로 누워있는 것은 오히려 불면증을 악화시킵니다.
                            20분 이상 잠들지 못한다면 침실을 나와 조용한 음악을 듣거나 책을 읽다가,
                            졸음이 올 때 다시 침대로 가세요. 침대는 '잠자는 곳'이라는 인식을 뇌에 심어주는 것이 중요합니다."
                        </p>
                    </section>
                    </div>
                </div>

                {/* CTA */}
                <section id="cta" className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        내 수면 점수는 몇 점일까요?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        간단한 테스트로 현재 수면의 질을 분석하고
                        <br />
                        맞춤형 수면 개선 솔루션을 받아보세요.
                    </p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Posts */}
                <section id="related" className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        관련 글
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/guide/sleep" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-indigo-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                                        수면 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        수면 질 개선을 위한 종합 가이드
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/guide/stress" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-indigo-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                                        스트레스 관리 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        스트레스와 수면의 관계 알아보기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/sleep" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-indigo-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                                        수면 질 테스트
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        나의 수면 패턴 분석하기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium">
                        ← 블로그 목록으로
                    </Link>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <Share2 className="w-5 h-5" />
                        <span>공유하기</span>
                    </button>
                </div>
            </article>
        </div>
    );
}
