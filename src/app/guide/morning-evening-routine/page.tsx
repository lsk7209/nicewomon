import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Sun, Moon, ListChecks, NotebookPen, Info } from "lucide-react";
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

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "morning", label: "아침 루틴" },
        { id: "evening", label: "저녁 루틴" },
        { id: "stack", label: "루틴 스택" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
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
                    <p className="text-lg text-gray-800 leading-relaxed">
                        하루의 시작과 끝을 규칙화하면 수면 질과 에너지가 안정됩니다.
                        AEO 요약, 자가 체크, FAQ를 참고해 빛·컷오프·조도 루틴을 바로 적용하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">한눈에 보기</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">아침</p>
                                    <p>기상 30분 내 햇빛 10~15분 + 물 1컵, 3분 스트레칭·호흡, 단백질·섬유 아침</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">저녁</p>
                                    <p>취침 2시간 전 조도 50~100 lux, 카페인 14시 컷, 블루라이트 최소화, 10분 스트레칭</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-amber-700 uppercase">유연성</p>
                                    <p>야근/교대 시: 기상 고정·햇빛/라이트박스·짧은 낮잠(20분)으로 리듬 보정</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="morning" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Sun className="w-5 h-5 text-amber-600" />
                            아침 루틴 (15분)
                        </h2>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
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
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
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
                                <p className="text-gray-800 text-base leading-relaxed">빛(아침), 컷오프(오후), 조도(저녁)만 지켜도 수면 위생이 크게 개선됩니다.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="selfcheck" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-amber-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>기상·취침 시간이 날마다 2시간 이상 다르다</li>
                            <li>오후 늦게까지 카페인/스크린을 사용한다</li>
                            <li>아침 햇빛/저녁 조도 루틴을 지키지 못한다</li>
                        </ul>
                        <p className="text-sm text-amber-700">2점 이상이면 기상 고정→아침 햇빛→14시 컷오프→저녁 조도 낮추기 순서로 2주간 적용하세요.</p>
                    </section>

                    <section id="faq" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-amber-600" />
                            FAQ
                        </h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. 야근/교대 시 루틴은?</p>
                                <p>기상 시간을 먼저 고정하고, 기상 직후 라이트박스/햇빛, 짧은 낮잠(20분), 카페인 컷오프를 유지해 리듬을 맞추세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 아침 햇빛을 못 볼 때는?</p>
                                <p>라이트박스 10~15분(2,500~10,000 lux)을 기상 후 바로 사용하세요. 밤낮 교대 시에도 동일하게 적용합니다.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 저녁에 피곤해서 루틴을 놓칩니다.</p>
                                <p>취침 2시간 전부터 조도를 먼저 낮추고, 스크린을 멀리 두며, 10분 스트레칭·호흡만 남기는 최소 루틴을 설정하세요.</p>
                            </div>
                        </div>
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


