import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Activity, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "혈당 관리 가이드 | 나이스우먼",
    description: "식사 순서, 간격, 저GI 식품으로 혈당 스파이크를 줄이는 방법을 안내합니다.",
    keywords: ["혈당", "저GI", "식사 순서", "간식", "여성 건강"],
    alternates: { canonical: "https://nicewomen.kr/guide/blood-sugar" },
};

export default function BloodSugarGuidePage() {
    return (
        <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Utensils className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        혈당 관리 가이드
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        식사 순서와 간격, 저GI 식품 선택으로 혈당 스파이크를 줄이고 에너지 변동을 최소화하세요.
                    </p>
                </header>

                <div className="prose prose-lg max-w-none space-y-10">
                    <section className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-teal-600" />
                            식사 원칙 4가지
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>순서: 채소/단백질 → 탄수화물 → 소스/국물 최소</li>
                            <li>간격: 3~4시간, 과도한 공복은 간식(단백질+섬유)으로 보완</li>
                            <li>양: 밥은 반공기, 국물은 맛만</li>
                            <li>속도: 15분 이상 천천히 씹기</li>
                        </ul>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-teal-500">
                            <CardHeader>
                                <CardTitle>저GI 간식 아이디어</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-gray-700 space-y-1">
                                <p>그릭요거트 + 견과류</p>
                                <p>삶은 달걀 + 방울토마토</p>
                                <p>치즈 + 사과/배 소량</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-emerald-500">
                            <CardHeader>
                                <CardTitle>외식 시 주문 팁</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-gray-700 space-y-1">
                                <p>샐러드/반찬 먼저, 밥·면은 소량</p>
                                <p>양념 대신 간장/소금, 튀김은 덜어내기</p>
                                <p>당류 음료 대신 탄산수·무가당 차</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="bg-teal-50 border border-teal-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            식후 혈당을 낮추는 움직임
                        </h3>
                        <p className="text-gray-700 text-sm">
                            식후 10~15분 걷기, 가벼운 스쿼트/레그레이즈 2~3세트는 포도당 흡수를 돕습니다. 장시간 앉아있다면 1시간마다 3분 움직이기.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl shadow p-6 border border-teal-100 space-y-2">
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            주의해야 할 때
                        </h3>
                        <p className="text-gray-700 text-sm">
                            임신성 당뇨, 당뇨 약물 복용, 만성 질환이 있다면 식단 변경 전에 의료진 상담이 필요합니다.
                        </p>
                    </section>
                </div>

                <section className="mt-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">식습관·영양 상태 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        영양소 결핍 분석기로 현재 식습관과 증상을 함께 확인하세요.
                    </p>
                    <Link href="/tools/nutrients">
                        <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석기 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

