import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, SunMedium, Moon, Activity, NotebookPen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "아침 햇빛 노출로 수면 질 올리는 법 | 나이스우먼 블로그",
    description: "기상 후 30분 내 햇빛 노출, 점심 산책, 저녁 조도 관리로 서카디언 리듬을 안정시키는 방법과 라이트박스·교대근무 팁을 제공합니다.",
    keywords: ["아침 햇빛", "수면 질", "서카디언 리듬", "교대근무 전환", "불면 개선", "라이트박스"],
    alternates: { canonical: "https://nicewomen.kr/blog/morning-sunlight-sleep" },
};

export default function MorningSunlightSleepPost() {
    const tips = [
        { title: "기상 30분 내 10~15분 걷기", detail: "자외선 차단제를 바르되, 눈에는 자연광을 직접 받아 멜라토닌 분해를 돕습니다." },
        { title: "점심 5~10분 광노출", detail: "실내 근무일수록 점심에 햇빛을 받아 오후 졸림과 야간 입면 지연을 줄입니다." },
        { title: "저녁 조도 낮추기", detail: "취침 2시간 전 50~100 lux 이하로 줄이고, 블루라이트 노출을 최소화합니다." },
    ];

    const faq = [
        { q: "曺흐린 날에도 효과가 있나요?", a: "밝기가 충분히 밝습니다. 흐린 날 야외는 실내보다 5~10배 더 밝습니다." },
        { q: "실내 조명으로 대체 가능할까요?", a: "일반 조명은 300~500 lux로 부족합니다. 필요 시 10,000 lux 라이트 박스를 사용하세요." },
        { q: "몇 시까지 카페인을 마셔도 될까요?", a: "민감하면 오후 1~2시 이후 중단하세요. 서카디언 수면 가이드도 함께 참고하세요." },
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        아침 햇빛 노출로 수면 질 올리는 법
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
                        기상 직후 햇빛 노출은 내부 시계를 리셋해 밤에 더 빨리 잠들게 돕습니다.
                        오전·점심·저녁 조도를 나눠 관리하면 교대근무 전환이나 늦잠 습관 개선에도 효과적입니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">아침</p>
                                    <p>기상 30분 내 야외 빛 10~15분 → 멜라토닌 분해·코르티솔 정렬</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">점심</p>
                                    <p>5~10분 산책 → 오후 졸림 감소, 야간 입면 지연 예방</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">저녁</p>
                                    <p>취침 2h 전 조도 50~100 lux, 블루라이트 최소화</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">하루 빛 노출 플랜</h2>
                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <SunMedium className="w-5 h-5 text-amber-600" />
                                    아침(기상 후 30분 내)
                                </h3>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    10~15분 가벼운 걷기. 선글라스는 잠시 벗고 자연광을 눈으로 받되, 피부는 자외선 차단제를 사용하세요.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-600" />
                                    점심(근무 중 5~10분)
                                </h3>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    흐린 날에도 실내보다 밝습니다. 간단한 계단 오르기나 주변 걷기로 오후 졸림을 줄입니다.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Moon className="w-5 h-5 text-indigo-600" />
                                    저녁(취침 2시간 전)
                                </h3>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    조명을 따뜻한 색 온도, 낮은 밝기로 전환하고 스크린타임은 블루라이트 필터·야간모드를 켭니다.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="actions" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">오늘 바로 할 것</h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>기상 알람 옆에 운동화 두기 → 10분 산책 바로 실행</li>
                            <li>점심 캘린더에 10분 산책 예약 → 회의와 충돌 방지</li>
                            <li>취침 2시간 전 집안 조명 30~50%로 낮추기</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">자주 묻는 질문</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-amber-100">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-800 text-base leading-relaxed">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">라이트 박스는 어떻게?</p>
                                <p className="text-gray-800 text-base leading-relaxed">10,000 lux 제품을 아침 20~30분 사용, 눈과 40~60cm 거리. 밤에는 사용하지 않습니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">교대근무 전환 시?</p>
                                <p className="text-gray-800 text-base leading-relaxed">근무 시작 3일 전부터 취침/기상을 60~90분씩 이동하고, 새 스케줄의 아침에 강한 빛 노출을 맞추세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 루틴 점검하고 카페인 컷오프 설정하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 테스트와 카페인 컷오프 계산기로 오늘 밤 수면을 준비하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 바로가기 →
                            </Button>
                        </Link>
                        <Link href="/tools/hormone">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                호르몬 밸런스 테스트 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.cdc.gov/niosh/emres/light-intervention.html" className="underline text-white">CDC NIOSH Light Intervention</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


