import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Coffee, AlertTriangle, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "카페인 감수성 자가 체크: 컷오프 시간 찾기 | 나이스우먼 블로그",
    description: "입면 지연, 야간 각성, 심박 변화로 카페인 민감도를 추정하고 컷오프 시간을 정하는 방법.",
    keywords: ["카페인 감수성", "카페인 컷오프", "불면", "심박수", "수면 위생"],
    alternates: { canonical: "https://nicewomen.kr/blog/caffeine-sensitivity-check" },
};

export default function CaffeineSensitivityCheckPost() {
    const signs = [
        "오후 카페인 후 입면 지연이 30분 이상 증가",
        "심박수/두근거림, 손 떨림이 느껴질 때",
        "밤중 각성이 늘고 꿈이 더 선명해짐",
    ];

    const steps = [
        { title: "1주일 기록", detail: "카페인 섭취 시간, 양(샷/컵), 수면 시작/각성 시간을 기록합니다." },
        { title: "컷오프 실험", detail: "하루는 오후 1시, 다음날은 오후 2시 컷오프 등 1시간 단위로 미룹니다." },
        { title: "민감도 분류", detail: "입면 지연·각성 증가가 없는 가장 늦은 컷오프 시간을 개인 기준으로 삼습니다." },
    ];

    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

            <header className="mb-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                    <span>수면</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    카페인 감수성 자가 체크: 컷오프 시간 찾기
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
                    카페인 반감기는 개인차가 큽니다. 수면·심박 변화를 기록하고 컷오프 실험을 통해
                    스스로 민감도를 분류하면 수면의 질을 지킬 수 있습니다.
                </p>
            </header>

            <ContentWithToc>
                <section id="summary" className="bg-white border border-emerald-100 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">민감도 신호</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {signs.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                </section>

                <section id="steps" className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">컷오프 찾기 3단계</h2>
                    {steps.map((step) => (
                        <Card key={step.title} className="border border-emerald-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-emerald-600" />
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section id="timing" className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">추천 컷오프 가이드</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>민감형: 오후 12~1시</li>
                        <li>보통형: 오후 2~3시</li>
                        <li>둔감형: 오후 4시 이전 (그래도 취침 8시간 전 중단 권장)</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                        늦은 오후 카페인 후 입면 지연이 없더라도, 각성도와 심박 증가가 있으면 컷오프를 앞당기세요.
                    </p>
                </section>

                <section id="faq" className="space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                    <Card className="border border-emerald-100">
                        <CardContent className="pt-5">
                            <p className="font-semibold text-gray-900 mb-1">디카페인도 영향을 줄까요?</p>
                            <p className="text-gray-700 text-sm">잔여 카페인이 2~5mg 있을 수 있습니다. 민감하면 저녁에는 허브티로 대체하세요.</p>
                        </CardContent>
                    </Card>
                    <Card className="border border-emerald-100">
                        <CardContent className="pt-5">
                            <p className="font-semibold text-gray-900 mb-1">운동 전 카페인은?</p>
                            <p className="text-gray-700 text-sm">저녁 운동이라면 섭취를 절반으로 줄이거나, 취침 8시간 이전 운동으로 조정하세요.</p>
                        </CardContent>
                    </Card>
                </section>
            </ContentWithToc>

            <section className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">내 컷오프 시간 계산하고 수면 점수 확인</h2>
                <p className="text-lg mb-8 opacity-90">
                    카페인 컷오프 계산기와 수면 테스트로 민감도를 수치화해 보세요.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/tools/caffeine-cutoff-calculator">
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                            컷오프 계산기 →
                        </Button>
                    </Link>
                    <Link href="/tools/sleep">
                        <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                            수면 테스트 →
                        </Button>
                    </Link>
                </div>
                <p className="text-sm mt-4 opacity-80">
                    외부 참고: <Link href="https://www.cdc.gov/sleep/about_sleep/how_much_sleep.html" className="underline text-white">CDC Sleep & Caffeine</Link>
                </p>
            </section>
            </article>
        </div>
    );
}


