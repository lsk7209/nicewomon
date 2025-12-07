import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MoonStar, Coffee, AlarmClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "교대근무자를 위한 수면 스케줄 가이드 | 나이스우먼 블로그",
    description: "주간→야간 전환 시 3단계 빛·카페인·수면 스케줄로 졸림과 각성을 조절하는 방법을 제안합니다.",
    keywords: ["교대근무 수면", "야간 근무", "수면 스케줄", "카페인 컷오프", "빛 노출"],
    alternates: { canonical: "https://nicewomen.kr/blog/shift-work-sleep-guide" },
};

export default function ShiftWorkSleepGuidePost() {
    const steps = [
        { title: "사전 2~3일: 취침/기상 1~2시간씩 지연", detail: "매일 60~90분씩 뒤로 밀며, 저녁 빛 노출을 늘리고 아침 빛을 차단합니다." },
        { title: "근무 당일: 졸림/각성 창 관리", detail: "근무 시작 전 20분 파워냅, 카페인은 근무 초중반에만 사용하고 종료 8시간 전 중단." },
        { title: "퇴근 후: 짧고 빠른 수면", detail: "퇴근 직후 90분 코어 수면 후, 오후 1~2시간 보충 수면을 더해 총량을 확보합니다." },
    ];

    const faq = [
        { q: "라이트 블로킹은 어떻게?", a: "퇴근 후 선글라스/모자, 블랙아웃 커튼을 사용해 멜라토닌 분비를 지킵니다." },
        { q: "카페인 복용 시간?", a: "근무 시작 후 1~3시간에 분할 섭취, 종료 8시간 전에는 중단하세요." },
        { q: "낮잠 길이는?", a: "근무 전 20분 파워냅, 퇴근 후 90분 코어 수면을 우선 확보하세요." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "plan", label: "3단계 전환 계획" },
        { id: "fuel", label: "카페인·식사 전략" },
        { id: "schedule", label: "시간대별 스케줄 예시" },
        { id: "checklist", label: "체크리스트" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        교대근무자를 위한 수면 스케줄 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        야간 근무는 생체 리듬을 크게 흔듭니다. 빛 노출, 카페인 컷오프, 파워냅과 코어 수면을 조합해
                        전환 스트레스를 줄이는 3단계 스케줄을 제안합니다.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-slate-200 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">한눈에 보기</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>전환 2~3일 전부터 취침/기상 시간을 60~90분씩 지연</li>
                            <li>카페인은 근무 초중반만, 종료 8시간 전 중단</li>
                            <li>퇴근 직후 90분 코어 수면 + 오후 1~2시간 보충</li>
                            <li>퇴근 후 빛 차단, 근무 전에는 밝은 빛 노출</li>
                        </ul>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 전환 계획</h2>
                        {steps.map((step) => (
                            <Card key={step.title} className="border border-slate-200">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <AlarmClock className="w-5 h-5 text-indigo-600" />
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="fuel" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">카페인·식사 전략</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>카페인: 근무 시작 1~3시간 사이 분할, 종료 8시간 전 컷오프</li>
                            <li>식사: 근무 전 단백질+섬유, 근무 중 과당·지방 많은 간식 최소화</li>
                            <li>수분/전해질: 카페인 섭취 시 물 1:1, 긴 근무엔 전해질 소량</li>
                        </ul>
                    </section>

                    <section id="schedule" className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">시간대별 스케줄 예시 (야간 근무)</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            <li>근무 4~6h 전: 20분 파워냅, 가벼운 단백질 간식</li>
                            <li>근무 시작~3h: 카페인 분할, 밝은 빛 노출</li>
                            <li>근무 중반: 수분·전해질 보충, 가벼운 스트레칭</li>
                            <li>근무 종료 8h 전 이후: 카페인 중단</li>
                            <li>퇴근 직후: 햇빛 차단, 90분 코어 수면</li>
                            <li>오후: 1~2시간 보충 수면, 저녁 전 가벼운 운동/걷기</li>
                        </ul>
                    </section>

                    <section id="checklist" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">체크리스트</h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            <li>전환 2~3일 전: 취침/기상 60~90분씩 이동 시작</li>
                            <li>카페인 컷오프: 근무 종료 8시간 전</li>
                            <li>퇴근 후 90분 수면 확보, 오후 보충 수면 1~2시간</li>
                            <li>퇴근 직후부터 블랙아웃 커튼/아이마스크 사용</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-slate-200">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-700 text-sm">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-slate-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">교대 스케줄에 맞는 수면·카페인 컷오프 계산하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 테스트와 카페인 컷오프 계산기로 개인화된 전환 플랜을 받아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/caffeine-cutoff-calculator">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                카페인 컷오프 계산기 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.cdc.gov/niosh/emres/light-intervention.html" className="underline text-white">CDC Shift Work Light Guide</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


