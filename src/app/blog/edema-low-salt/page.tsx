import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Droplets, Salad, Activity } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "부종 잡는 저염·칼륨 전략 | 나이스우먼 블로그",
    description: "국물 많은 식단에서 염분을 줄이고 칼륨 섭취를 늘리는 실천 팁을 제공합니다.",
    keywords: ["부종", "저염", "칼륨", "순환", "부기"],
    alternates: { canonical: "https://nicewomen.kr/blog/edema-low-salt" },
};

export default function EdemaLowSaltPost() {
    const actions = [
        "국·찌개는 건더기 위주, 국물 3스푼 이내",
        "간식은 견과류·과일(바나나, 키위)로 칼륨 보충",
        "가공식품 라벨에서 나트륨 1회 섭취량 확인",
        "하루 30~40분 가벼운 걷기 + 종아리 스트레칭",
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "actions", label: "핵심 행동" },
        { id: "foods", label: "칼륨 식품" },
        { id: "routine", label: "순환 루틴" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        부종 잡는 저염·칼륨 전략
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
                        국물·김치·가공식품이 많은 식단에서 부종을 줄이는 실질적 저염·칼륨 전략을 정리했습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="summary" className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-2">
                        <p className="text-sm font-semibold text-emerald-700">핵심 요약</p>
                        <p className="text-gray-800">
                            하루 나트륨 2000mg 이하(소금 약 5g), 국물은 건더기 위주, 칼륨 식품을 곁들이고 걷기·종아리 펌핑으로
                            순환을 돕는 것이 부종 완화의 핵심입니다.
                        </p>
                    </section>

                    <section id="actions" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Droplets className="w-6 h-6 text-emerald-600" />
                            핵심 행동 4가지
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {actions.map((act) => (
                                <li key={act}>{act}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="foods" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Salad className="w-6 h-6 text-emerald-600" />
                            칼륨이 풍부한 식품
                        </h2>
                        <Card className="border-l-4 border-emerald-500">
                            <CardContent className="pt-5 text-gray-700 text-sm space-y-1">
                                <p>바나나, 키위, 아보카도, 시금치, 감자(찬물에 잠깐 담가 전분 제거 후 조리)</p>
                                <p className="text-emerald-800">신장 질환이 있다면 칼륨 섭취 전 전문의 상담이 필요합니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="routine" className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-emerald-700" />
                            순환을 돕는 루틴
                        </h3>
                        <p className="text-gray-700 text-sm">
                            식후 10분 걷기, 취침 전 종아리·발목 펌핑 스트레칭 5분. 장시간 앉아있다면 1시간마다 일어나 2~3분 걷기.
                        </p>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 저염 간을 어떻게 맞출까?</p>
                            <p>A. 소금 대신 허브·후추·레몬·식초를 활용하고, 국물 대신 건더기 위주로 먹으며 간장은 찍어 먹는 형태로 줄입니다.</p>
                            <p className="font-semibold">Q. 물은 줄여야 하나?</p>
                            <p>A. 대부분은 충분한 수분 섭취가 필요합니다. 물을 과도하게 제한하기보다 나트륨을 줄이고 움직임을 늘리는 편이 안전합니다.</p>
                        </div>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">부종·피로 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">
                        영양소 결핍 분석기로 식습관과 증상을 함께 확인해 보세요.
                    </p>
                    <Link href="/tools/nutrients">
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석기 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

