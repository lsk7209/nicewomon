import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "호르몬 기초 지식 - 여성 호르몬의 모든 것 | 나이스우먼",
    description: "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화를 이해하고, 호르몬 밸런스를 유지하는 방법을 알아보세요.",
    keywords: ["여성 호르몬", "에스트로겐", "프로게스테론", "호르몬 변화", "갱년기", "폐경기", "호르몬 밸런스"],
    alternates: { canonical: "https://nicewomen.kr/guide/hormone-basics" },
};

export default function HormoneBasicsPage() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        여성 호르몬의 모든 것
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        에스트로겐, 프로게스테론의 역할과 연령별 변화를 이해하고
                        <br />
                        <strong className="text-gray-800">호르몬 밸런스를 유지하는 방법</strong>을 알아보세요
                    </p>
                </header>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none space-y-12">
                    {/* Section 1: 주요 여성 호르몬 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌸</span>
                            주요 여성 호르몬
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-rose-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    에스트로겐 (Estrogen)
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    에스트로겐은 여성의 생식 기능과 전반적인 건강에 가장 중요한 호르몬입니다.
                                    난소에서 주로 생성되며, 사춘기부터 폐경기까지 여성의 몸에서 핵심적인 역할을 합니다.
                                </p>

                                <div className="bg-rose-50 rounded-xl p-6 space-y-3">
                                    <h4 className="font-bold text-gray-900 mb-3">주요 역할</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-600 mt-1">•</span>
                                            <span><strong>생식 기능:</strong> 자궁 내막 성장, 배란 조절, 임신 준비</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-600 mt-1">•</span>
                                            <span><strong>뼈 건강:</strong> 골밀도 유지, 골다공증 예방</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-600 mt-1">•</span>
                                            <span><strong>심혈관 건강:</strong> 혈관 탄력성 유지, 콜레스테롤 조절</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-600 mt-1">•</span>
                                            <span><strong>피부 건강:</strong> 콜라겐 생성, 피부 탄력 유지</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-600 mt-1">•</span>
                                            <span><strong>기분 조절:</strong> 세로토닌 생성 촉진, 정서 안정</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    프로게스테론 (Progesterone)
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    프로게스테론은 배란 후 황체에서 분비되는 호르몬으로,
                                    임신 유지와 생리 주기 조절에 핵심적인 역할을 합니다.
                                </p>

                                <div className="bg-purple-50 rounded-xl p-6 space-y-3">
                                    <h4 className="font-bold text-gray-900 mb-3">주요 역할</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>임신 유지:</strong> 자궁 내막 안정화, 착상 지원</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>생리 주기:</strong> 에스트로겐과 균형을 이루어 정상 주기 유지</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>수면 개선:</strong> 진정 효과, 수면 질 향상</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>체온 조절:</strong> 기초 체온 상승</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: 연령별 호르몬 변화 */}
                    <section className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">📊</span>
                            연령별 호르몬 변화
                        </h2>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                        20~30대: 호르몬 전성기
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>특징:</strong> 에스트로겐과 프로게스테론이 가장 활발하게 분비되는 시기
                                    </p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• 규칙적인 생리 주기</li>
                                        <li>• 높은 생식 능력</li>
                                        <li>• 피부 탄력과 윤기</li>
                                        <li>• 안정적인 기분과 에너지</li>
                                    </ul>
                                    <div className="bg-green-50 p-4 rounded-lg mt-4">
                                        <p className="text-sm">
                                            <strong>관리 포인트:</strong> 규칙적인 생활 습관, 균형 잡힌 식단, 적절한 운동으로 호르몬 밸런스 유지
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <AlertCircle className="w-6 h-6 text-orange-600" />
                                        40대 초반: 갱년기 전기 (Perimenopause)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>특징:</strong> 호르몬 분비가 불규칙해지기 시작하는 시기
                                    </p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• 생리 주기 불규칙</li>
                                        <li>• 안면 홍조, 야간 발한</li>
                                        <li>• 감정 기복 증가</li>
                                        <li>• 수면 장애</li>
                                        <li>• 체중 증가 경향</li>
                                    </ul>
                                    <div className="bg-orange-50 p-4 rounded-lg mt-4">
                                        <p className="text-sm">
                                            <strong>관리 포인트:</strong> 정기 검진, 스트레스 관리, 칼슘·비타민 D 보충, 근력 운동
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingDown className="w-6 h-6 text-red-600" />
                                        50대 이후: 폐경기 (Menopause)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>특징:</strong> 12개월 이상 생리가 없는 상태, 에스트로겐 급격히 감소
                                    </p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• 생리 완전 중단</li>
                                        <li>• 골밀도 감소 (골다공증 위험)</li>
                                        <li>• 심혈관 질환 위험 증가</li>
                                        <li>• 질 건조, 요실금</li>
                                        <li>• 인지 기능 변화</li>
                                    </ul>
                                    <div className="bg-red-50 p-4 rounded-lg mt-4">
                                        <p className="text-sm">
                                            <strong>관리 포인트:</strong> 호르몬 대체 요법 고려, 골다공증 예방, 심혈관 건강 관리, 정기 검진
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 3: 호르몬 밸런스 유지 방법 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">⚖️</span>
                            호르몬 밸런스 유지 방법
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🥗</span>
                                    식단 관리
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• 콩류 (이소플라본 함유)</li>
                                    <li>• 오메가-3 지방산 (연어, 견과류)</li>
                                    <li>• 십자화과 채소 (브로콜리, 양배추)</li>
                                    <li>• 통곡물, 섬유질</li>
                                    <li>• 비타민 B군, 마그네슘</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🏃‍♀️</span>
                                    규칙적인 운동
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• 유산소 운동 (주 150분)</li>
                                    <li>• 근력 운동 (주 2~3회)</li>
                                    <li>• 요가, 필라테스</li>
                                    <li>• 스트레칭</li>
                                    <li>• 야외 활동 (비타민 D)</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">😴</span>
                                    충분한 수면
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• 하루 7~8시간 수면</li>
                                    <li>• 규칙적인 수면 시간</li>
                                    <li>• 어두운 환경 조성</li>
                                    <li>• 취침 전 블루라이트 차단</li>
                                    <li>• 카페인 섭취 제한</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🧘‍♀️</span>
                                    스트레스 관리
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• 명상, 마음챙김</li>
                                    <li>• 호흡 운동</li>
                                    <li>• 취미 활동</li>
                                    <li>• 사회적 관계 유지</li>
                                    <li>• 전문가 상담</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 호르몬 밸런스 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            3분 자가진단으로 현재 호르몬 상태를 확인하고
                            <br />
                            맞춤 관리 방법을 받아보세요
                        </p>
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                호르몬 밸런스 테스트 시작하기 →
                            </Button>
                        </Link>
                    </section>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 호르몬 관련 증상이 심하거나 지속되는 경우
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
