import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, HeartPulse, Droplet, Utensils } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "철분 부족 체크리스트: 피로·탈모·어지럼이 반복될 때 | 나이스우먼 블로그",
    description: "가임기 여성에게 흔한 철 결핍을 자가 체크하고 식단·보충제 타이밍을 정리합니다.",
    keywords: ["철분", "빈혈", "피로", "탈모", "영양"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-deficiency-checklist" },
};

export default function IronDeficiencyChecklistPost() {
    const checklist = [
        "쉽게 숨이 차거나 맥박이 빨라진다",
        "탈모가 늘고 손톱이 잘 부러진다",
        "얼굴이 창백하고 어지럼이 잦다",
        "찬 음식을 먹으면 입안이 따갑다",
        "생리량이 많거나 주기가 길다",
    ];

    const foodTips = [
        "붉은 살코기·간·조개류 + 비타민C 식품(피망·감귤)과 함께",
        "커피·차는 철분 섭취 전후 1~2시간 피하기",
        "식사 간격을 규칙적으로 유지하고 단백질을 충분히",
    ];

    const tocItems = [
        { id: "checklist", label: "자가 체크 5문항" },
        { id: "food", label: "식사 전략" },
        { id: "clinic", label: "병원 방문 기준" },
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
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        철분 부족 체크리스트: 피로·탈모·어지럼이 반복될 때
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
                        철 결핍은 피로, 탈모, 집중력 저하의 숨은 원인일 수 있습니다. 간단한 체크리스트와 식사·보충 팁을 정리했습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-10">
                    <section id="checklist" className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <HeartPulse className="w-6 h-6 text-amber-600" />
                            자가 체크 5문항
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {checklist.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-amber-700">2개 이상 해당한다면 식이·생활습관을 조정하고 필요 시 검사를 고려하세요.</p>
                    </section>

                    <section id="food" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-amber-600" />
                            식사 전략
                        </h2>
                        <Card className="border-l-4 border-amber-500">
                            <CardContent className="pt-5 space-y-2">
                                {foodTips.map((tip) => (
                                    <p key={tip} className="text-gray-700 text-sm">{tip}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <section id="clinic" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-amber-900">언제 병원에 갈까?</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>호흡곤란, 흉통, 심한 어지럼이 동반될 때</li>
                            <li>생리량 증가가 지속될 때</li>
                            <li>자가 보충 후에도 2~4주 내 호전이 없을 때</li>
                        </ul>
                        <p className="text-xs text-amber-800">* 보충제 복용은 의사 상담 후 시작하세요.</p>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">나의 영양 결핍 가능성 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        영양소 결핍 분석기로 증상을 체크하고 맞춤 가이드를 받아보세요.
                    </p>
                    <Link href="/tools/nutrients">
                        <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석기 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

