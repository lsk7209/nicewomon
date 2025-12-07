import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Pill, Heart, Bone, Brain, Sun } from "lucide-react";

export const metadata: Metadata = {
    title: "영양 가이드 - 여성 건강을 위한 필수 영양소 | 나이스우먼",
    description: "여성 건강에 필수적인 영양소와 올바른 섭취 방법을 알아보세요. 철분, 칼슘, 비타민, 오메가-3까지.",
    keywords: ["여성 영양", "건강 보조제", "비타민", "미네랄", "철분", "칼슘", "오메가-3", "영양소"],
    alternates: { canonical: "https://nicewomen.kr/guide/nutrition" },
};

export default function NutritionGuidePage() {
    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Apple className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        영양 가이드
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        여성 건강에 필수적인 영양소와
                        <br />
                        <strong className="text-gray-800">올바른 섭취 방법</strong>을 알아보세요
                    </p>
                </header>

                <div className="prose prose-lg max-w-none space-y-12">
                    {/* 여성에게 중요한 영양소 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🥗</span>
                            여성에게 특히 중요한 영양소
                        </h2>

                        <div className="space-y-8">
                            <Card className="border-l-4 border-rose-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Heart className="w-6 h-6 text-rose-600" />
                                        철분 (Iron)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">왜 중요한가요?</p>
                                        <p className="text-sm text-gray-700">
                                            여성은 생리로 인해 매달 철분을 손실합니다.
                                            철분 부족은 빈혈, 피로, 집중력 저하를 유발합니다.
                                        </p>
                                    </div>
                                    <div className="bg-rose-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">권장 섭취량</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 가임기 여성: 하루 14~18mg</li>
                                            <li>• 임신부: 하루 27mg</li>
                                            <li>• 폐경 후: 하루 8mg</li>
                                        </ul>
                                    </div>
                                    <div className="bg-rose-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">풍부한 식품</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>헴철:</strong> 붉은 고기, 간, 굴 (흡수율 높음)</li>
                                            <li>• <strong>비헴철:</strong> 시금치, 콩류, 두부 (비타민 C와 함께 섭취)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                        <p className="text-sm text-amber-800">
                                            <strong>💡 흡수 팁:</strong> 비타민 C가 풍부한 과일과 함께 먹으면 흡수율이 높아집니다.
                                            커피, 차는 철분 흡수를 방해하므로 식사 직후 피하세요.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Bone className="w-6 h-6 text-blue-600" />
                                        칼슘 & 비타민 D
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">왜 중요한가요?</p>
                                        <p className="text-sm text-gray-700">
                                            여성은 폐경 후 골밀도가 급격히 감소합니다.
                                            칼슘과 비타민 D는 뼈 건강 유지에 필수적입니다.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="font-bold text-sm mb-2">칼슘</p>
                                            <p className="text-xs text-gray-700 mb-2">권장량: 하루 1,000~1,200mg</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 우유, 요구르트, 치즈</li>
                                                <li>• 멸치, 뱅어포</li>
                                                <li>• 케일, 브로콜리</li>
                                                <li>• 두부, 아몬드</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="font-bold text-sm mb-2">비타민 D</p>
                                            <p className="text-xs text-gray-700 mb-2">권장량: 하루 600~800IU</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 연어, 고등어</li>
                                                <li>• 계란 노른자</li>
                                                <li>• 강화 우유</li>
                                                <li>• 햇빛 (하루 15~30분)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Brain className="w-6 h-6 text-green-600" />
                                        오메가-3 지방산
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">왜 중요한가요?</p>
                                        <p className="text-sm text-gray-700">
                                            심혈관 건강, 뇌 기능, 염증 감소에 필수적입니다.
                                            특히 폐경 후 심혈관 질환 위험이 높아지므로 중요합니다.
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">권장 섭취량</p>
                                        <p className="text-sm text-gray-700">하루 250~500mg (EPA + DHA)</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">풍부한 식품</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 연어, 고등어, 정어리</li>
                                            <li>• 호두, 아마씨</li>
                                            <li>• 치아씨드</li>
                                            <li>• 오메가-3 강화 계란</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Pill className="w-6 h-6 text-purple-600" />
                                        엽산 (Folate)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">왜 중요한가요?</p>
                                        <p className="text-sm text-gray-700">
                                            임신 계획 중이거나 가임기 여성에게 필수적입니다.
                                            태아의 신경관 결손을 예방하고, 세포 분열에 중요합니다.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">권장 섭취량</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 일반 성인: 하루 400μg</li>
                                            <li>• 임신 계획/임신부: 하루 600~800μg</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-bold text-sm mb-2">풍부한 식품</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 시금치, 케일, 브로콜리</li>
                                            <li>• 아보카도, 오렌지</li>
                                            <li>• 콩류, 렌틸콩</li>
                                            <li>• 강화 시리얼</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 연령별 영양 가이드 */}
                    <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">📊</span>
                            연령별 영양 가이드
                        </h2>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>30대: 기초 다지기</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">중점 영양소</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>철분:</strong> 생리로 인한 손실 보충</li>
                                            <li>• <strong>엽산:</strong> 임신 준비 (임신 3개월 전부터)</li>
                                            <li>• <strong>항산화제:</strong> 노화 예방 (비타민 C, E)</li>
                                            <li>• <strong>단백질:</strong> 근육량 유지</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>40대: 호르몬 변화 대비</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">중점 영양소</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>칼슘 & 비타민 D:</strong> 골다공증 예방 시작</li>
                                            <li>• <strong>오메가-3:</strong> 심혈관 건강</li>
                                            <li>• <strong>이소플라본:</strong> 호르몬 밸런스 (콩류)</li>
                                            <li>• <strong>비타민 B군:</strong> 에너지 대사, 스트레스 관리</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>50대 이상: 적극적 관리</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">중점 영양소</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>칼슘 & 비타민 D:</strong> 골다공증 예방 필수</li>
                                            <li>• <strong>비타민 B12:</strong> 흡수율 감소, 보충 필요</li>
                                            <li>• <strong>단백질:</strong> 근감소증 예방 (체중 1kg당 1.2g)</li>
                                            <li>• <strong>항산화제:</strong> 인지 기능 유지</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 건강 보조제 가이드 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Pill className="w-8 h-8 text-amber-600" />
                            건강 보조제 가이드
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                <p className="font-bold text-blue-900 mb-3">보조제 복용 원칙</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>1. <strong>식사로 먼저:</strong> 영양소는 음식에서 섭취하는 것이 가장 좋습니다</li>
                                    <li>2. <strong>결핍 확인:</strong> 혈액 검사로 부족한 영양소 확인 후 복용</li>
                                    <li>3. <strong>적정 용량:</strong> 과다 복용은 오히려 해로울 수 있습니다</li>
                                    <li>4. <strong>전문가 상담:</strong> 복용 전 의사 또는 약사와 상담</li>
                                    <li>5. <strong>약물 상호작용:</strong> 복용 중인 약이 있다면 반드시 확인</li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">멀티비타민</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p><strong>적합:</strong> 불규칙한 식사, 편식</p>
                                        <p><strong>주의:</strong> 과다 복용 금지</p>
                                        <p><strong>팁:</strong> 식사와 함께 복용</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">비타민 D</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p><strong>적합:</strong> 햇빛 노출 부족, 골다공증 위험</p>
                                        <p><strong>용량:</strong> 1,000~2,000IU</p>
                                        <p><strong>팁:</strong> 지용성이므로 식사와 함께</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">오메가-3</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p><strong>적합:</strong> 생선 섭취 부족, 심혈관 질환 위험</p>
                                        <p><strong>용량:</strong> EPA+DHA 1,000mg</p>
                                        <p><strong>팁:</strong> 식사와 함께, 냉장 보관</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">프로바이오틱스</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p><strong>적합:</strong> 소화 불량, 면역력 강화</p>
                                        <p><strong>용량:</strong> 100억~500억 CFU</p>
                                        <p><strong>팁:</strong> 공복 또는 식전 복용</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                                <p className="font-bold text-amber-900 mb-2">⚠️ 주의사항</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• 임신부, 수유부는 반드시 전문의 상담 후 복용</li>
                                    <li>• 수술 예정이라면 2주 전부터 일부 보조제 중단 필요</li>
                                    <li>• 알레르기 반응 발생 시 즉시 중단하고 의사 상담</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 건강한 식습관 */}
                    <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Apple className="w-8 h-8 text-green-600" />
                            건강한 식습관
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-green-800 mb-3">✅ 실천하기</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• 다양한 색깔의 채소·과일 섭취</li>
                                    <li>• 통곡물 선택 (현미, 귀리, 통밀)</li>
                                    <li>• 양질의 단백질 (생선, 콩, 닭가슴살)</li>
                                    <li>• 충분한 수분 섭취 (하루 1.5~2L)</li>
                                    <li>• 규칙적인 식사 시간</li>
                                    <li>• 천천히 씹어 먹기</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-red-800 mb-3">❌ 줄이기</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• 가공식품, 인스턴트 식품</li>
                                    <li>• 정제 탄수화물 (흰 쌀, 흰 빵)</li>
                                    <li>• 포화지방, 트랜스지방</li>
                                    <li>• 과도한 염분 섭취</li>
                                    <li>• 설탕, 단 음료</li>
                                    <li>• 과도한 카페인, 알코올</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 영양 상태 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            3분 자가진단으로 현재 영양 결핍 가능성을 확인하고
                            <br />
                            맞춤 영양 가이드를 받아보세요
                        </p>
                        <Link href="/tools/nutrients">
                            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                영양소 결핍 분석 시작하기 →
                            </Button>
                        </Link>
                    </section>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 영양 보조제 복용 전 반드시 전문의 또는 영양사와 상담하시기 바랍니다.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Source: Adapted from WHO, NIH, 한국영양학회 자료 기반. Health Lab Research Team 재구성.
                    </p>
                </div>
            </article>
        </div>
    );
}
