import { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "호르몬 밸런스 파인더 - 여성 호르몬 균형 자가진단 테스트",
    description: "30~55세 여성의 호르몬 변화를 과학적으로 분석하는 무료 자가진단 도구. 8가지 증상으로 호르몬 밸런스 상태를 확인하고 맞춤형 솔루션을 받아보세요. WHO/NIH 데이터 기반.",
    keywords: ["호르몬 밸런스", "여성 호르몬", "갱년기", "호르몬 검사", "자가진단", "30대 여성", "40대 여성", "50대 여성", "호르몬 불균형", "에스트로겐"],
    openGraph: {
        title: "호르몬 밸런스 파인더 - 3분 만에 확인하는 호르몬 상태",
        description: "\"요즘 감정 기복이 심해졌어요\" 이런 고민 있으신가요? 과학적 데이터 기반으로 호르몬 밸런스를 확인하세요.",
        type: "website",
    },
    alternates: { canonical: "https://nicewomen.kr/tools/hormone" },
};

export default function HormoneBalanceIntro() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-xl">🌸</span>
                        <span>가장 인기 있는 테스트</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-rose-600">호르몬 밸런스</span>
                        <br />
                        지금 확인하세요
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "요즘 감정 기복이 심해졌어요" "밤에 잠이 안 와요" "이유 없이 짜증나요"
                        <br />
                        <strong className="text-gray-800">이런 증상, 호르몬 때문일 수 있어요</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link href="/tools/hormone/test">
                            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                <span className="flex items-center gap-2">
                                    무료로 3분 테스트 시작하기
                                    <span>→</span>
                                </span>
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 pt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-rose-600" />
                            <span>이미 <strong className="text-gray-900">10,000+</strong> 분이 테스트했어요</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-rose-600" />
                            <span>WHO/NIH 데이터 기반</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-rose-600" />
                            <span>평균 만족도 4.8/5.0</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Hormone Balance */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        호르몬 밸런스가 뭔가요?
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            호르몬 밸런스는 우리 몸의 <strong className="text-rose-600">에스트로겐, 프로게스테론, 테스토스테론</strong> 등
                            여러 호르몬이 적절한 비율로 유지되는 상태를 말해요.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            특히 <strong className="text-rose-600">30대 후반부터 50대</strong>까지 여성은 호르몬 변화가 가장 활발한 시기예요.
                            이 시기에 호르몬 불균형이 생기면 다양한 신체적·정서적 증상이 나타날 수 있어요.
                        </p>

                        <div className="bg-rose-50 p-6 rounded-xl mt-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-rose-600" />
                                이런 증상이 있다면 호르몬 불균형일 수 있어요
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>생리 주기가 불규칙해졌어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>감정 기복이 심해졌어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>밤에 잠을 설치거나 자주 깨요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>얼굴이 갑자기 화끈거려요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>이유 없이 피곤하고 무기력해요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-600 mt-1">•</span>
                                    <span>체중이 갑자기 늘었어요</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Test */}
            <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-rose-50 to-purple-50 rounded-3xl my-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        왜 이 테스트를 해야 할까요?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">과학적 근거</h3>
                            <p className="text-gray-600 text-center">
                                WHO, NIH 등 신뢰할 수 있는 기관의 연구 데이터를 바탕으로 만들어졌어요
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">⏱️</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">단 3분</h3>
                            <p className="text-gray-600 text-center">
                                8가지 간단한 질문으로 빠르게 확인할 수 있어요. 병원 가기 전에 먼저 체크해보세요
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">💝</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">맞춤 솔루션</h3>
                            <p className="text-gray-600 text-center">
                                4가지 페르소나로 분류하여 나에게 딱 맞는 관리법을 알려드려요
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        어떻게 진행되나요?
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">8가지 질문에 답하기</h3>
                                <p className="text-gray-600">
                                    생리 주기, 수면, 감정 상태 등 호르몬과 관련된 증상에 대한 질문이에요.
                                    솔직하게 답변할수록 정확한 결과를 받을 수 있어요.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">즉시 결과 확인</h3>
                                <p className="text-gray-600">
                                    답변을 마치면 바로 결과를 확인할 수 있어요.
                                    슈퍼 밸런서, 센서티브 캐치, 딥 리커버러, 레이트 블루머 중 하나로 분류돼요.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">맞춤 가이드 받기</h3>
                                <p className="text-gray-600">
                                    나의 페르소나에 맞는 생활 습관 개선 방법, 필요한 영양소, 전문의 상담 필요 여부 등을 안내받아요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        3분이면 충분해요. 무료이고, 회원가입도 필요 없어요.
                    </p>
                    <Link href="/tools/hormone/test">
                        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            호르몬 밸런스 테스트 시작하기 →
                        </Button>
                    </Link>
                    <p className="text-sm mt-6 opacity-75">
                        ✓ 100% 무료 ✓ 회원가입 불필요 ✓ 3분 소요
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        자주 묻는 질문
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">
                                Q. 이 테스트는 의학적 진단인가요?
                            </h3>
                            <p className="text-gray-600">
                                A. 아니요. 이 테스트는 자가진단 도구로, 의학적 진단이나 치료를 대신할 수 없어요.
                                증상이 심하거나 지속되면 반드시 전문의 상담을 받으세요.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">
                                Q. 결과가 정확한가요?
                            </h3>
                            <p className="text-gray-600">
                                A. WHO, NIH 등의 연구 데이터를 바탕으로 만들어졌지만, 개인의 주관적 응답에 따라 결과가 달라질 수 있어요.
                                참고 자료로 활용하시고, 정확한 진단은 병원에서 받으세요.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">
                                Q. 비용이 드나요?
                            </h3>
                            <p className="text-gray-600">
                                A. 완전 무료예요. 회원가입도 필요 없고, 결과도 바로 확인할 수 있어요.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg text-gray-900 mb-3">
                                Q. 내 정보는 안전한가요?
                            </h3>
                            <p className="text-gray-600">
                                A. 모든 데이터는 회원님의 기기에만 저장되고, 서버로 전송되지 않아요. 100% 안전해요.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
