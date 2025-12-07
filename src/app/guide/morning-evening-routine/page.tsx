import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Sun, Moon, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "아침·저녁 루틴 설계 가이드 | 나이스우먼",
    description: "빛·수분·호흡으로 시작하는 아침, 조도·스크린·카페인 컷으로 마무리하는 저녁 루틴을 설계합니다.",
    keywords: ["아침 루틴", "저녁 루틴", "수면 위생", "빛 노출", "카페인 컷오프"],
    alternates: { canonical: "https://nicewomen.kr/guide/morning-evening-routine" },
};

export default function MorningEveningRoutineGuide() {
    const morning = [
        "기상 30분 내 햇빛 10~15분 + 물 1컵",
        "가벼운 스트레칭·호흡 3분, 저강도 걷기 5~10분",
        "단백질·섬유 중심 아침, 카페인은 오전에만",
    ];

    const evening = [
        "취침 2시간 전 조도 50~100 lux로 낮추기",
        "카페인 오후 2시 이후 컷, 알코올·늦은 식사 피하기",
        "블루라이트 최소화, 10분 스트레칭·호흡",
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>루틴</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        아침·저녁 루틴 설계 가이드
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        하루의 시작과 끝을 규칙화하면 수면 질과 에너지가 안정됩니다.
                        빛·수분·조도·카페인 컷오프를 기반으로 간단한 루틴을 설계하세요.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="morning" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Sun className="w-5 h-5 text-amber-600" />
                            아침 루틴 (15분)
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {morning.map((m) => (
                                <li key={m}>{m}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="evening" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Moon className="w-5 h-5 text-indigo-600" />
                            저녁 루틴 (60~120분 전)
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {evening.map((e) => (
                                <li key={e}>{e}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="stack" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">루틴 스택 예시</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <ListChecks className="w-5 h-5 text-amber-600" />
                                    3가지 체크
                                </h3>
                                <p className="text-gray-700 text-sm">빛(아침), 컷오프(오후), 조도(저녁)만 지켜도 수면 위생이 크게 개선됩니다.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">루틴 알림과 수면 테스트로 실천하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        수면 테스트와 알림 도구로 아침·저녁 루틴을 고정하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/blog/morning-sunlight-sleep">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                아침 햇빛 루틴 보기 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


