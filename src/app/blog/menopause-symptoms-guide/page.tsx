import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export const metadata: Metadata = {
    title: "갱년기 증상, 이것만은 꼭 알아두세요 | 나이스우먼 블로그",
    description: "갱년기 증상을 조기에 인지하고 대처하는 방법을 알아봅니다. 안면 홍조, 수면 장애, 감정 변화 등 주요 증상과 관리법을 소개합니다.",
    keywords: ["갱년기 증상", "폐경기", "안면 홍조", "갱년기 관리", "호르몬 변화"],
    alternates: { canonical: "https://nicewomen.kr/blog/menopause-symptoms-guide" },
};

export default function MenopauseSymptomsBlogPost() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>갱년기</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        갱년기 증상, 이것만은 꼭 알아두세요
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.20</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        갱년기 증상을 조기에 인지하고 대처하는 방법을 알아봅니다.
                        안면 홍조, 수면 장애, 감정 변화 등 주요 증상과 관리법을 소개합니다.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-96 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">🌸</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            갱년기란 무엇인가요?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            갱년기는 여성의 생식 기능이 점차 소실되는 시기를 말합니다.
                            일반적으로 45~55세 사이에 시작되며, 마지막 생리 후 12개월이 지나면 폐경으로 진단됩니다.
                            한국 여성의 평균 폐경 연령은 49.7세입니다.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            갱년기는 단순히 생리가 멈추는 것이 아니라,
                            에스트로겐과 프로게스테론 같은 여성 호르몬이 급격히 감소하면서
                            다양한 신체적, 정서적 변화를 경험하는 시기입니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            주요 갱년기 증상 7가지
                        </h2>

                        <Card className="mb-6 border-l-4 border-rose-500">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    1. 안면 홍조 (Hot Flashes)
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    갱년기 여성의 75%가 경험하는 가장 흔한 증상입니다.
                                    갑자기 얼굴과 상체에 열이 오르며 땀이 나고, 심장이 빨리 뛰는 느낌이 듭니다.
                                </p>
                                <div className="bg-rose-50 p-4 rounded-lg">
                                    <p className="text-sm font-bold text-rose-900 mb-2">대처법:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• 시원한 환경 유지 (실내 온도 20도 이하)</li>
                                        <li>• 통풍이 잘 되는 옷 착용</li>
                                        <li>• 매운 음식, 카페인, 알코올 피하기</li>
                                        <li>• 규칙적인 운동으로 증상 완화</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-blue-500">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    2. 수면 장애
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    잠들기 어렵거나, 자주 깨거나, 새벽에 일찍 깨는 증상이 나타납니다.
                                    야간 발한으로 인해 수면이 방해받기도 합니다.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-sm font-bold text-blue-900 mb-2">대처법:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• 규칙적인 수면 시간 유지</li>
                                        <li>• 침실을 시원하고 어둡게 유지</li>
                                        <li>• 취침 전 스마트폰 사용 자제</li>
                                        <li>• 이완 기법 (명상, 호흡법) 실천</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-purple-500">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    3. 감정 변화
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    우울감, 불안, 짜증, 감정 기복이 심해집니다.
                                    호르몬 변화가 뇌의 신경전달물질에 영향을 미치기 때문입니다.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-green-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        4. 질 건조
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        에스트로겐 감소로 질 점막이 얇아지고 건조해집니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-orange-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        5. 체중 증가
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        대사율 감소로 같은 양을 먹어도 살이 찌기 쉽습니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-indigo-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        6. 기억력 저하
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        집중력 감소, 건망증이 심해질 수 있습니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-pink-500">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        7. 관절통
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        무릎, 손목 등 관절이 뻣뻣하고 아플 수 있습니다.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-amber-900 mb-3">
                            ⚠️ 이런 증상이 있다면 즉시 병원을 방문하세요
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• 폐경 후 질 출혈</li>
                            <li>• 심한 가슴 통증 또는 호흡 곤란</li>
                            <li>• 갑작스러운 심한 두통</li>
                            <li>• 우울증이 심해져 일상생활이 어려운 경우</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            갱년기 증상 완화 방법
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    1. 생활 습관 개선
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• <strong>규칙적인 운동:</strong> 주 150분 이상 유산소 운동</li>
                                    <li>• <strong>균형 잡힌 식단:</strong> 칼슘, 비타민 D, 이소플라본 섭취</li>
                                    <li>• <strong>금연, 절주:</strong> 증상 악화 방지</li>
                                    <li>• <strong>스트레스 관리:</strong> 명상, 요가, 취미 활동</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    2. 호르몬 대체 요법 (HRT)
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    에스트로겐과 프로게스테론을 보충하여 증상을 완화하는 치료법입니다.
                                    안면 홍조, 수면 장애, 질 건조 등에 효과적이지만,
                                    장단점이 있으므로 반드시 전문의와 상담 후 결정해야 합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    3. 자연 요법
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• <strong>이소플라본:</strong> 콩, 두부 등 식물성 에스트로겐</li>
                                    <li>• <strong>블랙 코호시:</strong> 안면 홍조 완화</li>
                                    <li>• <strong>오메가-3:</strong> 염증 감소, 기분 개선</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        나의 호르몬 상태 확인하기
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        3분 자가진단으로 현재 호르몬 밸런스를 확인하고
                        <br />
                        맞춤 관리 방법을 받아보세요
                    </p>
                    <Link href="/tools/hormone">
                        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            호르몬 밸런스 체크하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Posts */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        관련 글
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/guide/40s-health" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-purple-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                                        40대 여성 건강 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        40대 여성의 호르몬 변화와 건강 관리 방법
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/guide/hormone-basics" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-purple-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                                        호르몬 기초 지식
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        여성 호르몬의 역할과 연령별 변화
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/hormone" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-purple-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                                        호르몬 밸런스 체크
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        8가지 증상으로 호르몬 상태 확인
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
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
