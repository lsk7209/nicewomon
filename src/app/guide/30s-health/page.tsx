import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Brain, Utensils, Moon, AlertTriangle, NotebookPen, Info, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "30대 여성 건강 가이드 - 건강한 30대를 위한 완벽 가이드 | 나이스우먼",
    description: "30대 여성의 주요 건강 변화와 예방법, 생활 습관 관리 방법을 알아보세요. 호르몬 밸런스, 임신 준비, 스트레스 관리까지.",
    keywords: ["30대 여성", "건강 관리", "임신 준비", "호르몬 밸런스", "스트레스 관리", "생활 습관", "예방"],
    alternates: { canonical: "https://nicewomen.kr/guide/30s-health" },
};

export default function ThirtiesHealthPage() {
    return (
        <div className="bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Activity className="w-5 h-5" />
                        <span>연령별 건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        30대 여성 건강 가이드
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        건강한 30대를 위한 필수 정보와
                        <br />
                        <strong className="text-gray-800">평생 건강의 기초를 다지는 방법</strong>을 알아보세요
                    </p>
                </header>

                <section className="bg-white border border-green-100 rounded-2xl p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                    <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                        <Card className="border border-green-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-green-700 uppercase">호르몬/주기</p>
                                <p>주기 대체로 안정적이나 후반부 미묘한 변화 시작 → 규칙 수면·카페인 컷오프 병행</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-green-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-green-700 uppercase">대사/근육</p>
                                <p>기초대사 서서히 감소, 근육량 유지가 체중 관리 핵심 → 근력 2~3회+단백질 1.2g/kg</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-green-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-green-700 uppercase">검진/영양</p>
                                <p>연 1회 부인과·기초검진, 철·엽산·칼슘/비타민D·오메가-3 식품 우선</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none space-y-12">
                    {/* Section 1: 30대 여성의 신체 변화 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌱</span>
                            30대 여성의 신체 변화
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                30대는 여전히 호르몬이 활발하게 분비되는 시기이지만,
                                20대와 비교하면 미묘한 변화가 시작됩니다.
                                이 시기에 건강 습관을 잘 관리하면 40대, 50대의 건강을 크게 좌우할 수 있습니다.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="border-l-4 border-green-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">호르몬 변화</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-gray-700 text-sm">
                                        <p>• 에스트로겐 분비는 여전히 활발</p>
                                        <p>• 30대 후반부터 서서히 감소 시작</p>
                                        <p>• 생리 주기는 대체로 규칙적</p>
                                        <p>• 임신 가능성은 높지만 35세 이후 점차 감소</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-blue-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">신진대사 변화</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-gray-700 text-sm">
                                        <p>• 기초대사량 점진적 감소</p>
                                        <p>• 근육량 감소 시작 (30대 중반~)</p>
                                        <p>• 체지방 증가 경향</p>
                                        <p>• 회복 속도 느려짐</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-purple-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">피부 변화</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-gray-700 text-sm">
                                        <p>• 콜라겐 생성 감소</p>
                                        <p>• 잔주름 시작</p>
                                        <p>• 피부 탄력 저하</p>
                                        <p>• 색소 침착 증가</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-orange-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">정서적 변화</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-gray-700 text-sm">
                                        <p>• 커리어와 가정의 균형 스트레스</p>
                                        <p>• 임신/출산 관련 고민</p>
                                        <p>• 수면 패턴 변화</p>
                                        <p>• 만성 피로 증가</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: 30대 주요 건강 이슈 */}
                    <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">⚠️</span>
                            30대 주요 건강 이슈
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Heart className="w-6 h-6 text-rose-600" />
                                    임신과 출산
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>35세 이후 임신 가능성 감소:</strong> 난자의 질과 양이 감소하기 시작합니다.
                                    </p>
                                    <div className="bg-rose-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">관리 방법</p>
                                        <ul className="space-y-1 text-sm ml-4">
                                            <li>• 임신 계획이 있다면 30대 초중반이 적기</li>
                                            <li>• 정기적인 산부인과 검진</li>
                                            <li>• 엽산, 철분 등 영양소 섭취</li>
                                            <li>• 스트레스 관리와 충분한 수면</li>
                                            <li>• 필요시 난임 검사 고려 (35세 이상)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-green-600" />
                                    체중 관리
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>기초대사량 감소:</strong> 같은 양을 먹어도 체중이 증가하기 쉬워집니다.
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">관리 방법</p>
                                        <ul className="space-y-1 text-sm ml-4">
                                            <li>• 근력 운동으로 근육량 유지 (주 2~3회)</li>
                                            <li>• 유산소 운동 병행 (주 150분)</li>
                                            <li>• 단백질 섭취 증가</li>
                                            <li>• 정제 탄수화물 줄이기</li>
                                            <li>• 식사 시간 규칙적으로 유지</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                    스트레스와 번아웃
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>다중 역할 부담:</strong> 커리어, 가정, 육아 등 여러 역할로 인한 스트레스가 증가합니다.
                                    </p>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">관리 방법</p>
                                        <ul className="space-y-1 text-sm ml-4">
                                            <li>• 우선순위 정하고 완벽주의 내려놓기</li>
                                            <li>• 나만의 시간 확보 (하루 30분이라도)</li>
                                            <li>• 명상, 요가 등 이완 기법</li>
                                            <li>• 사회적 지지망 활용</li>
                                            <li>• 필요시 전문가 상담</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Moon className="w-6 h-6 text-blue-600" />
                                    수면 부족
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>만성 수면 부족:</strong> 업무, 육아 등으로 충분한 수면을 취하기 어려워집니다.
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">관리 방법</p>
                                        <ul className="space-y-1 text-sm ml-4">
                                            <li>• 하루 7~8시간 수면 목표</li>
                                            <li>• 규칙적인 수면 시간 유지</li>
                                            <li>• 취침 1시간 전 스마트폰 사용 자제</li>
                                            <li>• 카페인 섭취는 오후 2시 이전</li>
                                            <li>• 낮잠은 20분 이내로 제한</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: 30대 건강 관리 루틴 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">📋</span>
                            30대 건강 관리 루틴
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-green-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    매일 실천하기
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🌅 아침</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 물 한 잔으로 하루 시작</li>
                                            <li>• 단백질 포함 아침 식사</li>
                                            <li>• 10분 스트레칭</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🌆 저녁</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 가벼운 저녁 식사 (취침 3시간 전)</li>
                                            <li>• 30분 산책 또는 운동</li>
                                            <li>• 취침 전 명상 또는 독서</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    주간 루틴
                                </h3>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>운동:</strong> 근력 운동 2~3회, 유산소 운동 3~4회</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>식단:</strong> 주 1회 식단 계획, 건강한 간식 준비</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>휴식:</strong> 주말 중 하루는 충분한 휴식</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600 mt-1">•</span>
                                            <span><strong>자기 관리:</strong> 취미 활동, 친구 만남 등</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    정기 검진
                                </h3>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>연 1회:</strong> 종합 건강 검진, 부인과 검진</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>2년마다:</strong> 유방 초음파 (30대 후반부터)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>필요시:</strong> 갑상선 검사, 호르몬 검사</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: 30대 필수 영양소 */}
                    <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Utensils className="w-8 h-8 text-orange-600" />
                            30대 필수 영양소
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">철분</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>필요성:</strong> 생리로 인한 철분 손실, 임신 준비</p>
                                    <p><strong>권장량:</strong> 하루 14~18mg</p>
                                    <p><strong>식품:</strong> 붉은 고기, 시금치, 콩류, 굴</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">엽산</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>필요성:</strong> 임신 준비, 세포 분열</p>
                                    <p><strong>권장량:</strong> 하루 400μg (임신 계획 시 600μg)</p>
                                    <p><strong>식품:</strong> 녹색 채소, 오렌지, 아보카도</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">칼슘 & 비타민 D</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>필요성:</strong> 골밀도 유지, 골다공증 예방</p>
                                    <p><strong>권장량:</strong> 칼슘 1000mg, 비타민 D 600IU</p>
                                    <p><strong>식품:</strong> 우유, 요구르트, 연어, 계란</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">오메가-3</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>필요성:</strong> 심혈관 건강, 염증 감소</p>
                                    <p><strong>권장량:</strong> 하루 250~500mg</p>
                                    <p><strong>식품:</strong> 연어, 고등어, 호두, 아마씨</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="bg-white border border-green-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-green-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>생리 주기/양이 최근 3개월간 뚜렷이 변했다</li>
                            <li>체중이 2~3kg 이상 늘었는데 식사·활동 변화가 적다</li>
                            <li>만성 피로/수면 부족이 2주 이상 지속된다</li>
                        </ul>
                        <p className="text-sm text-green-700">2점 이상이면 수면 7~8시간, 저녁 카페인 컷오프, 근력+단백질 루틴을 우선 적용하고 필요시 검진을 권장합니다.</p>
                    </section>

                    <section className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-green-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 30대 후반, 주기가 들쭉날쭉해요. 바로 병원 가야 하나요?</p>
                                <p>주기 변화가 3개월 이상 이어지거나 출혈/통증이 심해지면 산부인과 진료가 필요합니다. 갑상선/빈혈 검사를 함께 확인하면 좋습니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 임신 계획이 없을 때도 엽산이 필요할까요?</p>
                                <p>가임기 여성은 기본 400μg이 권장됩니다. 임신 계획 시 600μg로 상향하고, 철분·비타민 D도 함께 확인하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 체중 관리가 안 될 때 우선순위는?</p>
                                <p>수면 7~8시간, 단백질 1.2g/kg, 근력 2~3회, 저녁 정제탄수 줄이기부터 적용하세요. 변동이 없으면 스트레스·수면·호르몬 검진을 점검합니다.</p>
                            </div>
                        </div>
                    </section>

                    {/* Warning Section */}
                    <section className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-900">30대에 주의해야 할 신호</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• 생리 주기가 갑자기 불규칙해짐</li>
                                    <li>• 설명할 수 없는 체중 증가 또는 감소</li>
                                    <li>• 만성 피로가 2주 이상 지속</li>
                                    <li>• 극심한 감정 기복</li>
                                    <li>• 수면 장애가 계속됨</li>
                                </ul>
                                <p className="text-sm text-amber-800 font-medium mt-3">
                                    ⚠️ 위 증상이 지속되면 반드시 전문의 상담을 받으세요.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
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
                                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    호르몬 밸런스 체크
                                </Button>
                            </Link>
                            <Link href="/tools/stress">
                                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                    스트레스 테스트
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
                        Source: Adapted from WHO, NIH, 대한산부인과학회 자료 기반. Health Lab Research Team 재구성.
                    </p>
                </div>
            </article>
        </div>
    );
}
