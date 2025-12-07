import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Pill, Utensils, ShieldCheck, AlertTriangle, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "철분제 복용 시 위 불편 줄이는 법 | 나이스우먼 블로그",
    description: "위장 자극을 줄이는 복용 타이밍, 식사 조합, 3일 적응 플랜과 상호작용 주의 식품·약물을 정리했습니다.",
    keywords: ["철분제", "위 불편", "복용 타이밍", "상호작용", "빈혈", "철분 흡수"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-supplement-stomach" },
};

export default function IronSupplementStomachPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "timing", label: "복용 타이밍·조합" },
        { id: "plan", label: "3일 적응 플랜" },
        { id: "interactions", label: "상호작용·피해야 할 조합" },
        { id: "faq", label: "FAQ" },
    ];

    const tips = [
        "가벼운 식사 후 복용: 빈속이 부담되면 소량 탄수+단백질과 함께",
        "비타민C 소량 동시 섭취: 흡수 도움, 위 불편하면 물만",
        "칼슘·커피·차·유제품과 간격 2시간 이상",
    ];

    const faq = [
        { q: "아침·저녁 언제가 좋을까?", a: "불편이 없다면 아침 공복+물, 민감하면 가벼운 식사 후. 취침 직전은 역류가 있다면 피하세요." },
        { q: "변비가 심할 때?", a: "수분·섬유질을 늘리고, 부드러운 제형(글루콘산염 등)이나 분할 복용을 고려하세요." },
    ];

    return (
        <div className="bg-gradient-to-b from-red-50 via-white to-red-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        철분제 복용 시 위 불편 줄이는 법
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
                <p className="text-lg text-gray-700">
                    철분은 위 자극을 줄 수 있습니다. 복용 타이밍, 동시 섭취·피해야 할 식품, 제형 선택을 조정하면
                    흡수를 유지하면서 불편을 낮출 수 있습니다.
                </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                        <p className="text-sm text-gray-700">
                            위가 민감하면 “가벼운 식사+물”로 시작하고, 칼슘·커피·유제품과 2시간 간격을 둡니다.
                            3일 적응 플랜으로 용량·타이밍을 미세 조정하고, 지속 통증·흑변·구토 시 의료진과 상의하세요.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">권장 타이밍</p>
                                    <p className="text-gray-800">아침 또는 점심 직후, 취침 직전은 역류 시 피하기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">간격</p>
                                    <p className="text-gray-800">칼슘·커피·차·유제품과 2시간 이상, 제산제·일부 항생제도 동일</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-rose-700 uppercase">제형 선택</p>
                                    <p className="text-gray-800">글루콘산염·비스글리시네이트 등 부드러운 제형 또는 분할 복용</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="timing" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">복용 타이밍·조합</h2>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Pill className="w-5 h-5 text-rose-600" />
                                    공복 vs 식후
                                </h3>
                                <p className="text-gray-700 text-sm">흡수는 공복이 유리하지만, 위 불편 시 소량 탄수+단백질(바나나+요거트, 두부)와 함께. 우유·커피·차는 피하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-amber-600" />
                                    상호작용 회피
                                </h3>
                                <p className="text-gray-700 text-sm">칼슘, 제산제, 특정 항생제와 간격 2시간. 섬유 보충제, 진하게 우린 차·커피도 간격을 둡니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="plan" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-rose-600" />
                            3일 적응 플랜
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-800">
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">Day 1</p>
                                    <p>아침/점심 중 식후 15분, 반 용량+물 300ml</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">Day 2</p>
                                    <p>불편 없으면 정량, 칼슘·커피와 2시간 간격 유지</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-rose-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">Day 3</p>
                                    <p>불편 시 제형 변경(글루콘산염/비스글리시네이트) 또는 분할 복용</p>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-xs text-gray-600">속쓰림이 지속되면 중단 후 의료진과 상의하세요.</p>
                    </section>

                    <section id="interactions" className="bg-white border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            상호작용·피해야 할 조합
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>칼슘·제산제·유제품·커피·홍차·녹차: 2시간 이상 간격</li>
                            <li>일부 항생제(퀴놀론·테트라사이클린 계열): 2시간 이상 간격 후 복용</li>
                            <li>섬유 보충제·고섬유 시리얼: 흡수 저하 가능, 간격 두기</li>
                            <li>비타민 C 50~100mg 소량은 흡수 도움, 불편하면 물만</li>
                        </ul>
                        <p className="text-sm text-gray-600">간·신장 질환, 염증성 장질환이 있으면 의료진 권고에 따르세요.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        {faq.map((item) => (
                            <Card key={item.q} className="border border-rose-100">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                                    <p className="text-gray-700 text-sm">{item.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">철분과 다른 영양제는 어떻게?</p>
                                <p className="text-gray-700 text-sm">마그네슘·오메가3는 같은 시간대 가능. 칼슘·아연은 흡수 경쟁이 있으니 2시간 간격을 둡니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">변비가 심할 때 대안은?</p>
                                <p className="text-gray-700 text-sm">글루콘산염·비스글리시네이트 등 부드러운 제형으로 바꾸고, 수분·섬유를 늘리며 분할 복용을 시도하세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">철분 상태 체크하고 복용 스케줄 잡기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        빈혈 체크 도구와 영양 가이드로 안전한 복용 타이밍을 설계하세요. 두근거림이 있으면 카페인 컷오프도 함께 조정하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/anemia">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                빈혈 체크 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80 space-y-1">
                        <span className="block">관련 읽기: <Link href="/blog/iron-supplement-timing" className="underline text-white">철분제 타이밍 가이드</Link> · <Link href="/blog/caffeine-cutoff-guide" className="underline text-white">카페인 컷오프 가이드</Link></span>
                        <span className="block">외부 참고: <Link href="https://ods.od.nih.gov/factsheets/Iron-Consumer/" className="underline text-white">NIH Iron Fact Sheet</Link></span>
                    </p>
                </section>
            </article>
        </div>
    );
}


