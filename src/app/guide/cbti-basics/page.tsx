import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Moon, Brain, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "불면 CBT-I 핵심 요약 가이드 | 나이스우먼",
    description: "자극조절, 수면 제한, 인지 재구성, 수면 위생으로 구성된 CBT-I 핵심을 5분 안에 요약했습니다.",
    keywords: ["CBT-I", "불면 치료", "수면 제한", "자극조절", "수면 위생"],
    alternates: { canonical: "https://nicewomen.kr/guide/cbti-basics" },
};

export default function CbtiBasicsGuide() {
    const steps = [
        { title: "자극조절", detail: "잠자리는 수면/성생활만, 누워 깨어있기 15분 넘으면 일어나기." },
        { title: "수면 제한", detail: "실제 수면 시간 기반으로 취침·기상 시간을 제한해 수면 압력을 높임." },
        { title: "인지 재구성", detail: "‘또 못 자면?’ 같은 자동 사고를 ‘졸리면 잔다’로 교체." },
        { title: "수면 위생", detail: "카페인 컷오프, 규칙적 기상, 저녁 조도 낮추기, 침실 시원·어둡게." },
    ];

    const faq = [
        { q: "얼마나 걸리나요?", a: "일반적으로 4~8주. 첫 1~2주간 졸림이 증가할 수 있습니다." },
        { q: "낮잠은?", a: "가능하면 피하고, 필요 시 20분 이하로 오후 3시 이전에 제한하세요." },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        불면 CBT-I 핵심 요약 가이드
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
                        CBT-I는 습관과 사고를 함께 조정하는 표준 불면 치료법입니다.
                        핵심 모듈을 짧게 정리해 바로 적용할 수 있도록 구성했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-blue-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">한눈에 보기</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>자극조절: 침대=수면, 깨어 있으면 일어나기</li>
                            <li>수면 제한: 실제 수면 기준 취침·기상 시간 제한</li>
                            <li>인지 재구성: “못 자면 망한다” → “피곤해도 버틸 수 있다”</li>
                            <li>수면 위생: 컷오프, 조도, 온도, 스크린 관리</li>
                        </ul>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">4가지 핵심 모듈</h2>
                        {steps.map((step) => (
                            <Card key={step.title} className="border border-blue-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <ListChecks className="w-5 h-5 text-blue-600" />
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-blue-100">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-700 text-sm">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하고 CBT-I 실천 계획 받기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 테스트와 컷오프 계산기로 맞춤 수면 계획을 시작하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/blog/caffeine-sensitivity-check">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                카페인 컷오프 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.clevelandclinic.org/health/articles/12119-insomnia" className="underline text-white">Cleveland Clinic CBT-I</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


