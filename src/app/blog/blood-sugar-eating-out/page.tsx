import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Utensils, Activity, Salad } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "야근·회식 많은 날, 혈당 스파이크 줄이는 외식 주문법 | 나이스우먼 블로그",
    description: "국물·탄수 위주 식사에서 혈당 급등을 줄이는 순서, 양, 사이드 선택 팁을 정리합니다.",
    keywords: ["혈당", "외식", "회식", "저GI", "탄수화물"],
    alternates: { canonical: "https://nicewomen.kr/blog/blood-sugar-eating-out" },
};

export default function BloodSugarEatingOutPost() {
    const rules = [
        "순서: 샐러드/단백질 → 밥/면 → 소스·국물 최소",
        "양: 밥은 반공기, 국물은 1~2스푼 맛만",
        "음료: 당 함유 음료 대신 탄산수/무가당 차",
        "속도: 15분 이상 천천히, 젓가락/포크로 씹는 횟수 늘리기",
    ];

    const swaps = [
        { title: "국물 많은 메뉴", tip: "국물은 최소화, 건더기 위주. 면 대신 밥 소량." },
        { title: "튀김/전/야식", tip: "튀김은 같이 주문해도 덜어내고 채소 곁들이기, 공깃밥은 반." },
        { title: "회식 고기", tip: "고기+채소 랩으로 먹고, 양념 대신 소금/후추, 탄산음료 대신 탄산수." },
    ];

    const tocItems = [
        { id: "rules", label: "기본 4원칙" },
        { id: "swaps", label: "메뉴별 스왑" },
        { id: "habits", label: "혈당 낮추는 습관" },
    ];

    return (
        <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        야근·회식 많은 날, 혈당 스파이크 줄이는 외식 주문법
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>7분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        회식·야근이 잦을 때에도 혈당 급등을 막는 주문·식사 순서를 간단히 정리했습니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="rules" className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-teal-600" />
                            기본 4원칙
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            {rules.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="swaps" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Salad className="w-6 h-6 text-teal-600" />
                            메뉴별 스왑
                        </h2>
                        {swaps.map((swap) => (
                            <Card key={swap.title} className="border-l-4 border-teal-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{swap.title}</p>
                                    <p className="text-gray-700 text-sm">{swap.tip}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="habits" className="bg-teal-50 border border-teal-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            혈당을 낮추는 사소한 습관
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>식후 10~15분 가벼운 걷기</li>
                            <li>식사 전 물 1컵, 과식 방지</li>
                            <li>소스는 찍먹으로 양 줄이기</li>
                        </ul>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">혈당 리스크 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        영양소 결핍 분석기로 식습관과 증상을 함께 체크해 보세요.
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

