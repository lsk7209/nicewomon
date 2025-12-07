import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";
import { Moon, Sun, Clock, Brain, Heart, AlertCircle, NotebookPen, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "수면 가이드 - 숙면을 위한 과학적 방법 | 나이스우먼",
    description: "수면 질을 개선하는 과학적 방법과 실천 가능한 팁을 알아보세요. 불면증 해결, 수면 위생, 수면 루틴까지.",
    keywords: ["수면 개선", "불면증 해결", "수면 위생", "수면 루틴", "숙면", "수면 장애", "멜라토닌"],
    alternates: { canonical: "https://nicewomen.kr/guide/sleep" },
};

export default function SleepGuidePage() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "importance", label: "왜 수면이 중요한가" },
        { id: "cycle", label: "수면 주기" },
        { id: "hygiene", label: "수면 위생" },
        { id: "insomnia", label: "불면증 대처" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Moon className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        수면 가이드
                    </h1>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        과학적 근거 기반의 수면 개선 방법을 요약했습니다. AEO 한눈에 보기, 자가 체크, FAQ를 먼저 확인하고 바로 적용해보세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">한눈에 보기</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">루틴</p>
                                    <p>기상·취침 시간 고정, 아침 햇빛 30분, 오후 2시 이후 카페인 컷오프</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">환경</p>
                                    <p>18~20도, 어둡고 조용한 침실, 블루라이트·LED 가리기, 편안한 매트리스</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">대처</p>
                                    <p>15분 이상 깨어 있으면 일어나기, 낮잠 20분/15시 이전, 수면일지+수면 제한/자극조절 활용</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                <div className="prose prose-lg max-w-none space-y-12">
                    {/* 수면의 중요성 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">💤</span>
                            왜 수면이 중요한가요?
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                수면은 단순한 휴식이 아닙니다. 우리 몸과 뇌가 회복하고 재생되는 필수적인 과정입니다.
                                성인은 하루 <strong className="text-blue-600">7~8시간</strong>의 수면이 필요합니다.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="border-l-4 border-blue-500">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Brain className="w-6 h-6 text-blue-600" />
                                            뇌 건강
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p>• 기억력 강화 및 학습 능력 향상</p>
                                        <p>• 노폐물 제거 (알츠하이머 예방)</p>
                                        <p>• 집중력과 판단력 유지</p>
                                        <p>• 감정 조절 능력 향상</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-rose-500">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Heart className="w-6 h-6 text-rose-600" />
                                            신체 건강
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm text-gray-700">
                                        <p>• 면역력 강화</p>
                                        <p>• 호르몬 균형 유지</p>
                                        <p>• 심혈관 건강 개선</p>
                                        <p>• 체중 조절 및 대사 개선</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                                <p className="font-bold text-amber-900 mb-2">수면 부족의 위험</p>
                                <ul className="space-y-1 text-base text-gray-800 leading-relaxed">
                                    <li>• 만성 피로, 집중력 저하</li>
                                    <li>• 우울증, 불안 장애 위험 증가</li>
                                    <li>• 비만, 당뇨병 위험 증가</li>
                                    <li>• 심혈관 질환 위험 증가</li>
                                    <li>• 면역력 저하</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 수면 주기 이해 */}
                    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌙</span>
                            수면 주기 이해하기
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                수면은 <strong>렘(REM) 수면</strong>과 <strong>비렘(Non-REM) 수면</strong>이
                                약 90분 주기로 반복됩니다. 하룻밤에 4~6회 반복됩니다.
                            </p>

                            <div className="space-y-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-indigo-800 mb-3">1단계: 얕은 수면</h3>
                                <p className="text-base text-gray-800 leading-relaxed">
                                    잠들기 시작하는 단계. 쉽게 깰 수 있으며, 근육이 이완되기 시작합니다.
                                </p>
                            </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-blue-800 mb-3">2단계: 가벼운 수면</h3>
                                    <p className="text-base text-gray-800 leading-relaxed">
                                        체온이 떨어지고 심박수가 느려집니다. 전체 수면의 약 50%를 차지합니다.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-purple-800 mb-3">3~4단계: 깊은 수면 (서파 수면)</h3>
                                    <p className="text-base text-gray-800 leading-relaxed">
                                        가장 깊은 수면 단계. 신체 회복, 면역력 강화, 성장 호르몬 분비가 일어납니다.
                                        이 단계에서 깨면 매우 피곤함을 느낍니다.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-rose-800 mb-3">렘(REM) 수면</h3>
                                    <p className="text-base text-gray-800 leading-relaxed">
                                        꿈을 꾸는 단계. 뇌가 활발히 활동하며 기억을 정리하고 학습을 강화합니다.
                                        눈이 빠르게 움직이고 근육은 이완됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 수면 위생 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">✨</span>
                            수면 위생 (Sleep Hygiene)
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    침실 환경 조성
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🌡️ 온도</p>
                                        <p className="text-base text-gray-800 leading-relaxed">
                                            18~20도가 이상적입니다. 너무 덥거나 추우면 수면을 방해합니다.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🌑 어둠</p>
                                        <p className="text-base text-gray-800 leading-relaxed">
                                            암막 커튼 사용, 전자기기 LED 가리기. 빛은 멜라토닌 분비를 억제합니다.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🔇 조용함</p>
                                        <p className="text-base text-gray-800 leading-relaxed">
                                            귀마개 사용 또는 백색 소음 활용. 갑작스러운 소음을 차단합니다.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold mb-2">🛏️ 편안함</p>
                                        <p className="text-base text-gray-800 leading-relaxed">
                                            편안한 매트리스와 베개. 침구는 청결하게 유지합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    수면 루틴
                                </h3>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <ul className="space-y-3 text-gray-800 text-base leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                            <span><strong>규칙적인 시간:</strong> 주말에도 같은 시간에 자고 일어나기</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Moon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                            <span><strong>취침 의식:</strong> 매일 같은 순서로 잠자리 준비 (샤워, 독서 등)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                            <span><strong>아침 햇빛:</strong> 기상 후 30분 이내 햇빛 쬐기 (생체 리듬 조절)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-rose-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    피해야 할 것들
                                </h3>
                                <div className="bg-rose-50 p-6 rounded-lg">
                                    <ul className="space-y-3 text-gray-800 text-base leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                                            <span><strong>카페인:</strong> 오후 2시 이후 섭취 금지 (반감기 5~6시간)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                                            <span><strong>알코올:</strong> 잠은 오지만 수면 질 저하, 자주 깸</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                                            <span><strong>블루라이트:</strong> 취침 1~2시간 전 스마트폰, TV 사용 자제</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                                            <span><strong>과식:</strong> 취침 3시간 전 저녁 식사 완료</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                                            <span><strong>낮잠:</strong> 오후 3시 이후 낮잠 금지, 20분 이내로 제한</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 불면증 대처법 */}
                    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">😴</span>
                            불면증 대처법
                        </h2>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>20분 규칙</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-700">
                                    <p className="mb-3">
                                        침대에 누워 20분 이상 잠들지 못하면 일어나서 다른 방으로 이동하세요.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li>• 어두운 조명 아래에서 독서 또는 명상</li>
                                        <li>• 졸음이 올 때까지 기다리기</li>
                                        <li>• 침대는 오직 수면을 위한 공간으로 인식시키기</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>이완 기법</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">4-7-8 호흡법</p>
                                        <ol className="space-y-1 text-sm text-gray-700 ml-4">
                                            <li>1. 4초 동안 코로 숨 들이마시기</li>
                                            <li>2. 7초 동안 숨 참기</li>
                                            <li>3. 8초 동안 입으로 천천히 내쉬기</li>
                                            <li>4. 4회 반복</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">점진적 근육 이완법</p>
                                        <p className="text-sm text-gray-700">
                                            발끝부터 머리까지 각 근육을 5초간 긴장시켰다가 이완하기를 반복합니다.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>인지 행동 치료 (CBT-I)</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-700">
                                    <p className="mb-3">
                                        만성 불면증에 가장 효과적인 비약물 치료법입니다.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li>• 수면에 대한 부정적 생각 바꾸기</li>
                                        <li>• 수면 제한 요법 (침대에 있는 시간 줄이기)</li>
                                        <li>• 자극 조절 (침대는 수면만을 위한 공간)</li>
                                        <li>• 전문가 상담 권장</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* 수면 보조제 */}
                    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">💊</span>
                            수면 보조 성분
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">멜라토닌</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>효과:</strong> 수면-각성 주기 조절</p>
                                    <p><strong>용량:</strong> 0.5~5mg (취침 30분~1시간 전)</p>
                                    <p><strong>적합:</strong> 시차 적응, 교대 근무</p>
                                    <p className="text-xs text-amber-700">⚠️ 장기 복용 전 전문의 상담</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">마그네슘</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>효과:</strong> 근육 이완, 신경 안정</p>
                                    <p><strong>용량:</strong> 200~400mg (취침 전)</p>
                                    <p><strong>식품:</strong> 견과류, 녹색 채소, 바나나</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">L-테아닌</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>효과:</strong> 긴장 완화, 수면 질 개선</p>
                                    <p><strong>용량:</strong> 200~400mg</p>
                                    <p><strong>식품:</strong> 녹차 (카페인 없는 것)</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">글리신</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    <p><strong>효과:</strong> 체온 낮춤, 깊은 수면 촉진</p>
                                    <p><strong>용량:</strong> 3g (취침 전)</p>
                                    <p><strong>식품:</strong> 육류, 생선, 콩류</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                            <p className="text-sm text-amber-900">
                                <strong>주의:</strong> 수면제는 단기적 해결책일 뿐입니다.
                                근본적인 수면 위생 개선이 우선이며, 약물 복용 전 반드시 전문의와 상담하세요.
                            </p>
                        </div>
                    </section>

                    <section id="selfcheck" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-blue-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>취침 후 20분 이상 자주 뒤척이거나, 새벽 각성이 잦다</li>
                            <li>주말과 평일 취침·기상 시간이 2시간 이상 차이난다</li>
                            <li>오후 늦게까지 카페인/스크린 사용을 줄이지 못한다</li>
                        </ul>
                        <p className="text-sm text-blue-700">2점 이상이면 2주간 고정 기상·카페인 컷오프·침상 분리(15분 규칙)를 우선 적용하고, 필요 시 수면일지·수면 제한을 병행하세요.</p>
                    </section>

                    <section id="faq" className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-blue-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 누워서 20분 넘게 못 자면 어떻게 하나요?</p>
                                <p>15~20분 이상 깨어 있으면 일어나 조용한 공간에서 독서/호흡 후 졸릴 때 다시 누우세요. 침대=잠의 연합을 강화합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 낮잠은 어느 정도까지 괜찮을까요?</p>
                                <p>필요 시 20분 이내, 오후 3시 이전으로 제한합니다. 불면이 지속될 때는 낮잠을 일시 중단하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 카페인 컷오프는 몇 시가 적당한가요?</p>
                                <p>일반적으로 오후 2시를 권장합니다. 민감하면 더 이른 시간(12~13시)에 컷오프하세요.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            나의 수면 질 확인하기
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            3분 자가진단으로 현재 수면 상태를 확인하고
                            <br />
                            맞춤 개선 방법을 받아보세요
                        </p>
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                수면 질 테스트 시작하기 →
                            </Button>
                        </Link>
                    </section>
                </div>
                </ContentWithToc>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-gray-800">의학적 고지:</strong> 본 가이드는 일반적인 건강 정보 제공을 목적으로 하며,
                        의학적 진단이나 치료를 대신할 수 없습니다. 불면증이 2주 이상 지속되거나 일상생활에 지장을 주는 경우
                        반드시 전문의 상담을 받으시기 바랍니다.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Source: Adapted from NIH, American Academy of Sleep Medicine 자료 기반. Health Lab Research Team 재구성.
                    </p>
                </div>
            </article>
        </div>
    );
}
