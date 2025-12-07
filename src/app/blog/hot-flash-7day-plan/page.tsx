import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ThermometerSun, Utensils, Wind, Droplets, NotebookPen, Activity, AlertCircle } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "홍조가 밤에 심한 이유? 7일 루틴으로 줄이기 | 나이스우먼 블로그",
    description: "실내 온도·습도, 식단, 호흡을 조합해 홍조와 야간 각성을 줄이는 7일 계획을 소개합니다.",
    keywords: ["홍조", "갱년기", "야간각성", "수면", "호르몬"],
    alternates: { canonical: "https://nicewomen.kr/blog/hot-flash-7day-plan" },
};

export default function HotFlashPlanPost() {
    const steps = [
        { title: "Day 1-2: 환경 세팅", detail: "침실 20~22도, 습도 45~55%. 면 소재 파자마, 두꺼운 이불 피하기." },
        { title: "Day 3-4: 식단 조정", detail: "매운 음식·알코올·카페인 줄이고, 이소플라본·오메가3 식품 추가." },
        { title: "Day 5-6: 호흡·이완", detail: "4-7-8 호흡 5세트, 취침 전 10분 스트레칭." },
        { title: "Day 7: 패턴 점검", detail: "야간 각성 시간 기록 후, 원인(온도/음식/스트레스) 연결해 조정." },
    ];

    const faq = [
        { q: "밤에만 홍조가 심한 이유는?", a: "수면 중 체온조절 변화, 실내 온도·습도, 늦은 카페인·알코올 영향이 겹칩니다." },
        { q: "가습기/에어컨 온도는?", a: "20~22도, 습도 50% 내외가 입면과 체온 하강에 유리합니다." },
        { q: "카페인 컷오프는?", a: "민감하다면 오후 1~2시 이후 끊고, 허브차나 디카페인으로 대체하세요." },
        { q: "영양소는 무엇을 챙길까?", a: "이소플라본, 오메가3, 마그네슘이 도움 될 수 있습니다. 복용 전 전문의 상담을 권장합니다." },
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "plan", label: "7일 실행 계획" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "today", label: "오늘 바로 할 것" },
        { id: "faq", label: "자주 묻는 질문" },
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
                        <span>갱년기</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        홍조가 밤에 심한 이유? 7일 루틴으로 줄이기
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
                        밤에 더 심해지는 홍조와 야간 각성은 실내 환경, 식단, 스트레스가 겹쳐 나타납니다.
                        7일간 단계별로 환경·식단·루틴을 조정해 수면과 체온을 안정시키는 방법을 제안합니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-10">
                    <section id="summary" className="grid md:grid-cols-2 gap-4">
                        <Card className="border border-rose-100">
                            <CardContent className="pt-6 space-y-2">
                                <div className="flex items-center gap-2 text-rose-600 font-semibold">
                                    <ThermometerSun className="w-5 h-5" />
                                    <span>환경</span>
                                </div>
                                <p className="text-gray-800 text-base leading-relaxed">침실 20~22도, 습도 45~55%. 차가운 물수건/아이스팩을 침대 옆에 준비.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-6 space-y-2">
                                <div className="flex items-center gap-2 text-amber-600 font-semibold">
                                    <Utensils className="w-5 h-5" />
                                    <span>식단</span>
                                </div>
                                <p className="text-gray-800 text-base leading-relaxed">매운 음식·알코올·늦은 커피를 줄이고, 이소플라본/오메가3 식품을 추가합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-6 space-y-2">
                                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                                    <Wind className="w-5 h-5" />
                                    <span>호흡·이완</span>
                                </div>
                                <p className="text-gray-800 text-base leading-relaxed">취침 전 4-7-8 호흡 5세트, 목·어깨 스트레칭 10분으로 교감신경을 낮춥니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-teal-100">
                            <CardContent className="pt-6 space-y-2">
                                <div className="flex items-center gap-2 text-teal-600 font-semibold">
                                    <Droplets className="w-5 h-5" />
                                    <span>수분·염분</span>
                                </div>
                                <p className="text-gray-800 text-base leading-relaxed">저염 식단, 취침 2시간 전 수분은 미지근한 물로 소량 유지해 야간뇨를 줄입니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="plan">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7일 실행 계획</h2>
                        <div className="space-y-4">
                            {steps.map((step) => (
                                <Card key={step.title} className="border border-rose-100">
                                    <CardContent className="pt-5 space-y-2">
                                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                        <p className="text-gray-800 text-base leading-relaxed">{step.detail}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section id="selfcheck" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-rose-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>밤에 2회 이상 각성하며 땀/열감이 난다</li>
                            <li>침실 온습도(20~22도, 45~55%)를 지키지 못한다</li>
                            <li>저녁에 매운 음식·알코올·카페인을 자주 섭취한다</li>
                        </ul>
                        <p className="text-sm text-rose-700">2점 이상이면 환경(온습도)→카페인·알코올 컷→호흡·이완 순으로 1주 적용하세요.</p>
                    </section>

                    <section id="today" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-rose-900">오늘 바로 할 것 3가지</h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>침실 온도 20~22도 설정, 면 침구로 교체</li>
                            <li>오후 2시 이후 카페인 중단, 저녁 매운 음식/알코올 피하기</li>
                            <li>취침 전 4-7-8 호흡 5세트 + 목·어깨 스트레칭 10분</li>
                        </ul>
                    </section>

                    <section id="faq">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
                        <div className="space-y-3">
                            {faq.map((item) => (
                                <Card key={item.q} className="border border-gray-100">
                                    <CardContent className="pt-5">
                                        <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                        <p className="text-gray-800 text-base leading-relaxed">{item.a}</p>
                                    </CardContent>
                                </Card>
                            ))}
                            <Card className="border border-gray-100">
                                <CardContent className="pt-5 space-y-1">
                                    <p className="font-semibold text-gray-900 mb-1">밤중 땀으로 깰 때 바로 할 일?</p>
                                    <p className="text-gray-800 text-base leading-relaxed">이불을 벗고 시원한 물수건/아이스팩을 목·손목에 1~2분 대고, 4-7-8 호흡 3세트를 합니다. 방 온도·습도를 다시 확인하세요.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">나의 홍조/피로 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        호르몬 밸런스 테스트로 증상을 점검하고 맞춤 솔루션을 받아보세요.
                    </p>
                    <Link href="/tools/hormone">
                        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            호르몬 밸런스 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

