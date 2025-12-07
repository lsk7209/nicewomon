import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";
import { Heart, TrendingDown, TrendingUp, AlertCircle, NotebookPen, Info, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "호르몬 기초 지식 - 여성 호르몬의 모든 것 | 나이스우먼",
    description: "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화를 이해하고, 호르몬 밸런스를 유지하는 방법을 알아보세요.",
    keywords: ["여성 호르몬", "에스트로겐", "프로게스테론", "호르몬 변화", "갱년기", "폐경기", "호르몬 밸런스"],
    alternates: { canonical: "https://nicewomen.kr/guide/hormone-basics" },
};

export default function HormoneBasicsPage() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "hormones", label: "주요 여성 호르몬" },
        { id: "life", label: "연령별 변화" },
        { id: "balance", label: "밸런스 유지법" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

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

                    <p className="text-lg text-gray-800 leading-relaxed">
                        에스트로겐·프로게스테론의 역할과 연령별 변화를 한눈에 정리했습니다.
                        AEO 요약, 자가 체크(0~3점), 연령대별 관리 포인트로 바로 적용하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 md:p-8 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">20~30대</p>
                                    <p>호르몬 전성기, 주기 안정·피부/기분 좋음 → 규칙 운동·영양 유지</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">40대 전환기</p>
                                    <p>주기 불규칙·홍조·수면 장애 시작 → 카페인/알코올 컷, 근력+비타민 D</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">50대 이후</p>
                                    <p>에스트로겐 급감, 골다공증·심혈관 리스크 ↑ → 골밀도/지질 검사, HRT 상담 고려</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="hormones" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🌸</span>
                            주요 여성 호르몬
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-rose-500 pl-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    에스트로겐 (Estrogen)
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    여성 생식·뼈·심혈관·피부·기분에 폭넓게 관여합니다. 사춘기~폐경 전까지 난소에서 주로 생성됩니다.
                                </p>

                                <div className="bg-rose-50 rounded-xl p-6 space-y-3">
                                    <h4 className="font-bold text-gray-900 mb-3">주요 역할</h4>
                                    <ul className="space-y-2 text-gray-800 leading-relaxed">
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
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    배란 후 황체에서 분비되어 임신 유지·주기 안정·수면에 기여합니다.
                                </p>

                                <div className="bg-purple-50 rounded-xl p-6 space-y-3">
                                    <h4 className="font-bold text-gray-900 mb-3">주요 역할</h4>
                                    <ul className="space-y-2 text-gray-800 leading-relaxed">
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

                    <section id="life" className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 md:p-12">
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
                                <CardContent className="space-y-3 text-gray-800 leading-relaxed text-base">
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
                                <CardContent className="space-y-3 text-gray-800 leading-relaxed text-base">
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
                                <CardContent className="space-y-3 text-gray-800 leading-relaxed text-base">
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

                    <section id="balance" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
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
                                <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
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
                                <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
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
                                <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
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
                                <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
                                    <li>• 명상, 마음챙김</li>
                                    <li>• 호흡 운동</li>
                                    <li>• 취미 활동</li>
                                    <li>• 사회적 관계 유지</li>
                                    <li>• 전문가 상담</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="selfcheck" className="bg-white border border-rose-100 rounded-2xl p-6 md:p-8 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-rose-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>생리 주기/양이 3개월 이상 뚜렷이 변했다</li>
                            <li>홍조·야간 발한·수면 장애가 잦다</li>
                            <li>골밀도, 지질, 갑상선, 철분 검진을 1년 이상 하지 않았다</li>
                        </ul>
                        <p className="text-sm text-rose-700">2점 이상이면 정기 검진, 수면/카페인 컷오프, 근력+비타민 D 루틴을 우선 적용하고 의료 상담을 고려하세요.</p>
                    </section>

                    <section id="faq" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 md:p-8 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-rose-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 주기가 불규칙해지면 바로 검사를 해야 하나요?</p>
                                <p>40대 이후 주기 변화가 반복되면 혈액검사(호르몬, 갑상선), 빈혈, 비타민 D를 확인하세요. 갑작스러운 출혈/통증이 있으면 즉시 진료가 필요합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 호르몬 대체 요법(HRT)은 언제 고려하나요?</p>
                                <p>일상에 지장을 주는 홍조·수면 장애가 지속되거나 골다공증 위험이 높을 때 의료진과 위험/이득을 평가해 결정합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 식물성 에스트로겐(이소플라본)은 도움이 되나요?</p>
                                <p>콩·두부 등 식품 섭취는 일반적으로 안전하나, 보충제는 약물/질환 여부에 따라 다릅니다. 유방 질환 병력이 있다면 의료진과 상의하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 체중·기분 변화가 큰데 무엇부터 할까요?</p>
                                <p>수면 7~8시간, 저녁 카페인 컷오프, 주 2~3회 근력운동, 단백질 1.2g/kg 섭취를 우선 적용하고, 증상이 지속되면 진료를 권장합니다.</p>
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
                </ContentWithToc>

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
