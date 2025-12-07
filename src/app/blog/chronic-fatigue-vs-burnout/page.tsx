import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, BatteryCharging, Flame, AlertTriangle, NotebookPen, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "만성 피로 vs 번아웃 구분법 | 나이스우먼 블로그",
    description: "수면·에너지·감정 소진 패턴으로 만성 피로와 번아웃을 구분하고 7일 회복 루틴과 자가 체크를 제안합니다.",
    keywords: ["만성 피로", "번아웃", "스트레스", "회복", "수면 부족", "회복 루틴"],
    alternates: { canonical: "https://nicewomen.kr/blog/chronic-fatigue-vs-burnout" },
};

export default function ChronicFatigueVsBurnoutPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "diff", label: "구분 포인트" },
        { id: "recover", label: "회복 우선순위" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "plan", label: "7일 회복 루틴" },
        { id: "faq", label: "FAQ" },
    ];

    const diff = [
        "만성 피로: 수면 부족·영양 불균형·빈혈·갑상선 등 신체 요인이 많음",
        "번아웃: 업무/가정 과부하, 감정 소진, 냉소, 동기 저하가 두드러짐",
        "두 경우 모두 수면·수분·영양이 기반, 번아웃은 경계 설정·알림 관리가 핵심",
    ];

    const recover = [
        "수면: 7~8시간 목표, 카페인 컷오프, 저녁 조도·스크린 관리",
        "에너지: 단백질·철·B군·마그네슘 보충, 수분·전해질 균형",
        "경계: 알림 차단, 응답 지연 스크립트, 회복일/저강도 운동일 지정",
    ];

    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>스트레스</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">만성 피로 vs 번아웃 구분법</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.07</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        만성 피로는 신체적 요인, 번아웃은 감정 소진과 통제감 상실이 두드러집니다.
                        두 패턴을 구분하고 회복 우선순위를 정해보세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <p className="text-sm text-gray-700">만성 피로는 수면·영양·빈혈·갑상선 등 신체 요인이 많고, 번아웃은 감정 소진/냉소/동기 저하가 두드러집니다. 먼저 수면 7~8시간, 카페인 컷오프, 단백질·철·B군·마그네슘을 채우고, 번아웃이면 알림 차단·응답 지연·회복일을 잡아 경계를 복원하세요.</p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">만성 피로</p>
                                    <p className="text-gray-800">수면 부족, 빈혈/갑상선, 혈당 기복 여부를 먼저 확인</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">번아웃</p>
                                    <p className="text-gray-800">과부하·냉소·동기 저하 + 경계 붕괴, 알림·응답 관리 필요</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">회복</p>
                                    <p className="text-gray-800">수면·영양 기반 + 주 1회 회복일, 2주간 저강도 운동으로 전환</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="diff" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">구분 포인트</h2>
                        {diff.map((d) => (
                            <Card key={d} className="border border-orange-100">
                                <CardContent className="pt-5 text-sm text-gray-700">{d}</CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="recover" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">회복 우선순위</h2>
                        {recover.map((r) => (
                            <Card key={r} className="border border-orange-100">
                                <CardContent className="pt-5 text-sm text-gray-700">{r}</CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="selfcheck" className="bg-white border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-orange-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                            <li>수면 6시간 이하 또는 입면 30분 이상 지연</li>
                            <li>아침 기상 후 2시간 이상 극심한 피로가 지속</li>
                            <li>냉소·회의감이 크고, 일/가정 반응성이 높아짐</li>
                            <li>두근거림·뇌안개·집중 저하가 잦음</li>
                            <li>업무/메시지 알림에 즉각 반응하지 않으면 불안하거나 짜증</li>
                        </ul>
                        <p className="text-xs text-gray-600">3점 이상이면 검진(혈액검사·수면·스트레스)과 함께 회복 루틴을 2주 적용하세요.</p>
                    </section>

                    <section id="plan" className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-orange-600" />
                            7일 회복 루틴 (샘플)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                            <li>Day 1: 알림 요약 모드, 카페인 컷오프 14시, 수면 7.5h 목표</li>
                            <li>Day 2: 단백질 20g+채소 2컵/식, 20분 걷기</li>
                            <li>Day 3: 회복일 지정, 일정 70%로 축소, 낮잠 20분 이내</li>
                            <li>Day 4: 경계 설정 스크립트 적용(“내일 오전 답변드릴게요”)</li>
                            <li>Day 5: HRV·심박 체크, 고강도 운동 대신 가벼운 근력·요가</li>
                            <li>Day 6: 디지털 다운타임 2시간, 블루라이트 차단</li>
                            <li>Day 7: 1주 평가(피로·냉소·수면), 필요 시 추가 1주 반복</li>
                        </ul>
                        <p className="text-xs text-gray-600">빈혈·갑상선·혈당 문제가 있으면 의료진 치료와 병행하세요.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">의료 검진은 무엇을 우선?</p>
                                <p className="text-gray-700 text-sm">혈액검사(철, B12, 갑상선, 혈당), 수면 상태, 스트레스 수준을 함께 확인하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">번아웃이면 운동은?</p>
                                <p className="text-gray-700 text-sm">저강도 걷기·스트레칭부터, 고강도는 회복 신호가 돌아올 때까지 미룹니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">경계 설정이 어렵다면?</p>
                                <p className="text-gray-700 text-sm">알림을 요약 모드로 전환하고, “오늘은 70% 일정만 처리, 나머지는 내일 오전 답변”처럼 미리 선언하세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">에너지·스트레스 점검하고 회복 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">번아웃 스크리너, 스트레스 테스트, 수면 테스트로 회복 계획을 세우세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/burnout-risk-screener">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                번아웃 스크리너 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/sleep">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수면 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


