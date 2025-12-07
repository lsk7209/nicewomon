import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Heart, Flame, Moon, Brain, AlertCircle, NotebookPen, Info, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "40대 여성 건강 가이드 - 갱년기 전기 완벽 대비 | 나이스우먼",
    description: "40대 여성의 호르몬 변화와 갱년기 전기 증상, 관리 방법을 알아보세요. 안면 홍조, 수면 장애, 감정 기복 대처법까지.",
    keywords: ["40대 여성", "갱년기 전기", "호르몬 변화", "안면 홍조", "수면 장애", "감정 기복", "건강 관리"],
    alternates: { canonical: "https://nicewomen.kr/guide/40s-health" },
};

export default function FortiesHealthPage() {
    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Flame className="w-5 h-5" />
                        <span>연령별 건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        40대 여성 건강 가이드
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        갱년기 전기를 현명하게 준비하고
                        <br />
                        <strong className="text-gray-800">건강하고 활기찬 40대</strong>를 만드는 방법
                    </p>
                </header>

                <section className="bg-white border border-orange-100 rounded-2xl p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                    <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                        <Card className="border border-orange-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-orange-700 uppercase">호르몬 전환</p>
                                <p>갱년기 전기 시작: 주기 불규칙·홍조·수면 장애 → 카페인/알코올 컷, 수면 위생 강화</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-orange-700 uppercase">기초 관리</p>
                                <p>근력 2~3회+단백질 1.2g/kg, 체지방·혈압·지질 모니터, 비타민 D/칼슘 보강</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-orange-700 uppercase">검진/상담</p>
                                <p>주기 변화·출혈 시 진료, 골밀도/지질/갑상선 검사, HRT 여부는 증상·위험도 기반 상담</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none space-y-12">
                    {/* Section 1: 40대 호르몬 변화 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌡️</span>
                            40대 호르몬 변화의 시작
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                40대는 <strong className="text-orange-600">갱년기 전기(Perimenopause)</strong>가 시작되는 시기입니다.
                                폐경 전 5~10년 동안 호르몬이 불규칙하게 변화하면서 다양한 증상이 나타납니다.
                            </p>

                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-4 text-xl">주요 호르몬 변화</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <TrendingDown className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">에스트로겐 감소</p>
                                            <p className="text-sm text-gray-700">
                                                40대 초반부터 서서히 감소하기 시작하며,
                                                40대 후반에는 급격히 떨어집니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <TrendingDown className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">프로게스테론 감소</p>
                                            <p className="text-sm text-gray-700">
                                                배란 빈도가 줄어들면서 프로게스테론 분비도 불규칙해집니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">호르몬 불균형</p>
                                            <p className="text-sm text-gray-700">
                                                에스트로겐과 프로게스테론의 균형이 깨지면서
                                                다양한 신체적·정서적 증상이 나타납니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: 갱년기 전기 주요 증상 */}
                    <section className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">📋</span>
                            갱년기 전기 주요 증상
                        </h2>

                        <div className="space-y-6">
                            <Card className="border-l-4 border-rose-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Flame className="w-6 h-6 text-rose-600" />
                                        혈관운동 증상
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">안면 홍조 (Hot Flashes)</p>
                                        <p className="text-sm text-gray-700 mb-3">
                                            갑자기 얼굴과 상체가 뜨거워지면서 땀이 나는 증상.
                                            하루 수십 번 발생할 수 있으며, 수면 중에도 나타납니다.
                                        </p>
                                        <div className="bg-rose-50 p-4 rounded-lg">
                                            <p className="font-bold text-sm mb-2">대처 방법</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 시원한 환경 유지 (실내 온도 낮게)</li>
                                                <li>• 통풍이 잘 되는 옷 착용</li>
                                                <li>• 매운 음식, 카페인, 알코올 피하기</li>
                                                <li>• 심호흡, 명상으로 스트레스 관리</li>
                                                <li>• 필요시 호르몬 대체 요법 고려</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">야간 발한</p>
                                        <p className="text-sm text-gray-700">
                                            수면 중 심한 땀으로 잠에서 깨는 증상. 수면의 질을 크게 떨어뜨립니다.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Moon className="w-6 h-6 text-blue-600" />
                                        수면 장애
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-gray-700">
                                        호르몬 변화와 야간 발한으로 인해 잠들기 어렵거나 자주 깨는 증상이 나타납니다.
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">개선 방법</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 규칙적인 수면 시간 유지</li>
                                            <li>• 침실 온도 낮게 유지 (18~20도)</li>
                                            <li>• 취침 전 따뜻한 물로 샤워</li>
                                            <li>• 마그네슘 보충제 고려</li>
                                            <li>• 수면 위생 철저히 지키기</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Brain className="w-6 h-6 text-purple-600" />
                                        정서적 변화
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-bold text-gray-900">감정 기복</p>
                                            <p className="text-sm text-gray-700">
                                                사소한 일에도 쉽게 짜증이 나거나 눈물이 나는 등 감정 조절이 어려워집니다.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">우울감·불안</p>
                                            <p className="text-sm text-gray-700">
                                                호르몬 변화로 인해 우울감이나 불안감이 증가할 수 있습니다.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">집중력 저하</p>
                                            <p className="text-sm text-gray-700">
                                                기억력이 떨어지고 집중하기 어려워지는 '브레인 포그' 현상이 나타납니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">관리 방법</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 규칙적인 운동 (세로토닌 증가)</li>
                                            <li>• 명상, 요가 등 마음챙김 활동</li>
                                            <li>• 사회적 관계 유지</li>
                                            <li>• 오메가-3, 비타민 B군 섭취</li>
                                            <li>• 필요시 전문가 상담</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Heart className="w-6 h-6 text-green-600" />
                                        생리 주기 변화
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>생리 주기가 불규칙해짐 (짧아지거나 길어짐)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>생리량 변화 (과다 또는 과소)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>생리 기간 변화</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">•</span>
                                            <span>생리 건너뛰기</span>
                                        </li>
                                    </ul>
                                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                        <p className="text-sm text-amber-800">
                                            <strong>⚠️ 주의:</strong> 생리량이 갑자기 매우 많아지거나,
                                            생리 기간이 2주 이상 지속되면 반드시 산부인과 진료를 받으세요.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 3: 40대 건강 관리 전략 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">💪</span>
                            40대 건강 관리 전략
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-orange-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    호르몬 대체 요법 (HRT)
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        갱년기 증상이 심한 경우 호르몬 대체 요법을 고려할 수 있습니다.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <p className="font-bold text-green-800 mb-2">장점</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 안면 홍조 완화</li>
                                                <li>• 수면 질 개선</li>
                                                <li>• 골다공증 예방</li>
                                                <li>• 질 건조 개선</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <p className="font-bold text-red-800 mb-2">주의사항</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 유방암 가족력 확인</li>
                                                <li>• 정기적인 검진 필수</li>
                                                <li>• 전문의와 충분한 상담</li>
                                                <li>• 개인별 맞춤 처방</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    골다공증 예방
                                </h3>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        에스트로겐 감소로 골밀도가 빠르게 감소하기 시작합니다.
                                        40대부터 적극적인 예방이 필요합니다.
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>칼슘:</strong> 하루 1,200mg (우유, 요구르트, 치즈)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>비타민 D:</strong> 하루 800~1,000IU (햇빛, 연어, 계란)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>근력 운동:</strong> 주 2~3회 (뼈에 자극 전달)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>체중 부하 운동:</strong> 걷기, 조깅, 계단 오르기</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    심혈관 건강 관리
                                </h3>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        에스트로겐은 혈관을 보호하는 역할을 합니다.
                                        호르몬 감소로 심혈관 질환 위험이 증가하므로 예방이 중요합니다.
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>혈압 관리:</strong> 정기적인 측정, 목표 120/80 이하</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>콜레스테롤:</strong> 연 1회 검사, LDL 100 이하 유지</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>유산소 운동:</strong> 주 150분 (빠르게 걷기, 수영)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>식단:</strong> 지중해식 식단, 포화지방 줄이기</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-rose-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    체중 관리
                                </h3>
                                <div className="bg-rose-50 p-6 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        호르몬 변화로 복부 지방이 증가하기 쉽습니다.
                                        건강한 체중 유지가 매우 중요합니다.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-bold mb-2">운동</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 근력 운동 (근육량 유지)</li>
                                                <li>• 유산소 운동 (지방 연소)</li>
                                                <li>• HIIT (신진대사 촉진)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">식단</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 단백질 섭취 증가</li>
                                                <li>• 정제 탄수화물 줄이기</li>
                                                <li>• 간헐적 단식 고려</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: 정기 검진 */}
                    <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🏥</span>
                            40대 필수 정기 검진
                        </h2>

                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>매년 받아야 할 검진</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 종합 건강 검진 (혈압, 혈당, 콜레스테롤)</li>
                                        <li>• 부인과 검진 (자궁경부암 검사)</li>
                                        <li>• 유방 초음파 또는 유방 촬영술</li>
                                        <li>• 갑상선 기능 검사</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>2~3년마다 받을 검진</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 골밀도 검사 (45세 이상 또는 위험 요인 있을 시)</li>
                                        <li>• 대장내시경 (50세부터 또는 가족력 있을 시 조기)</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>필요시 받을 검진</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 호르몬 검사 (갱년기 증상 심할 시)</li>
                                        <li>• 심장 검사 (가족력 또는 위험 요인 있을 시)</li>
                                        <li>• 정신건강 검진 (우울, 불안 증상 지속 시)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="bg-white border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-orange-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>생리 주기/출혈 패턴이 3개월 이상 크게 변했다</li>
                            <li>홍조·수면 장애·기분 기복이 일상에 지장을 준다</li>
                            <li>골밀도/지질/갑상선/비타민 D 검사를 1년 이상 하지 않았다</li>
                        </ul>
                        <p className="text-sm text-orange-700">2점 이상이면 수면/카페인 컷오프, 근력+단백질 루틴을 적용하고 산부인과·내과 검진 및 HRT 상담 가능 여부를 확인하세요.</p>
                    </section>

                    <section className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-orange-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 주기 불규칙이 시작됐는데 바로 HRT를 해야 하나요?</p>
                                <p>증상(홍조·수면 장애·기분 변화) 강도와 생활 영향도를 먼저 평가하고, 검사 후 의료진과 위험/이득을 논의해 결정합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 골밀도 검사는 언제부터 필요한가요?</p>
                                <p>45세 전후 또는 가족력·체중 감소·스테로이드 복용 등 위험 요인이 있으면 조기 검사를 권장합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 체지방이 늘고 수면이 깨질 때 우선순위는?</p>
                                <p>저녁 카페인·알코올 컷오프, 수면 7~8시간, 근력 2~3회+유산소 150분, 단백질 1.2g/kg, 포화지방·정제탄수 줄이기를 우선 적용하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 안면 홍조가 심한데 비약물 대안이 있을까요?</p>
                                <p>실내 온도 낮추기, 겹겹이 옷 입기, 매운 음식·카페인·알코올 줄이기, 심호흡/명상, 필요 시 비호르몬 약제(의료 상담) 등을 고려할 수 있습니다.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 호르몬 상태 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            갱년기 전기 증상을 체크하고
                            <br />
                            맞춤 관리 방법을 받아보세요
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/tools/hormone">
                                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    호르몬 밸런스 테스트
                                </Button>
                            </Link>
                            <Link href="/tools/sleep">
                                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    수면 질 테스트
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 갱년기 증상이 심하거나 지속되는 경우
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
