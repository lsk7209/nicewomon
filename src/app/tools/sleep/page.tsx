import { Metadata } from "next";
import Link from "next/link";
import { Moon, CheckCircle, TrendingUp, Users, Brain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "수면 질 테스트 - 불면증 자가진단 및 수면 패턴 분석",
    description: "밤에 잠을 못 이루시나요? 과학적 데이터 기반 수면 질 자가진단으로 수면 패턴을 분석하고 개선 방법을 찾아보세요. 무료 3분 테스트.",
    keywords: ["수면 질", "불면증", "수면 장애", "수면 패턴", "자가진단", "수면 개선", "멜라토닌", "마그네슘"],
    alternates: { canonical: "https://nicewomen.kr/tools/sleep" },
};

export default function SleepQualityIntro() {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-xl">😴</span>
                        <span>수면 건강 체크</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-blue-600">수면 질</span>
                        <br />
                        지금 확인하세요
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "밤새 뒤척이다 아침이 왔어요" "자도 자도 피곤해요"
                        <br />
                        <strong className="text-gray-800">좋은 수면이 건강의 시작이에요</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link href="/tools/sleep/test">
                            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                무료로 3분 테스트 시작하기 →
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 pt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span>8,000+ 분이 테스트했어요</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                            <span>수면의학 연구 기반</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        좋은 수면이 왜 중요할까요?
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            수면은 단순한 휴식이 아니에요. <strong className="text-blue-600">뇌와 몸의 회복, 면역력 강화, 호르몬 조절</strong> 등
                            생명 유지에 필수적인 과정이 일어나는 시간이에요.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            특히 <strong className="text-blue-600">30~50대 여성</strong>은 호르몬 변화로 인해 수면 장애를 겪기 쉬워요.
                            수면 질이 떨어지면 피로, 집중력 저하, 감정 기복, 면역력 약화 등 다양한 문제가 생길 수 있어요.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl mt-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Moon className="w-5 h-5 text-blue-600" />
                                이런 증상이 있다면 수면 질을 체크해보세요
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>잠들기까지 30분 이상 걸려요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>밤에 자주 깨요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>아침에 일어나도 개운하지 않아요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>낮에 졸음이 쏟아져요</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        5가지 질문으로 수면 질을 확인하고 개선 방법을 받아보세요
                    </p>
                    <Link href="/tools/sleep/test">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 시작하기 →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
