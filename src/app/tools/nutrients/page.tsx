import { Metadata } from "next";
import Link from "next/link";
import { Pill, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "영양소 결핍 분석기 - 증상으로 찾는 부족한 영양소",
    description: "피곤하고 머리카락이 빠지나요? 증상 기반으로 결핍 가능성 높은 영양소를 찾고 섭취 가이드를 받아보세요. 무료 3분 테스트.",
    keywords: ["영양소 결핍", "비타민 부족", "미네랄", "철분", "마그네슘", "비타민D", "영양제", "건강 보조제"],
    alternates: { canonical: "https://nicewomen.kr/tools/nutrients" },
};

export default function NutrientDeficiencyIntro() {
    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-xl">🥗</span>
                        <span>영양 상태 체크</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-orange-600">영양소 결핍</span>
                        <br />
                        지금 확인하세요
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "피곤하고 머리카락이 많이 빠져요"
                        <br />
                        <strong className="text-gray-800">부족한 영양소를 찾아드려요</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Link href="/tools/nutrients/test">
                            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                무료로 3분 테스트 시작하기 →
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 pt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-orange-600" />
                            <span>5,500+ 분이 테스트했어요</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-600" />
                            <span>영양학 연구 기반</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        영양소 결핍이 왜 생길까요?
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            현대인은 <strong className="text-orange-600">불규칙한 식사, 가공식품 섭취, 스트레스</strong> 등으로
                            필수 영양소가 부족하기 쉬워요.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            특히 <strong className="text-orange-600">여성</strong>은 생리, 임신, 갱년기 등으로 인해
                            철분, 칼슘, 비타민 D 등이 부족해지기 쉬워요.
                        </p>

                        <div className="bg-orange-50 p-6 rounded-xl mt-6">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Pill className="w-5 h-5 text-orange-600" />
                                이런 증상이 있다면 영양소 결핍일 수 있어요
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span>만성 피로가 있어요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span>머리카락이 많이 빠져요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span>손톱이 잘 부러져요</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span>근육 경련이 자주 일어나요</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        5가지 증상으로 부족한 영양소를 찾고 섭취 가이드를 받아보세요
                    </p>
                    <Link href="/tools/nutrients/test">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석하기 →
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
