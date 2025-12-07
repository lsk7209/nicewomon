import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, HeartPulse, Brain, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "PMS 감정 파동 다루기: 3단계 루틴 | 나이스우먼 블로그",
    description: "황체기 감정 기복을 낮추는 수면·영양·인지 루틴과 당일 대처 스크립트를 제공합니다.",
    keywords: ["PMS", "감정 기복", "스트레스", "수면", "영양"],
    alternates: { canonical: "https://nicewomen.kr/blog/pms-emotion-waves" },
};

export default function PmsEmotionWavesPost() {
    const routines = [
        { title: "수면", detail: "취침·기상 일정 고정, 카페인 컷오프 오후 1~2시, 취침 전 호흡 5분" },
        { title: "영양", detail: "복합탄수+단백질 기반 식사, 단 음료·과당 스낵 최소화, 마그네슘·B군 확보" },
        { title: "인지·행동", detail: "감정 라벨링, 10분 산책, 회의 전/후 3분 호흡으로 반응성 낮추기" },
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        PMS 감정 파동 다루기: 3단계 루틴
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
                        황체기에는 수면·혈당·스트레스가 겹치며 감정 기복이 커집니다.
                        수면·영양·인지·행동 루틴을 짧게 결합해 일상 파동을 줄이는 방법을 안내합니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-rose-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">핵심 요약</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>수면 일정 고정, 카페인 컷오프 앞당기기</li>
                            <li>단 음료·과당 스낵 최소화, 단백질·섬유 채우기</li>
                            <li>감정 라벨링 + 10분 산책 + 3분 호흡으로 반응성 낮추기</li>
                        </ul>
                    </section>

                    <section id="routine" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">3단계 루틴</h2>
                        {routines.map((r) => (
                            <Card key={r.title} className="border border-rose-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <HeartPulse className="w-5 h-5 text-rose-600" />
                                        {r.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{r.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="scripts" className="bg-rose-50 border border-rose-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">당일 대처 스크립트</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>회의 전: “지금 긴장됨, 3분 호흡 후 시작”</li>
                            <li>갈등 시: “잠시만요, 정리하고 답할게요”</li>
                            <li>야식 욕구: “당 충동은 20분이면 가라앉음, 물/티 한 컵 후 판단”</li>
                        </ul>
                        <p className="text-sm text-gray-600">
                            라벨링(‘지금 화남’), 시간 벌기, 대체 행동(물/티, 산책)으로 반응성을 낮춥니다.
                        </p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">보충제는 무엇이 도움될까?</p>
                                <p className="text-gray-700 text-sm">마그네슘, 비타민B6, 오메가3가 보고된 바 있습니다. 복용 전 전문의 상담을 권장합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-5">
                                <p className="font-semibold text-gray-900 mb-1">운동은 어떻게?</p>
                                <p className="text-gray-700 text-sm">걷기/요가/저강도 근력 위주로, HRV나 피로도가 높으면 강도를 낮추세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">PMS 패턴을 기록하고 루틴을 받으세요</h2>
                    <p className="text-lg mb-8 opacity-90">
                        PMS/PMDD 체크와 호르몬 밸런스 테스트로 개인화 루틴을 확인하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/pms">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                PMS 체크 →
                            </Button>
                        </Link>
                        <Link href="/guide/pms">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                PMS 가이드 보기 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.nichd.nih.gov/health/topics/pms/conditioninfo" className="underline text-white">NICHD PMS 정보</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


