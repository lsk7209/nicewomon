import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Plane, Sun, Bed, NotebookPen, AlertTriangle, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "시차 최소화 3일 플랜: 빛·식사·수면 조정 | 나이스우먼 블로그",
    description: "출발 전/도착 후 3일 플랜으로 빛 노출, 식사 시간, 수면 길이를 조정해 시차를 최소화하는 방법. 동→서/서→동 시간표, 카페인·멜라토닌 타이밍을 포함합니다.",
    keywords: ["시차", "빛 노출", "수면 조정", "여행 피로", "제트랙", "멜라토닌"],
    alternates: { canonical: "https://nicewomen.kr/blog/jetlag-minimize-plan" },
};

export default function JetlagMinimizePlanPost() {
    const phases = [
        { title: "출발 전 2~3일", detail: "목적지 시간에 맞춰 취침/기상 60~90분씩 이동, 아침/저녁 빛 노출을 조정." },
        { title: "비행 중", detail: "목적지 낮 시간에는 깨어 있고, 밤 시간에는 아이마스크·귀마개로 수면." },
        { title: "도착 후 1~2일", detail: "현지 아침 햇빛 20분, 첫날 낮잠은 20~30분 이내로 제한, 저녁 카페인·알코올 회피." },
    ];

    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "plan", label: "3단계 플랜" },
        { id: "timing", label: "빛·식사·수면 타이밍" },
        { id: "checklist", label: "체크리스트" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        시차 최소화 3일 플랜: 빛·식사·수면 조정
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
                        빛 노출과 식사 시간은 내부 시계를 가장 강하게 움직입니다. 출발 전/도착 후 3일 동안
                        단계적으로 조정해 시차를 최소화하세요. 동→서/서→동에 따라 아침·저녁 빛 노출 시간을 바꾸고, 카페인·식사·멜라토닌 타이밍을 함께 조정합니다.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-900">
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">출발 전</p>
                                    <p>2~3일간 취침·기상 60~90분씩 이동, 식사·카페인도 목적지 시간에 맞추기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">도착 후</p>
                                    <p>아침 빛 20분, 낮잠 20~30분 1회, 카페인 컷오프 13~14시(현지)</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-purple-700 uppercase">보충 전략</p>
                                    <p>멜라토닌은 필요 시 현지 취침 1~2h 전, 의료진 상의 후 사용</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="plan" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 플랜</h2>
                        {phases.map((p) => (
                            <Card key={p.title} className="border border-purple-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <Plane className="w-5 h-5 text-purple-600" />
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{p.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="timing" className="bg-purple-50 border border-purple-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-purple-600" />
                            빛·식사·수면 타이밍 (동→서 / 서→동)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-800">
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">동 → 서(시간 늘어남)</p>
                                    <p>목적지 오후/저녁에 강한 빛 노출, 현지 취침까지 버티기</p>
                                    <p>카페인: 현지 오전~점심만, 저녁 금지</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-purple-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="font-semibold text-gray-900">서 → 동(시간 줄어듦)</p>
                                    <p>현지 아침 강한 빛 20분, 저녁은 조도 최소화</p>
                                    <p>카페인 컷오프 13~14시(현지), 멜라토닌은 취침 1~2h 전 고려</p>
                                </CardContent>
                            </Card>
                        </div>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>식사: 현지 아침/점심/저녁 시간으로 즉시 조정</li>
                            <li>수면: 첫날 총량이 부족해도 낮잠은 20~30분 1회, 밤 수면을 우선 확보</li>
                            <li>수분·전해질: 비행 내내 물 200ml씩, 알코올은 회피</li>
                        </ul>
                    </section>

                    <section id="checklist" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">체크리스트</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                            <li>출발 3일 전부터 취침/기상 60~90분씩 이동</li>
                            <li>현지 아침 첫 2시간 안에 햇빛 20분</li>
                            <li>카페인 컷오프: 현지 13~14시</li>
                            <li>첫날 낮잠 20~30분 1회 이하, 알코올 회피</li>
                            <li>저녁 식사: 취침 3시간 전 마감</li>
                            <li>멜라토닌: 필요 시 현지 취침 1~2h 전, 의료진 상의</li>
                        </ul>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 동→서/서→동 어디에 더 힘든가?</p>
                            <p>A. 동→서가 상대적으로 쉬우며, 서→동은 아침 빛 노출과 취침 3시간 전 식사 마감이 특히 중요합니다.</p>
                            <p className="font-semibold">Q. 수면제나 멜라토닌은?</p>
                            <p>A. 필요 시 단기 사용을 의료진과 상의하세요. 타이밍은 현지 취침 1~2시간 전에 맞추는 것이 일반적입니다.</p>
                            <p className="font-semibold">Q. 단기 출장(2~3일)일 때?</p>
                            <p>A. 현지 시간으로 완전 적응 대신, 출발지 시간대 수면을 유지하며 회의·활동 시간에만 깨어 있게 설계할 수도 있습니다.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">시차 적응 플래너로 일정 짜기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        빛·식사·수면 리마인더를 맞추고 첫 3일 루틴을 자동으로 받아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/jetlag-adjust-planner">
                            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                시차 플래너 →
                            </Button>
                        </Link>
                        <Link href="/guide/sleep">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수면 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.cdc.gov/travel/page/travelers-diarrhea" className="underline text-white">CDC Travel Health (일반 여행 건강)</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


