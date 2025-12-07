import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, BatteryCharging, PauseCircle, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "번아웃 회복 3단계: 에너지·경계·리듬 | 나이스우먼 블로그",
    description: "과로·무기력에서 회복하기 위한 3단계 플랜: 에너지 리필, 업무·관계 경계 설정, 수면·운동 리듬 재정비.",
    keywords: ["번아웃", "회복", "스트레스", "경계 설정", "루틴"],
    alternates: { canonical: "https://nicewomen.kr/blog/burnout-recovery-steps" },
};

export default function BurnoutRecoveryStepsPost() {
    const steps = [
        { title: "에너지 리필", detail: "수면 7~8시간 우선, 카페인 오후 2시 컷, 당·지방 과잉 간식 줄이기." },
        { title: "경계 설정", detail: "업무 시간·알림 창 설정, 회의/응대 스크립트로 '잠시 후 답변'을 습관화." },
        { title: "리듬 회복", detail: "주 3회 20분 걷기+가벼운 근력, 주말 리커버리 데이, 10분 마음챙김." },
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
                        회복을 위해 에너지·경계·리듬을 단계적으로 재정비하세요.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-orange-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>수면·영양으로 에너지 회복, 오후 카페인 컷</li>
                            <li>알림·일정 경계 설정, 응답 지연 스크립트 사용</li>
                            <li>걷기+근력+마음챙김으로 리듬 재정비</li>
                        </ul>
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
                                    <p className="text-gray-700 text-sm leading-relaxed">{s.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="scripts" className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">알림·응답 스크립트</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>“지금 회의라 끝나면 확인할게요.”</li>
                            <li>“오늘은 응답이 느릴 수 있어요. 내일 오전까지 회신할게요.”</li>
                            <li>업무/개인 알림 분리, 집중 시간 2블록 확보</li>
                        </ul>
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


