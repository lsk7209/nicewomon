import { Metadata } from "next";
import Link from "next/link";
import { Brain, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "스트레스·번아웃 테스트 - 직장인 감정 소진 자가진단",
    description: "\"아무것도 하기 싫어요\" 번아웃 증상을 느끼시나요? 스트레스 수준을 측정하고 회복 가이드를 받아보세요. 무료 3분 테스트.",
    keywords: ["스트레스", "번아웃", "감정 소진", "우울", "자가진단", "멘탈 케어", "심리 테스트"],
    alternates: { canonical: "https://nicewomen.kr/tools/stress" },
};

export default function StressBurnoutIntro() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-xl">💆‍♀️</span>
                        <span>마음 건강 체크</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-purple-600">스트레스·번아웃</span>
                        <br />
                        지금 확인하세요
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "아무것도 하기 싫어요" "매일 지쳐요"
                        <br />
                        <strong className="text-gray-800">번아웃은 질병이 아니라 신호예요</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link href="/tools/stress/test">
                            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                무료로 3분 테스트 시작하기 →
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 pt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            <span>7,500+ 분이 테스트했어요</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600" />
                            <span>심리학 연구 기반</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        번아웃이 뭔가요?
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            번아웃(Burnout)은 <strong className="text-purple-600">만성적인 스트레스로 인한 신체적·정서적·정신적 소진 상태</strong>를 말해요.
                            WHO는 2019년 번아웃을 직업 관련 현상으로 공식 인정했어요.
                        </p>

                        <div className="bg-purple-50 p-6 rounded-xl mt-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-600" />
                                이런 증상이 있다면 번아웃일 수 있어요
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>아무것도 하기 싫어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>작은 일에도 짜증이 나요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>집중력이 떨어졌어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>성취감을 못 느껴요</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        5가지 질문으로 번아웃 수준을 확인하고 회복 방법을 받아보세요
                    </p>
                    <Link href="/tools/stress/test">
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            스트레스 테스트 시작하기 →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
