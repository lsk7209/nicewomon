import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Wind, Droplets, Moon } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "미세먼지 많은 날 호흡기·수면 관리 체크리스트 | 나이스우먼 블로그",
    description: "공기질 관리, 취침 전 세정, 가습·온도 설정까지 하루 체크리스트를 제공합니다.",
    keywords: ["미세먼지", "수면", "호흡기", "가습", "공기질"],
    alternates: { canonical: "https://nicewomen.kr/blog/fine-dust-sleep-care" },
};

export default function FineDustSleepCarePost() {
    const checklist = [
        "귀가 후 세안·코세척으로 미세먼지 제거",
        "HEPA 공기청정기 취침 1시간 전 가동",
        "습도 45~55%, 온도 20~22도로 맞추기",
        "침구·커튼 주기적 세탁, 침실 환기는 미세먼지 낮은 시간대 5분",
        "취침 2~3시간 전 가벼운 온수 샤워로 코막힘 완화",
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "checklist", label: "하루 체크리스트" },
        { id: "humid", label: "가습·온도 설정" },
        { id: "routine", label: "취침 전 루틴" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        미세먼지 많은 날 호흡기·수면 관리 체크리스트
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
                        호흡기가 민감한 날에도 깊은 잠을 잘 수 있도록 공기질·습도·온도를 관리하는 하루 플랜을 제공합니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="summary" className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-2">
                        <p className="text-sm font-semibold text-blue-700">핵심 요약</p>
                        <p className="text-gray-800">
                            귀가 후 세정, 취침 1시간 전 공기청정·가습 45~55%, 온도 20~22도, 취침 2~3시간 전 온수 샤워,
                            미세먼지 낮은 시간대 5분 환기가 기본입니다.
                        </p>
                    </section>

                    <section id="checklist" className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Wind className="w-6 h-6 text-blue-600" />
                            하루 체크리스트
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {checklist.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="humid" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Droplets className="w-6 h-6 text-blue-600" />
                            가습·온도 설정
                        </h2>
                        <Card className="border-l-4 border-blue-500">
                            <CardContent className="pt-5 text-gray-700 text-sm space-y-2">
                                <p>습도 45~55%가 가장 편안합니다. 너무 높으면 곰팡이, 너무 낮으면 코막힘과 각성이 늘어납니다.</p>
                                <p>온도는 20~22도로 설정하고, 공기청정기 필터 상태를 확인하세요.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="routine" className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                            <Moon className="w-5 h-5" />
                            취침 전 루틴
                        </h3>
                        <p className="text-gray-700 text-sm">
                            따뜻한 샤워로 코막힘을 완화하고, 침실 문을 닫아 외부 공기 유입을 줄입니다. 가볍게 스트레칭 후 바로 누워 깊은 호흡을 5세트 반복하세요.
                        </p>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 환기를 꼭 해야 하나요?</p>
                            <p>A. 실내 CO₂가 높아지면 졸림·두통이 생길 수 있습니다. 미세먼지 수치가 낮은 시간대에 3~5분 짧게 환기하세요.</p>
                            <p className="font-semibold">Q. 가습기 물은 얼마나 자주 교체?</p>
                            <p>A. 매일 물 교체·세척, 주 1회 살균 세척을 권장합니다. 필터 수명도 확인하세요.</p>
                        </div>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 질 테스트로 환경·습관을 점검하고 맞춤 팁을 받으세요.
                    </p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

