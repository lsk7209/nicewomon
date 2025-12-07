import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Activity, Heart } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "생리 주기별 운동 강도 조절법 | 나이스우먼 블로그",
    description: "난포기·배란기·황체기별로 운동 강도와 종류를 조정해 에너지와 부상을 관리하는 방법을 안내합니다.",
    keywords: ["생리 주기", "운동 강도", "황체기", "난포기", "여성 운동"],
    alternates: { canonical: "https://nicewomen.kr/blog/menstrual-cycle-training" },
};

export default function MenstrualCycleTrainingPost() {
    const tocItems = [
        { id: "why", label: "주기별로 나누는 이유" },
        { id: "plan", label: "주기별 운동 가이드" },
        { id: "tips", label: "부상·피로 관리 팁" },
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>여성 운동</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        생리 주기별 운동 강도 조절법
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.05</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        호르몬과 체온 변화에 맞춰 강도를 조절하면 퍼포먼스와 회복이 모두 좋아집니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 주기별로 나눌까?</h2>
                            <p className="text-gray-700">난포기는 에너지와 회복이 좋은 시기, 황체기는 체온·피로가 올라가니 강도 조절이 필요합니다.</p>
                        </section>

                        <section id="plan" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">주기별 운동 가이드</h2>
                            <Card className="border-l-4 border-rose-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>난포기(월경 직후~배란 전): 근력/인터벌 강도↑</p>
                                    <p>배란기: 회복성 유산소·중강도 근력, 수분·전해질 보충</p>
                                    <p>황체기: 저강도 근력, 걷기/필라테스, 수면·영양에 집중</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="tips" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">부상·피로 관리 팁</h2>
                            <Card className="border-l-4 border-rose-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 황체기에는 스트레칭·코어 안정화로 보강</p>
                                    <p>• 철분·단백질·마그네슘 섭취 확인</p>
                                    <p>• 카페인 컷오프, 수면 7~8h 확보</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">내 컨디션 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">호르몬 테스트와 스트레스 테스트로 오늘의 강도를 정하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                호르몬 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

