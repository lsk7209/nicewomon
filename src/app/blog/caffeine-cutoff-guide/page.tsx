import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Coffee, AlarmClock, HeartPulse } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "카페인 컷오프: 오후 몇 시에 끊어야 할까? | 나이스우먼 블로그",
    description: "카페인 반감기, 개인 민감도, 수면 위생에 맞춘 시간대별 대체 음료를 제안합니다.",
    keywords: ["카페인", "수면 위생", "컷오프", "커피", "불면"],
    alternates: { canonical: "https://nicewomen.kr/blog/caffeine-cutoff-guide" },
};

export default function CaffeineCutoffGuidePost() {
    const tips = [
        "민감한 사람은 오후 1~2시, 보통은 오후 3시 전 컷오프.",
        "철분·마그네슘 흡수 방해를 줄이려면 식사 전후 1시간은 피하기.",
        "카페인 리셋 주간: 하루 1잔→디카페인/허브차로 단계적 전환.",
    ];

    const replacements = [
        { title: "오전 대체", detail: "디카페인 라떼, 우엉차, 루이보스" },
        { title: "점심 후", detail: "보리차, 옥수수수염차, 레몬워터" },
        { title: "저녁", detail: "카모마일, 패션플라워, 글리신·마그네슘" },
    ];

    const tocItems = [
        { id: "cutoff", label: "컷오프 원칙" },
        { id: "replacements", label: "대체 음료" },
        { id: "sensitivity", label: "민감도 테스트" },
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        카페인 컷오프: 오후 몇 시에 끊어야 할까?
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        카페인의 반감기는 3~7시간입니다. 취침 시간이 빠를수록, 민감할수록 컷오프를 앞당겨야 멜라토닌 분비를 지킬 수 있습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="cutoff" className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Coffee className="w-6 h-6 text-amber-600" />
                            핵심 컷오프 원칙
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {tips.map((tip) => (
                                <li key={tip}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="replacements" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <AlarmClock className="w-6 h-6 text-amber-600" />
                            시간대별 대체 음료
                        </h2>
                        {replacements.map((item) => (
                            <Card key={item.title} className="border-l-4 border-amber-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{item.title}</p>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="sensitivity" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                            <HeartPulse className="w-5 h-5" />
                            민감도 셀프 테스트
                        </h3>
                        <p className="text-gray-700 text-sm">
                            오후 3시 이후 카페인을 마셨을 때 입면 지연(30분+), 심박수 증가, 밤중 각성이 있으면 민감도로 판단하고 컷오프를 더 앞당기세요.
                        </p>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 질 테스트로 현재 습관을 점검하고 개인 컷오프를 잡아보세요.
                    </p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

