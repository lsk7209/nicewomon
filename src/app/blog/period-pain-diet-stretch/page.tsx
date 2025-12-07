import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Leaf, StretchHorizontal, Activity, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "생리통 완화 식단 + 10분 스트레칭 | 나이스우먼 블로그",
    description: "항염 식단과 10분 스트레칭으로 생리통을 완화하는 실천 가이드. 자가 체크, 하루 예시, 카페인·염분 관리 팁 포함.",
    keywords: ["생리통", "식단", "스트레칭", "항염 식품", "PMS", "자가 체크"],
    alternates: { canonical: "https://nicewomen.kr/blog/period-pain-diet-stretch" },
};

export default function PeriodPainDietStretchPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "diet", label: "완화 식단" },
        { id: "stretch", label: "10분 스트레칭" },
        { id: "dayplan", label: "하루 예시" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    const foods = [
        "오메가3: 연어, 고등어, 아마씨, 호두",
        "마그네슘·B군: 견과류, 두부, 녹색잎채소",
        "염분·과당·트랜스지방 줄이기, 카페인은 오후 초반 이전",
    ];

    const stretches = [
        "무릎 끌어안기 30초×2",
        "고양이-소 자세 10회",
        "누워서 골반 기울이기 10회",
        "햄스트링/둔근 스트레칭 각 30초",
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>PMS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">생리통 완화 식단 + 10분 스트레칭</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.07</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        항염 식품과 전해질 균형, 가벼운 10분 스트레칭을 병행하면 생리통을 완화하는 데 도움이 됩니다.
                        과도한 카페인·염분·당을 줄이고, 호흡과 함께 골반 근육을 부드럽게 풀어주세요.
                    </p>
                </header>

            <ContentWithToc items={tocItems}>
                <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">핵심 요약</h2>
                    <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">영양</p>
                                <p>오메가3·마그네슘·B군 ↑, 염분·과당·트랜스지방 ↓, 카페인 오후 초반 컷</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">스트레칭</p>
                                <p>10분 루틴(무릎 끌어안기, 골반 기울이기, 햄스트링/둔근 풀기)</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">자극 관리</p>
                                <p>가공식품·과염분·과당 줄이고 물/전해질 균형</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="diet" className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">완화 식단</h2>
                    <Card className="border border-rose-100">
                        <CardContent className="pt-5 space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Leaf className="w-5 h-5 text-emerald-600" />
                                추천 식품
                            </h3>
                                <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                                {foods.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                                <p className="text-sm text-gray-700">국물·가공식품, 당 함량이 높은 간식은 줄이고 물·전해질을 균형 있게 보충하세요.</p>
                        </CardContent>
                    </Card>
                </section>

                <section id="stretch" className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">10분 스트레칭</h2>
                    <Card className="border border-rose-100">
                        <CardContent className="pt-5 space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <StretchHorizontal className="w-5 h-5 text-rose-600" />
                                루틴
                            </h3>
                                <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                                {stretches.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                                <p className="text-sm text-gray-700">호흡을 길게 내쉬며 통증이 심한 동작은 강도를 낮추세요.</p>
                        </CardContent>
                    </Card>
                </section>

                    <section id="dayplan" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-rose-600" />
                            하루 예시
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>아침: 오트+견과+베리, 물 300ml, 카페인 1회</li>
                            <li>점심: 현미/퀴노아+생선/두부+잎채소, 짠 국물 최소화</li>
                            <li>오후: 카페인 컷, 따뜻한 물/전해질 소량, 스트레칭 5분</li>
                            <li>저녁: 소화 잘 되는 단백질+채소, 취침 3h 전 마감</li>
                            <li>취침 전: 10분 스트레칭+호흡, 온수 샤워/찜질팩(복부/허리)</li>
                        </ul>
                    </section>

                    <section id="selfcheck" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-rose-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>통증이 7/10 이상이거나 일상 기능 저하</li>
                            <li>카페인·염분·당 조절을 지키지 못한다</li>
                            <li>수면 6h 이하, 스트레스가 높다</li>
                        </ul>
                        <p className="text-sm text-rose-700">2점 이상이면 식단/스트레칭을 강화하고, 진통제 의존이 늘면 의료 상담을 권장합니다.</p>
                    </section>

                <section id="faq" className="space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                    <Card className="border border-rose-100">
                        <CardContent className="pt-5">
                            <p className="font-semibold text-gray-900 mb-1">진통제와 함께 먹어도 될까요?</p>
                            <p className="text-gray-700 text-sm">의사 지시에 따르되, 위가 불편하면 가벼운 식사와 함께 복용하세요.</p>
                        </CardContent>
                    </Card>
                    <Card className="border border-rose-100">
                        <CardContent className="pt-5">
                            <p className="font-semibold text-gray-900 mb-1">운동 강도는?</p>
                            <p className="text-gray-700 text-sm">통증이 낮을 때는 걷기·가벼운 요가, 통증이 크면 호흡과 스트레칭에 집중하세요.</p>
                        </CardContent>
                    </Card>
                </section>
            </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">PMS/생리통 점검하고 맞춤 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">PMS 체크와 호르몬 테스트로 증상을 기록하고 완화 루틴을 받아보세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/pms">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                PMS 체크 →
                            </Button>
                        </Link>
                        <Link href="/guide/pms">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                PMS 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


