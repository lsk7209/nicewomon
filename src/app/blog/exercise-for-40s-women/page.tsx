import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, Activity, Heart, Dumbbell, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "40대 여성을 위한 운동 루틴 | 나이스우먼 블로그",
    description: "40대부터 급격히 감소하는 근육량과 골밀도를 지키기 위한 운동법을 소개합니다. 무리하지 않고 꾸준히 할 수 있는 근력 운동과 유산소 운동 루틴을 확인하세요.",
    keywords: ["40대운동", "갱년기운동", "근력운동", "골다공증예방", "여성헬스"],
    alternates: { canonical: "https://nicewomen.kr/blog/exercise-for-40s-women" },
};

export default function ExerciseFor40sBlogPost() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>운동 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        40대 여성을 위한 최고의 운동 루틴
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.25</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        "예전 같지 않다"는 말이 절로 나오는 40대.
                        단순히 살을 빼는 운동이 아니라,
                        앞으로의 50년을 지탱할 '생존 근육'을 만들어야 할 때입니다.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-96 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">💪</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            40대, 운동의 목적이 달라져야 합니다
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            30대까지는 다이어트가 목적이었다면, 40대부터는 '건강 수명'을 늘리는 것이 목표여야 합니다.
                            에스트로겐 감소로 인해 근육량은 줄고 뱃살은 늘어나며, 뼈는 약해지기 시작합니다.
                            지금 시작하는 운동이 갱년기 증상을 완화하고 노후의 삶의 질을 결정합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            40대 여성 필수 운동 3가지
                        </h2>

                        <Card className="mb-6 border-l-4 border-purple-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <Dumbbell className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            1. 저강도 근력 운동 (주 2~3회)
                                        </h3>
                                        <p className="text-gray-700">
                                            무거운 역기를 들 필요는 없습니다. 스쿼트, 런지, 플랭크 같은 맨몸 운동으로도 충분합니다.
                                            특히 허벅지와 엉덩이 근육은 우리 몸의 당분을 저장하는 창고 역할을 하므로 반드시 단련해야 합니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-rose-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-rose-100 p-3 rounded-full">
                                        <Heart className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            2. 인터벌 걷기 (주 3~4회)
                                        </h3>
                                        <p className="text-gray-700">
                                            단순히 걷기만 해서는 운동 효과가 적습니다.
                                            '3분 빠르게 걷기 + 3분 천천히 걷기'를 반복해보세요.
                                            심폐 지구력을 높이고 체지방 연소에 탁월합니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-blue-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Activity className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            3. 스트레칭과 요가 (매일)
                                        </h3>
                                        <p className="text-gray-700">
                                            나이가 들수록 관절과 근육이 뻣뻣해집니다.
                                            아침 기상 직후와 잠들기 전 스트레칭은 부상을 예방하고 혈액 순환을 돕습니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            운동 시 주의사항
                        </h2>

                        <Card className="mb-6 border-l-4 border-amber-500 bg-amber-50">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Zap className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            관절 보호가 최우선
                                        </h3>
                                        <p className="text-gray-700">
                                            무리한 점프 동작이나 잘못된 자세의 스쿼트는 무릎 관절을 망가뜨릴 수 있습니다.
                                            통증이 느껴지면 즉시 중단하고, 올바른 자세를 먼저 익히세요.
                                            쿠션이 좋은 운동화를 신는 것도 중요합니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-purple-900 mb-3">
                            🏃‍♀️ 4주 완성 기초 루틴
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>1주차:</strong> 매일 30분 걷기 + 스트레칭</li>
                            <li>• <strong>2주차:</strong> 걷기 30분 + 스쿼트 10회 3세트 (주 2회)</li>
                            <li>• <strong>3주차:</strong> 인터벌 걷기 30분 + 스쿼트/플랭크 (주 3회)</li>
                            <li>• <strong>4주차:</strong> 운동 강도 조금씩 높이기</li>
                        </ul>
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        내 신체 나이는 몇 살일까요?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        간단한 테스트로 현재 신체 나이를 측정하고
                        <br />
                        나에게 맞는 운동 강도를 확인해보세요.
                    </p>
                    <Link href="/tools/body-age">
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            신체 나이 측정하기 →
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
                                        40대 건강 관리의 핵심 포인트
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/guide/50s-health" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-purple-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                                        50대 여성 건강 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        갱년기와 그 이후의 삶 준비하기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/body-age" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-purple-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                                        체형 나이 측정기
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        내 몸의 실제 나이 알아보기
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
