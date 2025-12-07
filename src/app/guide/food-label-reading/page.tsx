import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ScanBarcode, PercentCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "식품 라벨 읽기: 당·나트륨·지방 빠르게 확인 | 나이스우먼",
    description: "총 당류와 첨가당, 나트륨 1일 기준, 포화·트랜스지방을 1분 안에 점검하는 라벨 읽기 체크리스트.",
    keywords: ["식품 라벨", "나트륨", "당류", "포화지방", "트랜스지방"],
    alternates: { canonical: "https://nicewomen.kr/guide/food-label-reading" },
};

export default function FoodLabelReadingGuide() {
    const checks = [
        "총 내용량 대비 1회 제공량이 너무 작지 않은지",
        "당류: 총 당류와 첨가당 표기, 10g 이상이면 주의",
        "나트륨: 1일 기준 5g 소금(약 2g 나트륨) 이내인지",
        "포화지방/트랜스지방: 포화지방 1g↑ 제품, 트랜스 0g 확인",
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        식품 라벨 읽기: 당·나트륨·지방 빠르게 확인
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        가공식품과 외식이 많은 환경에서 라벨을 빠르게 읽는 법만 익혀도
                        혈당·혈압·체중 관리에 큰 차이가 납니다. 1분 체크리스트로 정리했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="checklist" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">1분 체크리스트</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {checks.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="daily" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">1일 기준치 감 잡기</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <PercentCircle className="w-5 h-5 text-amber-600" />
                                    당류·나트륨·지방
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    당류: 하루 25g 내외(WHO 권고), 나트륨: 2g(소금 5g) 미만, 포화지방: 총열량의 10% 미만,
                                    트랜스지방: 0g 선호.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="warnings" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            주의 라벨 신호
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>1회 제공량이 과도하게 작아 총량이 숨겨진 경우</li>
                            <li>당류 10g+ 간식, 나트륨 600mg+ 컵라면류</li>
                            <li>포화지방 5g+ 버터/크림 기반 제품</li>
                        </ul>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">섭취 기록하고 나트륨 점수 계산하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        나트륨 점수 도구와 식단 가이드로 라벨 선택을 빠르게 개선하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sodium-intake-score">
                            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                나트륨 점수 계산 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


