import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Activity, Wind, Smile, AlertTriangle, NotebookPen, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "스트레스 관리 가이드 - 번아웃 예방과 회복 | 나이스우먼",
    description: "스트레스를 효과적으로 관리하고 번아웃에서 회복하는 방법을 알아보세요. 마음챙김, 이완 기법, 스트레스 해소법까지.",
    keywords: ["스트레스 관리", "번아웃 회복", "마음챙김", "이완 기법", "명상", "스트레스 해소", "멘탈 헬스"],
    alternates: { canonical: "https://nicewomen.kr/guide/stress" },
};

export default function StressGuidePage() {
    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Brain className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        스트레스 관리 가이드
                    </h1>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        과학적 근거 기반의 스트레스 관리법으로 회복탄력성을 높이고 번아웃을 예방하세요.
                        AEO 요약, 자가 체크, FAQ를 먼저 확인해 빠르게 적용해보세요.
                    </p>
                </header>

                <section className="bg-white border border-indigo-100 rounded-2xl p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900">한눈에 보기</h2>
                    <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-indigo-700 uppercase">루틴</p>
                                <p>기상·식사·취침 시간을 고정, 1시간마다 3분 움직임, 저녁 카페인 컷오프</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-indigo-700 uppercase">진정</p>
                                <p>5분 박스호흡/복식호흡, 10분 걷기·스트레칭, 일과 중 미니 브레이크</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-indigo-700 uppercase">지원</p>
                                <p>주 1회 감정 기록, 사회적 연결 유지, 증상 지속 시 전문가 상담</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <div className="prose prose-lg max-w-none space-y-12">
                    {/* 스트레스 이해 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🧠</span>
                            스트레스 이해하기
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                스트레스는 외부 자극에 대한 우리 몸의 자연스러운 반응입니다.
                                적절한 스트레스는 동기부여가 되지만, 만성 스트레스는 건강을 해칩니다.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="border-l-4 border-green-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">급성 스트레스</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-base text-gray-800 leading-relaxed">
                                        <p><strong>특징:</strong> 단기간, 특정 상황</p>
                                        <p><strong>예시:</strong> 발표, 시험, 면접</p>
                                        <p><strong>반응:</strong> 심박수 증가, 집중력 향상</p>
                                        <p className="text-green-700"><strong>영향:</strong> 일시적, 회복 가능</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-red-500">
                                    <CardHeader>
                                        <CardTitle className="text-lg">만성 스트레스</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-base text-gray-800 leading-relaxed">
                                        <p><strong>특징:</strong> 장기간, 지속적</p>
                                        <p><strong>예시:</strong> 업무 과부하, 관계 갈등</p>
                                        <p><strong>반응:</strong> 코르티솔 과다 분비</p>
                                        <p className="text-red-700"><strong>영향:</strong> 건강 악화, 번아웃</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                                <p className="font-bold text-amber-900 mb-3">만성 스트레스의 신체적 영향</p>
                                <div className="grid md:grid-cols-2 gap-4 text-base text-gray-800 leading-relaxed">
                                    <ul className="space-y-1">
                                        <li>• 심혈관 질환 위험 증가</li>
                                        <li>• 면역력 저하</li>
                                        <li>• 소화 장애</li>
                                        <li>• 수면 장애</li>
                                    </ul>
                                    <ul className="space-y-1">
                                        <li>• 두통, 근육 긴장</li>
                                        <li>• 체중 변화</li>
                                        <li>• 피부 문제</li>
                                        <li>• 호르몬 불균형</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 번아웃 증후군 */}
                    <section className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🔥</span>
                            번아웃 증후군
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                번아웃은 만성적인 직무 스트레스로 인한 <strong className="text-rose-600">정서적 소진 상태</strong>입니다.
                                WHO는 2019년 번아웃을 공식 질병으로 분류했습니다.
                            </p>

                            <div className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <AlertTriangle className="w-6 h-6 text-rose-600" />
                                            번아웃 3대 증상
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <p className="font-bold text-gray-900 mb-2">1. 정서적 소진 (Emotional Exhaustion)</p>
                                            <p className="text-sm text-gray-700">
                                                극심한 피로감, 무기력, 감정적 에너지 고갈
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-2">2. 냉소주의 (Cynicism)</p>
                                            <p className="text-sm text-gray-700">
                                                일에 대한 무관심, 거리감, 부정적 태도
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-2">3. 성취감 저하 (Reduced Efficacy)</p>
                                            <p className="text-sm text-gray-700">
                                                자신감 상실, 업무 효율성 감소, 무능감
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="bg-rose-50 p-6 rounded-xl">
                                    <p className="font-bold text-rose-900 mb-3">번아웃 자가 체크</p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>□ 아침에 일어나기가 너무 힘들다</li>
                                        <li>□ 작은 일에도 쉽게 짜증이 난다</li>
                                        <li>□ 일에 대한 열정이 사라졌다</li>
                                        <li>□ 집중력이 현저히 떨어졌다</li>
                                        <li>□ 사람 만나는 것이 부담스럽다</li>
                                        <li>□ 만성 피로가 지속된다</li>
                                        <li>□ 아무것도 하고 싶지 않다</li>
                                    </ul>
                                    <p className="text-sm text-rose-800 font-medium mt-4">
                                        ⚠️ 5개 이상 해당되면 번아웃 가능성이 높습니다. 전문가 상담을 권장합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 스트레스 관리 기법 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🧘</span>
                            스트레스 관리 기법
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-indigo-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    마음챙김 명상 (Mindfulness)
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        현재 순간에 집중하며 판단 없이 관찰하는 연습입니다.
                                        스트레스 감소에 가장 효과적인 방법 중 하나입니다.
                                    </p>
                                    <div className="bg-indigo-50 p-6 rounded-lg">
                                        <p className="font-bold mb-3">5분 마음챙김 명상</p>
                                        <ol className="space-y-2 text-sm text-gray-700">
                                            <li>1. 편안한 자세로 앉아 눈을 감습니다</li>
                                            <li>2. 호흡에 집중합니다 (들숨과 날숨)</li>
                                            <li>3. 생각이 떠오르면 판단하지 말고 흘려보냅니다</li>
                                            <li>4. 다시 호흡에 집중합니다</li>
                                            <li>5. 5분간 반복합니다</li>
                                        </ol>
                                        <p className="text-xs text-indigo-700 mt-3">
                                            💡 매일 같은 시간에 하면 습관이 됩니다
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    호흡 이완법
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">복식 호흡</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 배를 부풀리며 천천히 들이마시기</li>
                                            <li>• 5초간 숨 참기</li>
                                            <li>• 배를 수축하며 천천히 내쉬기</li>
                                            <li>• 10회 반복</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">박스 호흡</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• 4초 들이마시기</li>
                                            <li>• 4초 참기</li>
                                            <li>• 4초 내쉬기</li>
                                            <li>• 4초 참기 → 반복</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    신체 활동
                                </h3>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        운동은 스트레스 호르몬(코르티솔)을 낮추고
                                        행복 호르몬(엔도르핀, 세로토닌)을 증가시킵니다.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <p className="font-bold text-purple-800 mb-2">유산소 운동</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 빠르게 걷기</li>
                                                <li>• 조깅</li>
                                                <li>• 수영</li>
                                                <li>• 자전거</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-purple-800 mb-2">마음-신체 운동</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 요가</li>
                                                <li>• 필라테스</li>
                                                <li>• 태극권</li>
                                                <li>• 스트레칭</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold text-purple-800 mb-2">권장량</p>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• 주 150분</li>
                                                <li>• 하루 30분</li>
                                                <li>• 주 5회</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-green-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    사회적 연결
                                </h3>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <p className="text-gray-700 mb-4">
                                        사회적 지지는 스트레스 완충 효과가 있습니다.
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>가족, 친구와 정기적으로 만나기</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>동호회, 커뮤니티 활동 참여</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>고민을 나눌 수 있는 사람 만들기</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>필요시 전문가 상담 받기</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 일상 속 스트레스 관리 */}
                    <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Smile className="w-8 h-8 text-amber-600" />
                            일상 속 스트레스 관리
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">시간 관리</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p>• 우선순위 정하기 (중요/긴급 매트릭스)</p>
                                    <p>• 완벽주의 내려놓기</p>
                                    <p>• "아니오"라고 말하기 연습</p>
                                    <p>• 휴식 시간 스케줄에 포함</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">디지털 디톡스</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p>• 스마트폰 사용 시간 제한</p>
                                    <p>• 취침 1시간 전 전자기기 끄기</p>
                                    <p>• SNS 알림 끄기</p>
                                    <p>• 주말 디지털 프리 시간 갖기</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">취미 활동</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p>• 좋아하는 활동에 시간 투자</p>
                                    <p>• 창의적 활동 (그림, 음악, 글쓰기)</p>
                                    <p>• 자연 속에서 시간 보내기</p>
                                    <p>• 반려동물과 교감</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">감사 일기</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p>• 매일 감사한 일 3가지 적기</p>
                                    <p>• 긍정적 경험에 집중</p>
                                    <p>• 작은 것에도 감사하기</p>
                                    <p>• 취침 전 작성 권장</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 번아웃 회복 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌱</span>
                            번아웃 회복 단계
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">1단계: 인정하기</h3>
                                <p className="text-sm text-gray-700">
                                    번아웃 상태임을 인정하고 받아들입니다. 자신을 탓하지 마세요.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">2단계: 휴식 취하기</h3>
                                <p className="text-sm text-gray-700 mb-2">
                                    가능하다면 휴가를 내거나 업무량을 줄입니다.
                                </p>
                                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                                    <li>• 충분한 수면 (하루 7~8시간)</li>
                                    <li>• 규칙적인 식사</li>
                                    <li>• 가벼운 운동</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">3단계: 경계 설정</h3>
                                <p className="text-sm text-gray-700">
                                    일과 삶의 균형을 위해 명확한 경계를 설정합니다.
                                    퇴근 후 업무 이메일 확인하지 않기, 주말은 온전히 쉬기 등.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">4단계: 지지 구하기</h3>
                                <p className="text-sm text-gray-700">
                                    가족, 친구, 동료에게 도움을 요청합니다.
                                    필요시 전문가 상담을 받습니다.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">5단계: 재평가하기</h3>
                                <p className="text-sm text-gray-700">
                                    일의 의미, 가치관, 우선순위를 재평가합니다.
                                    필요하다면 커리어 전환도 고려합니다.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-indigo-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>주 3일 이상 수면·식사·기상이 불규칙하다</li>
                            <li>자주 가슴이 두근거리거나 긴장이 오래 지속된다</li>
                            <li>집중력 저하/짜증/무기력이 2주 이상 이어진다</li>
                        </ul>
                        <p className="text-sm text-indigo-700">2점 이상이면 수면·카페인 컷오프, 1시간 3분 움직임, 하루 5분 호흡/명상을 2주간 우선 적용하고 개선 없으면 상담을 권장합니다.</p>
                    </section>

                    <section className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-indigo-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 시간이 없을 때 최소 무엇부터 하나요?</p>
                                <p>1) 수면·기상 시간 고정 2) 오후 카페인 컷오프 3) 하루 두 번 5분 호흡/스트레칭을 우선 적용하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 번아웃이 의심되는데 휴가가 어렵습니다.</p>
                                <p>업무·가사량을 1~2주만 20~30% 줄이고, 야근/주말 업무를 끊는 것만으로도 회복 속도가 크게 다릅니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 불안/두근거림이 심하면?</p>
                                <p>호흡·명상으로 진정 루틴을 먼저 적용하고, 증상이 지속되면 심장·갑상선·빈혈 검사를 포함한 진료를 권장합니다.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 스트레스 수준 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            3분 자가진단으로 현재 스트레스 상태를 확인하고
                            <br />
                            맞춤 관리 방법을 받아보세요
                        </p>
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                스트레스 테스트 시작하기 →
                            </Button>
                        </Link>
                    </section>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 스트레스나 번아웃 증상이 심하거나 일상생활에 지장을 주는 경우
                        반드시 정신건강의학과 전문의 상담을 받으시기 바랍니다.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Source: Adapted from WHO, American Psychological Association 자료 기반. Health Lab Research Team 재구성.
                    </p>
                </div>
            </article>
        </div>
    );
}
