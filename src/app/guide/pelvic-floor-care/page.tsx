import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ShieldCheck, Activity, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "골반저 근육 케어 가이드 | 나이스우먼",
    description: "요실금·골반저 약화 예방을 위한 10분 루틴, 호흡법, 주의사항을 정리했습니다.",
    keywords: ["골반저", "요실금", "케겔", "골반저 운동", "여성 건강"],
    alternates: { canonical: "https://nicewomen.kr/guide/pelvic-floor-care" },
};

export default function PelvicFloorCareGuide() {
    const steps = [
        { title: "올바른 수축 감각 찾기", detail: "소변을 멈추는 느낌으로 질·항문을 동시에 3초 수축, 3초 이완." },
        { title: "10분 루틴", detail: "3초 수축/3초 이완 10회 × 3세트, 서서·앉아서·누워서 교차." },
        { title: "호흡과 자세", detail: "들이쉴 때 이완, 내쉴 때 수축. 복부 힘 과도 사용, 엉덩이·허벅지 긴장 주의." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "steps", label: "10분 루틴" },
        { id: "progress", label: "난이도 올리기" },
        { id: "caution", label: "주의사항" },
        { id: "reminder", label: "알림 팁" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>건강</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        골반저 근육 케어 가이드
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
                        골반저 약화는 요실금, 허리 통증, 성기능 저하로 이어질 수 있습니다.
                        10분 루틴과 호흡, 알림 설정 방법을 정리했습니다.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-2">
                        <p className="text-sm font-semibold text-rose-700">핵심 요약</p>
                        <p className="text-gray-800">
                            올바른 수축 감각(질·항문 동시 수축 3초/이완 3초), 하루 10분 루틴, 호흡 동기화(내쉴 때 수축),
                            알림 3회 설정이 꾸준함을 좌우합니다. 통증·출혈 시 중단하고 진료를 권장합니다.
                        </p>
                    </section>

                    <section id="steps" className="bg-white border border-rose-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">10분 루틴</h2>
                        <ul className="space-y-2 text-gray-700">
                            {steps.map((s) => (
                                <li key={s.title} className="flex flex-col gap-1">
                                    <span className="font-semibold text-gray-900">{s.title}</span>
                                    <span className="text-sm">{s.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="progress" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-rose-600" />
                            난이도 올리기 (2~4주 후)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                            <li>수축 5초/이완 5초로 증가, 10회 × 3세트</li>
                            <li>자세 다양화: 서서 한쪽 다리 살짝 들기, 브리지 자세</li>
                            <li>코어·둔근 약화 시, 플랭크·힙힌지 2~3세트 추가</li>
                        </ul>
                    </section>

                    <section id="caution" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">주의사항</h2>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-2">
                                <p className="text-gray-700 text-sm">
                                    허벅지·엉덩이·복부에 힘을 과도하게 주지 않고, 통증이나 출혈이 있으면 중단하고 상담하세요.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="reminder" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <BellRing className="w-5 h-5 text-rose-600" />
                            알림 설정 팁
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>아침·점심·저녁 3회 캘린더/타이머 설정</li>
                            <li>책상/침실에 짧은 메모 부착</li>
                            <li>앉기 전/후 1세트, 샤워 전 1세트 습관화</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 임신 중에도 할 수 있나요?</p>
                            <p>A. 일반적으로 안전하나, 고위험 임신/합병증이 있다면 반드시 의료진과 상의 후 진행하세요.</p>
                            <p className="font-semibold">Q. 효과는 언제 느껴질까?</p>
                            <p>A. 4~8주 꾸준히 하면 기침·재채기 시 요실금 개선을 느끼는 경우가 많습니다. 루틴과 알림을 유지하세요.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">골반저 알림과 점수 도구로 꾸준히</h2>
                    <p className="text-lg mb-8 opacity-90">
                        골반저 리마인더와 스트레스 테스트로 루틴을 유지하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/pelvic-floor-reminder">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                알림 설정 →
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


