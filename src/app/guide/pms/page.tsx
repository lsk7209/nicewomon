import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Moon, Utensils } from "lucide-react";

export const metadata: Metadata = {
    title: "PMS/PMDD 관리 가이드 | 나이스우먼",
    description: "주기별 증상 완화, 운동·영양·멘탈 루틴을 안내합니다.",
    keywords: ["PMS", "PMDD", "월경", "기분", "영양"],
    alternates: { canonical: "https://nicewomen.kr/guide/pms" },
};

export default function PmsGuidePage() {
    const phases = [
        { title: "난포기 (월경 직후 1~2주)", tips: ["규칙적 운동(근력+유산소)", "철분·단백질 충분히", "카페인 과다 피하기"] },
        { title: "황체기 (배란 후~월경 전)", tips: ["정제탄수·당류 줄이고 단백질/섬유 늘리기", "마그네슘·비타민B6 고려", "수면 7~8시간 확보"] },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        PMS/PMDD 관리 가이드
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        주기별로 나타나는 기분·통증·피로 변화를 줄이기 위한 생활 루틴을 정리했습니다.
                    </p>
                </header>

                <div className="prose prose-lg max-w-none space-y-10">
                    <section className="grid md:grid-cols-2 gap-6">
                        {phases.map((phase) => (
                            <Card key={phase.title} className="border-l-4 border-indigo-500 h-full">
                                <CardHeader>
                                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-1 text-sm text-gray-700">
                                    {phase.tips.map((tip) => (
                                        <p key={tip}>• {tip}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-indigo-600" />
                            식단 팁
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>정제탄수 대신 복합탄수(현미, 귀리)와 단백질을 함께</li>
                            <li>마그네슘(견과류, 녹색 채소), 비타민B6(계란, 바나나) 섭취</li>
                            <li>카페인·알코올은 컷오프 시간을 정해 수면을 지키기</li>
                        </ul>
                    </section>

                    <section className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                            <Brain className="w-5 h-5" />
                            기분 관리 루틴
                        </h3>
                        <p className="text-gray-700 text-sm">
                            10분 호흡·명상, 20분 걷기/스트레칭을 매일 반복하세요. 증상이 심한 날에는 일정·미팅을 최소화하고 휴식을 우선합니다.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl shadow p-6 border border-indigo-100 space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                            <Moon className="w-5 h-5" />
                            언제 진료를 받아야 할까?
                        </h3>
                        <p className="text-gray-700 text-sm">
                            일상 기능이 떨어질 정도의 우울·분노, 심한 통증, 불면이 2주 이상 지속된다면 산부인과/정신건강의학과 상담이 필요합니다.
                        </p>
                    </section>
                </div>

                <section className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">주기별 증상 자가진단</h2>
                    <p className="text-lg mb-8 opacity-90">
                        호르몬·수면·스트레스 테스트로 상태를 확인하고 맞춤 루틴을 받아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
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

