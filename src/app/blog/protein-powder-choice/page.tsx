import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Dumbbell, Leaf, FlaskRound, NotebookPen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "단백질 파우더 선택법: 여성 맞춤 가이드 | 나이스우먼 블로그",
    description: "유청·식물성·가수분해·아이솔레이트 차이, 위장 민감도와 목표별 선택법, 섭취 타이밍, 자가 체크와 라벨 읽기 팁을 정리했습니다.",
    keywords: ["단백질 파우더", "유청", "식물성 단백질", "아이솔레이트", "섭취 타이밍", "라벨 읽기"],
    alternates: { canonical: "https://nicewomen.kr/blog/protein-powder-choice" },
};

export default function ProteinPowderChoicePost() {
    const options = [
        { title: "WPI(아이솔레이트)", detail: "유당·지방이 낮아 위장 부담이 적고 흡수가 빠름" },
        { title: "WPH(가수분해)", detail: "분자량이 작아 소화가 더 빠르나 가격이 높음" },
        { title: "식물성(완두·쌀 등)", detail: "유당 불내·비건에 적합, 아미노산 스펙은 블렌딩이 유리" },
    ];

    return (
        <div className="bg-gradient-to-b from-lime-50 via-white to-lime-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-lime-700 hover:text-lime-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        단백질 파우더 선택법: 여성 맞춤 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        위장 민감도, 유당 불내, 체중·근력 목표에 따라 단백질 파우더의 형태가 달라집니다.
                        대표 형태와 선택 체크리스트, 섭취 타이밍을 정리했습니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-lime-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-lime-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-lime-700 uppercase">민감도</p>
                                    <p>유당 민감 → WPI/WPH 또는 식물성 블렌드</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-lime-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-lime-700 uppercase">성분</p>
                                    <p>1회 20~30g 단백질, 당·지방 낮은 제품, 감미료 민감도 확인</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-lime-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-lime-700 uppercase">타이밍</p>
                                    <p>운동 후 30분 내, 또는 아침·간식으로 배치해 단백질 총량 확보</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="types" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">형태별 특징</h2>
                        {options.map((opt) => (
                            <Card key={opt.title} className="border border-lime-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <FlaskRound className="w-5 h-5 text-lime-600" />
                                        {opt.title}
                                    </h3>
                                    <p className="text-gray-800 text-base leading-relaxed">{opt.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="checklist" className="bg-lime-50 border border-lime-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">선택 체크리스트</h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>유당 민감 여부, 위장 불편 유무</li>
                            <li>1회 단백질 20~30g, 당·지방 g 확인</li>
                            <li>감미료/향료 민감 여부, 알러젠 표기</li>
                        </ul>
                    </section>

                    <section id="timing" className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900">섭취 타이밍</h3>
                        <Card className="border border-lime-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">운동 후</p>
                                <p className="text-gray-800 text-base leading-relaxed">운동 후 30분 내 20~30g, 탄수 10~20g을 곁들이면 회복에 유리합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-lime-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">아침/간식 대체</p>
                                <p className="text-gray-800 text-base leading-relaxed">아침 단백질을 채우거나 오후 간식으로 활용해 혈당 스파이크를 줄입니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="selfcheck" className="bg-white border border-lime-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-lime-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>유당·감미료 섭취 후 복부 불편/가스가 잦다</li>
                            <li>단백질 총량이 체중 1.2g/kg 이하로 낮다</li>
                            <li>운동 후 단백질 섭취가 자주 누락된다</li>
                        </ul>
                        <p className="text-sm text-lime-700">2점 이상이면 WPI/WPH나 식물성 블렌드로 전환하고, 아침·운동 후에 20~30g을 우선 배치하세요.</p>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <Card className="border border-lime-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">감미료/향료가 걱정될 때?</p>
                                <p className="text-gray-800 text-base leading-relaxed">무첨가 제품을 고르거나, 소량부터 시작해 위장 반응을 확인하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-lime-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">신장/간 질환이 있다면?</p>
                                <p className="text-gray-800 text-base leading-relaxed">단백질 섭취 제한이 필요할 수 있으니 의료진과 상담 후 섭취하세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-lime-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">단백질 섭취량 계산하고 회복 점검</h2>
                    <p className="text-lg mb-8 opacity-90">
                        단백질 추적기와 운동 루틴 가이드로 근력·체중 목표를 효율적으로 달성하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/protein-tracker-basic">
                            <Button size="lg" className="bg-white text-lime-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                단백질 추적기 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.nutrition.org.uk/" className="underline text-white">British Nutrition Foundation</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


