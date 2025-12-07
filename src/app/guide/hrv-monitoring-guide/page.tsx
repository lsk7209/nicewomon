import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ActivitySquare, HeartPulse, AlertCircle, NotebookPen, Activity, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "HRV로 회복·스트레스 모니터링 가이드 | 나이스우먼",
    description: "웨어러블 HRV 지표를 이해하고, 회복일 결정, 수면·운동 강도 조절에 활용하는 방법. 아침 고정 측정, 연령대별 참고 범위, 주기/감염 시 해석 팁 포함.",
    keywords: ["HRV", "심박변이도", "회복", "스트레스", "운동 강도", "RMSSD"],
    alternates: { canonical: "https://nicewomen.kr/guide/hrv-monitoring-guide" },
};

export default function HrvMonitoringGuide() {
    const uses = [
        "회복일 결정: HRV가 평소보다 크게 하락하면 저강도/휴식",
        "수면 질 확인: 수면 후 HRV 하락과 각성 증가 시 수면 위생 점검",
        "스트레스 모니터링: 낮 동안 급격한 하락이 반복되면 휴식·호흡 추가",
    ];

    const steps = [
        { title: "기본값 확보", detail: "2주 이상 아침 HRV를 측정해 개인 베이스라인을 만듭니다." },
        { title: "트리거 기록", detail: "카페인, 음주, 격한 운동, 수면 부족 후 HRV 변화를 메모합니다." },
        { title: "조정", detail: "HRV 하락 시 수면 우선·카페인 컷·저강도 운동으로 회복일을 만듭니다." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "uses", label: "HRV 활용 포인트" },
        { id: "steps", label: "3단계 운영" },
        { id: "ranges", label: "수치 이해" },
        { id: "protocol", label: "측정 프로토콜" },
        { id: "caution", label: "해석 시 유의" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>회복</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        HRV로 회복·스트레스 모니터링 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        HRV는 회복 상태와 스트레스 부하를 반영합니다. 베이스라인을 만들고,
                        하락 시 루틴을 조정해 과훈련과 번아웃을 예방하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <p className="text-sm font-semibold text-indigo-700">핵심 요약</p>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">측정</p>
                                    <p>아침 기상 직후, 동일 기기로 2주간 베이스라인 확보</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">판단</p>
                                    <p>RMSSD가 평소 대비 -10~20% 이상 하락하면 회복일, + 상승 시 강도 소폭 증가</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">대응</p>
                                    <p>수면·카페인 컷·저강도 운동으로 회복, 감염/주기/음주 여부를 함께 기록</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                        <section id="uses" className="bg-white border border-indigo-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">HRV 활용 포인트</h2>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base leading-relaxed">
                            {uses.map((u) => (
                                <li key={u}>{u}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="steps" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 운영</h2>
                        {steps.map((s) => (
                            <Card key={s.title} className="border border-indigo-100">
                                <CardContent className="pt-5 space-y-2 text-base text-gray-800 leading-relaxed">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <ActivitySquare className="w-5 h-5 text-indigo-600" />
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed">{s.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="protocol" className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-indigo-600" />
                            측정 프로토콜 (아침 고정)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base leading-relaxed">
                            <li>기상 직후, 같은 자세(누워/앉아) 1~2분 측정</li>
                            <li>동일 기기·동일 시간대, 2주간 베이스라인 평균 확보</li>
                            <li>주기·음주·격한 운동·감염 여부를 간단히 메모</li>
                        </ul>
                    </section>

                    <section id="caution" className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                            해석 시 유의
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>기기·시간대가 바뀌면 값이 달라집니다. 동일 기기·시간 유지.</li>
                            <li>수면 시간·품질이 낮으면 HRV가 왜곡될 수 있습니다.</li>
                            <li>감염·질병, 음주 후 일시적 하락은 회복일로 전환하세요.</li>
                        </ul>
                    </section>

                    <section id="ranges" className="bg-white border border-indigo-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">수치 이해</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            개인마다 절대값이 다르므로 “내 베이스라인 대비 변화”가 중요합니다. 일반적으로 아침 RMSSD가 평소 대비 10~20% 이상
                            하락하면 회복일을 고려하고, 연속 상승 시 강도를 서서히 올릴 수 있습니다.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-base text-gray-800 leading-relaxed">
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">참고 범위(대략적)</p>
                                    <p>20~30대 여성 RMSSD 45~70ms, 40~50대 35~60ms (개인차 큼)</p>
                                    <p>수면·운동·음주·주기에 따라 하루 10~30% 변동 가능</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">해석 팁</p>
                                    <p>하락: 수면 연장, 카페인 컷, 저강도·회복일</p>
                                    <p>상승: 컨디션 양호, 강도를 소폭(10~15%) 올리되 연속 하락 주의</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
                        <div className="space-y-2 text-base text-gray-800 leading-relaxed">
                            <p className="font-semibold">Q. 낮 동안 측정값은 어떻게 쓰나요?</p>
                            <p>A. 패턴만 참고하고, 의사결정은 아침 고정 시점 기준으로 합니다. 낮 측정은 급격한 스트레스/과훈련 알림 정도로 활용하세요.</p>
                            <p className="font-semibold">Q. 생리 주기와 HRV?</p>
                            <p>A. 황체기에 HRV가 일시 하락할 수 있습니다. 주기 정보를 기록해 변화를 구분하면 해석이 쉬워집니다.</p>
                            <p className="font-semibold">Q. 감염·음주 후 하락은?</p>
                            <p>A. 수면·수분·전해질을 우선 확보하고, 24~48시간 저강도/휴식으로 회복일을 둡니다.</p>
                            <p className="font-semibold">Q. 어떤 기기를 써야 하나요?</p>
                            <p>A. 동일 기기로 일관 측정이 중요합니다. 기기마다 수치가 달라도 “내 베이스라인 대비 변화”를 보면 됩니다.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">HRV 기반 회복일 추천 받기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        HRV 휴식일 추천 도구와 스트레스 테스트로 루틴을 조정하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hrv-rest-day-advisor">
                            <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                회복일 추천 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


