import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Moon, Brain, ListChecks, NotebookPen, Info } from "lucide-react";
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
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "plan", label: "핵심 모듈" },
        { id: "faq", label: "FAQ" },
        { id: "selfcheck", label: "자가 체크" },
    ];

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

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">한눈에 보기</h2>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>자극조절: 침대=수면, 15분 이상 깨어 있으면 일어나기</li>
                            <li>수면 제한: 실제 수면 기준 취침·기상 시간 설정(졸림 회복 시 점진 완화)</li>
                            <li>인지 재구성: “또 못 자면?” → “피곤해도 견디고, 졸리면 잔다”</li>
                            <li>수면 위생: 오후 카페인 컷오프, 낮은 조도, 시원·어두운 침실</li>
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
                                    <p className="text-gray-800 text-base leading-relaxed">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="selfcheck" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-blue-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>누워 깨어 있는 시간이 15분 이상 자주 이어진다</li>
                            <li>취침·기상 시간이 매일 크게 달라진다</li>
                            <li>오후 늦게까지 카페인을 마시거나, 잠자리에서 휴대폰을 오래 본다</li>
                        </ul>
                        <p className="text-sm text-blue-700">2점 이상이면 자극조절+수면 제한을 우선 적용하고, 컷오프·조도·온도·스크린 제한을 함께 묶어 2주간 실험하세요.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-blue-100">
                                <CardContent className="pt-5 space-y-1">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-800 text-base leading-relaxed">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                        <Card className="border border-blue-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">Q. 수면 제한을 언제 완화하나요?</p>
                                <p className="text-gray-800 text-base leading-relaxed">일주일 평균 수면 효율(침대에 있는 시간 대비 실제 수면)이 85~90% 이상이면 15~30분씩 취침 시간을 앞당기며 완화합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-blue-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">Q. 낮잠은 어느 정도 괜찮나요?</p>
                                <p className="text-gray-800 text-base leading-relaxed">가능하면 피하고, 필요 시 20분 이내·오후 3시 이전으로 제한하세요. 밤 수면 제한 단계에서는 낮잠을 중단하는 것이 효과적입니다.</p>
                            </CardContent>
                        </Card>
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


