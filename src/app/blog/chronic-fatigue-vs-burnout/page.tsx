import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, BatteryCharging, Flame, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "만성 피로 vs 번아웃 구분법 | 나이스우먼 블로그",
    description: "수면·에너지·감정 소진 패턴으로 만성 피로와 번아웃을 구분하고 회복 우선순위를 잡는 방법.",
    keywords: ["만성 피로", "번아웃", "스트레스", "회복", "수면 부족"],
    alternates: { canonical: "https://nicewomen.kr/blog/chronic-fatigue-vs-burnout" },
};

export default function ChronicFatigueVsBurnoutPost() {
    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "diff", label: "구분 포인트" },
        { id: "recover", label: "회복 우선순위" },
        { id: "faq", label: "FAQ" },
    ];

    const diff = [
        "만성 피로: 수면 부족·영양 불균형·빈혈·갑상선 등 신체 요인이 많음",
        "번아웃: 업무/가정 과부하, 감정 소진, 냉소, 동기 저하가 두드러짐",
        "두 경우 모두 수면·수분·영양이 기반, 번아웃은 경계 설정·알림 관리가 핵심",
    ];

    const recover = [
        "수면: 7~8시간 목표, 카페인 컷오프, 저녁 조도·스크린 관리",
        "에너지: 단백질·철·B군·마그네슘 보충, 수분·전해질 균형",
        "경계: 알림 차단, 응답 지연 스크립트, 회복일/저강도 운동일 지정",
    ];

    return (
        <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>스트레스</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">만성 피로 vs 번아웃 구분법</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.07</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        만성 피로는 신체적 요인, 번아웃은 감정 소진과 통제감 상실이 두드러집니다.
                        두 패턴을 구분하고 회복 우선순위를 정해보세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-orange-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>만성 피로: 수면·영양·빈혈·갑상선 등 신체 요인 점검</li>
                            <li>번아웃: 감정 소진/냉소/동기 저하 + 과부하·경계 무너짐</li>
                            <li>회복: 수면/영양 기반 + 알림 차단·응답 지연·회복일 설정</li>
                        </ul>
                    </section>

                    <section id="diff" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">구분 포인트</h2>
                        {diff.map((d) => (
                            <Card key={d} className="border border-orange-100">
                                <CardContent className="pt-5 text-sm text-gray-700">{d}</CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="recover" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">회복 우선순위</h2>
                        {recover.map((r) => (
                            <Card key={r} className="border border-orange-100">
                                <CardContent className="pt-5 text-sm text-gray-700">{r}</CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">의료 검진은 무엇을 우선?</p>
                                <p className="text-gray-700 text-sm">혈액검사(철, B12, 갑상선, 혈당), 수면 상태, 스트레스 수준을 함께 확인하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-orange-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">번아웃이면 운동은?</p>
                                <p className="text-gray-700 text-sm">저강도 걷기·스트레칭부터, 고강도는 회복 신호가 돌아올 때까지 미룹니다.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">에너지·스트레스 점검하고 회복 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">번아웃 스크리너, 스트레스 테스트, 수면 테스트로 회복 계획을 세우세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/burnout-risk-screener">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                번아웃 스크리너 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/sleep">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수면 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


