import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Smartphone, Coffee, AlarmClock, Activity, Utensils } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "수면을 망치는 5가지 습관과 교정법 | 나이스우먼 블로그",
    description: "야근, 늦은 카페인, 스크린타임을 줄이고 바로 적용할 수 있는 밤 루틴을 안내합니다.",
    keywords: ["수면 위생", "불면증", "카페인", "스크린타임", "수면 습관"],
    alternates: { canonical: "https://nicewomen.kr/blog/sleep-habit-fixes" },
};

export default function SleepHabitFixesPost() {
    const habits = [
        { title: "늦은 카페인", tip: "민감도 높다면 오후 1~2시 컷오프, 디카페인·허브차로 전환." },
        { title: "취침 직전 스크린", tip: "취침 60분 전 블루라이트 차단, 종이책/저조도 조명 사용." },
        { title: "불규칙 취침·기상", tip: "기상 시간을 고정하고 주말 편차 ±30분 이내로 유지." },
        { title: "늦은 저녁/야식", tip: "취침 3시간 전 식사 완료, 단백질/섬유질 위주로 포만감 유지." },
        { title: "운동 타이밍 오류", tip: "격한 운동은 취침 3시간 전까지, 저녁엔 가벼운 스트레칭/산책." },
    ];

    const faq = [
        { q: "주말에 늦잠 자도 될까?", a: "기상 시간 편차를 30분 내로 유지하면 생체리듬 교란을 줄일 수 있습니다." },
        { q: "커피를 끊기 힘들다면?", a: "아침/오전으로 몰아 마시고, 오후에는 디카페인·루이보스·보리차로 대체하세요." },
        { q: "스마트폰 대신 무엇을?", a: "저조도 스탠드 아래 종이책, 짧은 저널링, 가벼운 스트레칭이 좋습니다." },
    ];

    const tocItems = [
        { id: "habits", label: "수면을 망치는 5가지" },
        { id: "today", label: "오늘 바로 할 것" },
        { id: "faq", label: "자주 묻는 질문" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        수면을 망치는 5가지 습관과 교정법
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        깨어있는 시간을 늘리는 습관이 수면 압력을 낮추고 멜라토닌 분비를 방해합니다.
                        가장 영향력이 큰 5가지를 골라 실천 가능한 대안을 제안합니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-10">
                    <section id="habits" className="space-y-4">
                        {habits.map((item, idx) => (
                            <Card key={item.title} className="border-l-4 border-indigo-400">
                                <CardContent className="pt-5 space-y-2">
                                    <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                                        {idx === 0 && <Coffee className="w-5 h-5" />}
                                        {idx === 1 && <Smartphone className="w-5 h-5" />}
                                        {idx === 2 && <AlarmClock className="w-5 h-5" />}
                                        {idx === 3 && <Utensils className="w-5 h-5" />}
                                        {idx === 4 && <Activity className="w-5 h-5" />}
                                        <span>{item.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item.tip}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="today" className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-indigo-900">오늘 바로 할 것 3가지</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>카페인 오후 1~2시 이후 중단</li>
                            <li>취침 60분 전 스마트폰·노트북 치우기, 종이책으로 대체</li>
                            <li>기상 시간을 1주간 동일하게 유지</li>
                        </ul>
                    </section>

                    <section id="faq">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
                        <div className="space-y-3">
                            {faq.map((item) => (
                                <Card key={item.q} className="border border-gray-100">
                                    <CardContent className="pt-5">
                                        <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                        <p className="text-gray-700 text-sm">{item.a}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">나의 수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        3분 수면 질 테스트로 현재 습관을 점검하고 맞춤 솔루션을 받으세요.
                    </p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

