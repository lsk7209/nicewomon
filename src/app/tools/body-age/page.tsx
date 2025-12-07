import { Metadata } from "next";
import Link from "next/link";
import { Activity, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "체형 나이 측정기 - BMI·복부둘레 기반 신체 나이 계산",
    description: "실제 나이보다 몸이 더 늙었나요? BMI와 복부둘레로 체형 나이를 측정하고 건강 관리 방법을 받아보세요. 무료 3분 테스트.",
    keywords: ["체형 나이", "BMI", "복부둘레", "WHtR", "비만", "건강 나이", "신체 나이", "다이어트"],
    alternates: { canonical: "https://nicewomen.kr/tools/body-age" },
};

export default function BodyAgeIntro() {
    return (
        <div className="bg-gradient-to-b from-green-50 via-white to-green-50">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-xl">⚖️</span>
                        <span>신체 건강 체크</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-green-600">체형 나이</span>
                        <br />
                        지금 확인하세요
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "실제 나이보다 몸이 더 늙은 것 같아요"
                        <br />
                        <strong className="text-gray-800">복부둘레가 건강의 바로미터예요</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link href="/tools/body-age/test">
                            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                무료로 3분 테스트 시작하기 →
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 pt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-600" />
                            <span>6,000+ 분이 테스트했어요</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>WHO 기준 적용</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        체형 나이가 왜 중요할까요?
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            체형 나이는 <strong className="text-green-600">BMI(체질량지수)와 WHtR(허리둘레-키 비율)</strong>을 기반으로
                            신체의 건강 나이를 추정하는 지표예요.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            특히 <strong className="text-green-600">복부 비만</strong>은 당뇨, 고혈압, 심혈관 질환의 주요 위험 요인이에요.
                            실제 나이보다 체형 나이가 높다면 생활 습관 개선이 필요해요.
                        </p>

                        <div className="bg-green-50 p-6 rounded-xl mt-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-green-600" />
                                이런 분들에게 추천해요
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>최근 체중이 늘었어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>복부 비만이 걱정돼요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>건강 검진 전에 체크하고 싶어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>다이어트 목표를 세우고 싶어요</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        키, 체중, 복부둘레만 입력하면 체형 나이를 확인할 수 있어요
                    </p>
                    <Link href="/tools/body-age/test">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            체형 나이 측정하기 →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
