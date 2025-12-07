import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, BatteryCharging, PauseCircle, ListChecks, NotebookPen, AlertCircle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "번아웃 회복 3단계: 에너지·경계·리듬 | 나이스우먼 블로그",
    description: "과로·무기력에서 회복하기 위한 3단계 플랜: 에너지 리필, 업무·관계 경계 설정, 수면·운동 리듬 재정비. 7일 샘플 플랜과 자가 체크 포함.",
    keywords: ["번아웃", "회복", "스트레스", "경계 설정", "루틴", "자가 체크"],
    alternates: { canonical: "https://nicewomen.kr/blog/burnout-recovery-steps" },
};

export default function BurnoutRecoveryStepsPost() {
    const steps = [
        { title: "에너지 리필", detail: "수면 7~8시간 우선, 카페인 오후 2시 컷, 당·지방 과잉 간식 줄이기." },
        { title: "경계 설정", detail: "업무 시간·알림 창 설정, 회의/응대 스크립트로 '잠시 후 답변'을 습관화." },
        { title: "리듬 회복", detail: "주 3회 20분 걷기+가벼운 근력, 주말 리커버리 데이, 10분 마음챙김." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "plan", label: "3단계 회복 플랜" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "week", label: "7일 샘플 플랜" },
        { id: "scripts", label: "알림·응답 스크립트" },
        { id: "dayplan", label: "샘플 하루 리듬" },
        { id: "checklist", label: "체크리스트" },
        { id: "faq", label: "FAQ" },
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        번아웃 회복 3단계: 에너지·경계·리듬
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        번아웃은 수면 부족, 경계 무너짐, 회복 없는 업무 루프로 발생합니다.
                        회복을 위해 에너지·경계·리듬을 단계적으로 재정비하세요. 10~20%씩만 회복해도 1~2주 후 체감이 달라집니다.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">에너지</p>
                                    <p>수면 7~8h, 카페인 14시 컷, 단백질·수분 먼저 채우기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">경계</p>
                                    <p>알림 요약 모드, 회신 시점 선언(“내일 오전 답변”), 일정 70~80%만 채우기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-orange-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-orange-700 uppercase">리듬</p>
                                    <p>주 3회 걷기+근력, 주 1회 회복일, 10분 마음챙김으로 반응성 낮추기</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 회복 플랜</h2>
                        {steps.map((s) => (
                            <Card key={s.title} className="border border-orange-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <BatteryCharging className="w-5 h-5 text-orange-600" />
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-800 text-base leading-relaxed">{s.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="selfcheck" className="bg-white border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-orange-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>수면 6시간 이하가 3일 이상</li>
                            <li>냉소·무기력으로 업무/가정 반응이 둔감하거나 예민해짐</li>
                            <li>알림·메신저를 끄지 못해 집중 블록이 없다</li>
                            <li>심박 상승·두근거림·뇌안개가 잦다</li>
                        </ul>
                        <p className="text-sm text-orange-700">2점 이상이면 7일 회복 플랜을 적용하고, 지속되면 상담을 권장합니다.</p>
                    </section>

                    <section id="week" className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-orange-600" />
                            7일 샘플 플랜
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>Day1: 알림 요약 모드, 일정 70% 축소, 낮잠 20분 이내</li>
                            <li>Day2: 단백질 20g+채소 2컵/식, 카페인 14시 컷</li>
                            <li>Day3: 회복일(회의 최소화), 20분 산책, 10분 스트레칭</li>
                            <li>Day4: 응답 지연 스크립트 적용, 수분 2L 목표</li>
                            <li>Day5: HRV/심박 체크, 저강도 근력 20분</li>
                            <li>Day6: 디지털 다운타임 2시간, 블루라이트 차단</li>
                            <li>Day7: 주간 리뷰(수면·에너지·냉소도) → 다음 주 강도 조정</li>
                        </ul>
                    </section>

                    <section id="scripts" className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">알림·응답 스크립트</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>“지금 회의라 끝나면 확인할게요.”</li>
                            <li>“오늘은 응답이 느릴 수 있어요. 내일 오전까지 회신할게요.”</li>
                            <li>업무/개인 알림 분리, 집중 시간 2블록 확보</li>
                        </ul>
                    </section>

                    <section id="dayplan" className="bg-white border border-orange-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">샘플 하루 리듬</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>아침: 기상 후 햇빛 10분, 단백질 아침, 카페인 1회</li>
                            <li>오전: 집중 블록 90분×2, 알림 끄기</li>
                            <li>점심 후: 10~15분 걷기, 카페인 마지막 컵</li>
                            <li>오후: 가벼운 업무/정리, 5분 호흡</li>
                            <li>저녁: 스트레칭/걷기 20분, 스크린 60분 차단, 취침 루틴</li>
                        </ul>
                    </section>

                    <section id="checklist" className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">체크리스트</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>수면 7~8h, 카페인 14시 컷</li>
                            <li>집중 블록 2개, 알림/메신저 창 분리</li>
                            <li>주 3회 20분 걷기+근력, 주 1회 완전 휴식일</li>
                            <li>회의·요청에 “응답 시간 알리기” 스크립트 사용</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
                        <div className="space-y-2 text-base text-gray-800 leading-relaxed">
                            <p className="font-semibold">Q. 휴가를 바로 내기 어렵다면?</p>
                            <p>A. 최소한 오후 1~2시간 “방해 금지” 블록을 확보해 수면·식사·산책으로 급한 회복을 우선하세요.</p>
                            <p className="font-semibold">Q. 운동이 버거울 때?</p>
                            <p>A. 10분 걷기+5분 스트레칭부터 시작하고, 주 1회는 완전 휴식일을 설정해 회복을 확보하세요.</p>
                            <p className="font-semibold">Q. 회복 기간은 얼마나 걸릴까?</p>
                            <p>A. 1~2주만 일관되게 적용해도 수면·에너지 체감이 개선되는 경우가 많습니다. 3~4주 지속 피로면 검진을 권장합니다.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">번아웃 위험도 확인하고 회복 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        번아웃 스크리너와 스트레스 테스트로 회복 우선순위를 정하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/burnout-risk-screener">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                번아웃 스크리너 →
                            </Button>
                        </Link>
                        <Link href="/guide/stress">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레스 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


