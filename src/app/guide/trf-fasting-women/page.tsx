import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Timer, AlertTriangle, Salad, NotebookPen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "시간제한식사(TRF) 여성 유의 가이드 | 나이스우먼",
    description: "14:10·12:12 TRF를 시작할 때 여성 호르몬·혈당·수면에 미치는 영향을 고려한 안전 가이드.",
    keywords: ["TRF", "시간제한식사", "간헐적 단식", "여성 호르몬", "혈당"],
    alternates: { canonical: "https://nicewomen.kr/guide/trf-fasting-women" },
};

export default function TrfFastingWomenGuide() {
    const steps = [
        { title: "14:10부터 시작", detail: "초보자는 14시간 공복부터, 수면 시간을 포함해 스트레스를 낮춥니다." },
        { title: "아침 단백질·섬유 확보", detail: "공복 후 첫 식사에서 단백질 20g+, 섬유질 8g+로 혈당 스파이크를 완화합니다." },
        { title: "후반기 호르몬 주기 주의", detail: "황체기 피로·배고픔이 크면 12:12로 완화하거나 중단합니다." },
    ];

    const faq = [
        { q: "카페인은 언제?", a: "공복 카페인으로 속쓰림이 있으면 첫 식사와 함께. 수면을 위해 오후 2시 이후는 피하세요." },
        { q: "운동 시간은?", a: "근력/유산소는 첫 식사 이후 1~3시간 사이가 안정적입니다. 공복 고강도는 피로를 높일 수 있습니다." },
        { q: "수면이 깨지면?", a: "공복을 12:12로 완화하고, 저녁 카페인·알코올을 컷오프하세요. 1주 뒤 회복 여부를 보고 다시 조정합니다." },
        { q: "혈당 약을 먹는데 해도 되나요?", a: "저혈당 위험이 있으니 의료진 상담 후 진행하세요. 식사 간격·약 복용 타이밍을 함께 조정해야 합니다." },
    ];

    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "plan", label: "실천 3단계" },
        { id: "risks", label: "유의사항" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        시간제한식사(TRF) 여성 유의 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        TRF는 식사 시간을 압축해 혈당·체중 관리에 도움을 줄 수 있지만,
                        여성의 호르몬 주기와 수면에 부담이 되지 않도록 단계적·유연하게 접근해야 합니다.
                        AEO 요약·자가 체크·FAQ를 먼저 확인하고 진행하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-emerald-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-emerald-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-emerald-700 uppercase">시작</p>
                                    <p>14:10부터 적응, 수면 포함해 스트레스 낮추기 → 이후 12:12/16:8로 조정</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-emerald-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-emerald-700 uppercase">첫 식사</p>
                                    <p>단백질 20g+, 식이섬유 8g+, 과당·포화지방 간식 최소화로 혈당 스파이크 완화</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-emerald-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-emerald-700 uppercase">유연성</p>
                                    <p>황체기·스트레스 높은 날·수면 저하 시 12:12로 완화하거나 중단, 수면 우선</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">실천 3단계</h2>
                        {steps.map((step) => (
                            <Card key={step.title} className="border border-emerald-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <Timer className="w-5 h-5 text-emerald-600" />
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-800 text-base leading-relaxed">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="risks" className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            유의사항
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>두통/어지럼, 과도한 피로 시 즉시 공복을 늘리지 말고 중단</li>
                            <li>수면 질 악화 시 공복을 완화하고 취침 전 스낵은 피함</li>
                            <li>임신 준비/임신/수유, 당뇨 약 복용자는 전문의 상담 필요</li>
                        </ul>
                    </section>

                    <section id="selfcheck" className="bg-white border border-emerald-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-emerald-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>황체기·스트레스 높은 날에 피로/불면이 잦다</li>
                            <li>공복 시 두통·어지럼·과민 증상이 잘 생긴다</li>
                            <li>혈당 약/호르몬 약을 복용하거나 임신 준비 중이다</li>
                        </ul>
                        <p className="text-sm text-emerald-700">2점 이상이면 12:12로 완화 후 진행하거나, 의료진과 상담해 안전 범위를 먼저 설정하세요.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-emerald-100">
                                <CardContent className="pt-5 space-y-1">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-800 text-base leading-relaxed">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">TRF 스케줄과 혈당 리듬을 함께 관리하세요</h2>
                    <p className="text-lg mb-8 opacity-90">
                        혈당 관리 가이드와 수면 테스트로 안전하게 공복 시간을 설계하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/guide/blood-sugar">
                            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                혈당 가이드 →
                            </Button>
                        </Link>
                        <Link href="/tools/blood-sugar">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                혈당 관리 도구 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


