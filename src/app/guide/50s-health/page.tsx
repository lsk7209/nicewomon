import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, Brain, Shield, Bone, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "50대 여성 건강 가이드 - 폐경기 건강 관리의 모든 것 | 나이스우먼",
    description: "50대 여성의 폐경기 관리와 건강 유지 방법을 알아보세요. 골다공증 예방, 심혈관 건강, 인지 기능 유지까지.",
    keywords: ["50대 여성", "폐경기", "갱년기", "골다공증", "심혈관 건강", "인지 기능", "건강 관리"],
    alternates: { canonical: "https://nicewomen.kr/guide/50s-health" },
};

export default function FiftiesHealthPage() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Shield className="w-5 h-5" />
                        <span>연령별 건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        50대 여성 건강 가이드
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        폐경기를 건강하게 보내고
                        <br />
                        <strong className="text-gray-800">활기찬 제2의 인생</strong>을 준비하는 방법
                    </p>
                </header>

                <div className="prose prose-lg max-w-none space-y-12">
                    {/* 폐경기 이해 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌸</span>
                            폐경기 이해하기
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-purple-600">폐경(Menopause)</strong>은 12개월 이상 생리가 없는 상태를 말합니다.
                                한국 여성의 평균 폐경 연령은 49.7세이며, 대부분 45~55세 사이에 폐경을 경험합니다.
                            </p>

                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-4 text-xl">폐경 후 신체 변화</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-bold text-purple-800 mb-2">호르몬 변화</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 에스트로겐 급격히 감소</li>
                                            <li>• 프로게스테론 거의 없음</li>
                                            <li>• FSH, LH 증가</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-purple-800 mb-2">주요 증상</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 안면 홍조 지속</li>
                                            <li>• 질 건조, 요실금</li>
                                            <li>• 골밀도 급격히 감소</li>
                                            <li>• 심혈관 질환 위험 증가</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 주요 건강 이슈 */}
                    <section className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">⚕️</span>
                            50대 주요 건강 이슈
                        </h2>

                        <div className="space-y-6">
                            <Card className="border-l-4 border-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Bone className="w-6 h-6 text-purple-600" />
                                        골다공증
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-700">
                                        폐경 후 5~10년 동안 골밀도가 가장 빠르게 감소합니다.
                                        골다공증은 골절 위험을 크게 높이므로 적극적인 예방이 필요합니다.
                                    </p>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">예방 및 관리</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>칼슘:</strong> 하루 1,200mg 섭취</li>
                                            <li>• <strong>비타민 D:</strong> 하루 800~1,000IU</li>
                                            <li>• <strong>근력 운동:</strong> 주 3회 이상</li>
                                            <li>• <strong>골밀도 검사:</strong> 2년마다 정기 검사</li>
                                            <li>• <strong>낙상 예방:</strong> 집안 환경 정리, 균형 운동</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-red-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Heart className="w-6 h-6 text-red-600" />
                                        심혈관 질환
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-700">
                                        에스트로겐 감소로 심혈관 질환 위험이 급증합니다.
                                        50대 여성의 사망 원인 1위가 심혈관 질환입니다.
                                    </p>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">예방 전략</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>혈압 관리:</strong> 목표 120/80 이하</li>
                                            <li>• <strong>콜레스테롤:</strong> LDL 100 이하 유지</li>
                                            <li>• <strong>혈당 관리:</strong> 당뇨병 예방</li>
                                            <li>• <strong>유산소 운동:</strong> 주 150분 이상</li>
                                            <li>• <strong>금연, 절주:</strong> 필수</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Brain className="w-6 h-6 text-blue-600" />
                                        인지 기능 저하
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-700">
                                        에스트로겐은 뇌 건강에도 중요한 역할을 합니다.
                                        폐경 후 기억력 저하, 집중력 감소가 나타날 수 있습니다.
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">뇌 건강 유지</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>인지 활동:</strong> 독서, 퍼즐, 새로운 학습</li>
                                            <li>• <strong>사회 활동:</strong> 친구 만남, 동호회 활동</li>
                                            <li>• <strong>운동:</strong> 유산소 운동이 뇌 건강에 효과적</li>
                                            <li>• <strong>수면:</strong> 하루 7~8시간 충분한 수면</li>
                                            <li>• <strong>영양:</strong> 오메가-3, 항산화제 섭취</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Activity className="w-6 h-6 text-green-600" />
                                        근감소증 (Sarcopenia)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-700">
                                        50대부터 근육량이 급격히 감소합니다.
                                        근육 감소는 낙상, 골절, 대사 질환 위험을 높입니다.
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">근육량 유지</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>근력 운동:</strong> 주 3회 이상 필수</li>
                                            <li>• <strong>단백질:</strong> 체중 1kg당 1.2~1.5g</li>
                                            <li>• <strong>비타민 D:</strong> 근육 기능 유지</li>
                                            <li>• <strong>균형 운동:</strong> 요가, 태극권</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 건강 관리 루틴 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">💪</span>
                            50대 건강 관리 루틴
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">운동 루틴</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <p className="font-bold text-purple-800 mb-2">유산소 (주 5회)</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 빠르게 걷기 30분</li>
                                            <li>• 수영, 자전거</li>
                                            <li>• 댄스, 에어로빅</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-blue-800 mb-2">근력 (주 3회)</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 스쿼트, 런지</li>
                                            <li>• 팔굽혀펴기</li>
                                            <li>• 덤벨 운동</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-green-800 mb-2">유연성 (매일)</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 요가, 필라테스</li>
                                            <li>• 스트레칭</li>
                                            <li>• 균형 운동</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">식단 가이드</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>단백질:</strong> 매 끼니 손바닥 크기 (고기, 생선, 콩)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>칼슘:</strong> 우유, 요구르트, 치즈, 멸치</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>채소·과일:</strong> 하루 5가지 색깔</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>통곡물:</strong> 현미, 귀리, 통밀</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>건강한 지방:</strong> 견과류, 올리브유, 아보카도</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 정기 검진 */}
                    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🏥</span>
                            50대 필수 정기 검진
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <p className="font-bold text-purple-800 mb-3">매년</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• 종합 건강 검진 (혈압, 혈당, 콜레스테롤)</li>
                                    <li>• 부인과 검진</li>
                                    <li>• 유방 촬영술 (Mammography)</li>
                                    <li>• 골밀도 검사 (2년마다)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <p className="font-bold text-purple-800 mb-3">5~10년마다</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• 대장내시경</li>
                                    <li>• 위내시경</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <p className="font-bold text-purple-800 mb-3">필요시</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• 심장 검사 (심전도, 심장 초음파)</li>
                                    <li>• 뇌 MRI (가족력 있을 시)</li>
                                    <li>• 인지 기능 검사</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Warning */}
                    <section className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-900">즉시 병원을 방문해야 하는 증상</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• 가슴 통증, 호흡 곤란</li>
                                    <li>• 갑작스러운 심한 두통</li>
                                    <li>• 한쪽 팔다리 마비 또는 감각 이상</li>
                                    <li>• 폐경 후 질 출혈</li>
                                    <li>• 설명할 수 없는 급격한 체중 감소</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 건강 상태 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            3분 자가진단으로 현재 건강 상태를 확인하고
                            <br />
                            맞춤 관리 방법을 받아보세요
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/tools/hormone">
                                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    호르몬 밸런스 체크
                                </Button>
                            </Link>
                            <Link href="/tools/body-age">
                                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    체형 나이 측정
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 건강 관련 증상이 심하거나 지속되는 경우
                        반드시 전문의 상담을 받으시기 바랍니다.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Source: Adapted from WHO, NIH, 대한폐경학회 자료 기반. Health Lab Research Team 재구성.
                    </p>
                </div>
            </article>
        </div>
    );
}
