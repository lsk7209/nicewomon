import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Smartphone, AlarmClock, Moon, NotebookPen, Info } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "디지털 번아웃 디톡스: 7일 알림 다이어트 플랜 | 나이스우먼 블로그",
    description: "스크린타임·알림을 줄이고 수면과 집중력을 회복하는 7일 플랜을 제안합니다.",
    keywords: ["디지털 번아웃", "알림 다이어트", "스크린타임", "수면", "집중력"],
    alternates: { canonical: "https://nicewomen.kr/blog/digital-burnout-detox" },
};

export default function DigitalBurnoutDetoxPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "왜 알림을 줄여야 할까?" },
        { id: "plan", label: "7일 디톡스 플랜" },
        { id: "habits", label: "유지 루틴" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    const plan = [
        "Day 1: 불필요 앱 알림 OFF, 홈 화면 최소화",
        "Day 2: 업무·개인 알림 분리, 메일은 3회 체크",
        "Day 3: 취침 60분 전 디지털 셧다운",
        "Day 4: 점심 20분 산책으로 빛·리듬 리셋",
        "Day 5: SNS 2회/일 시간 예약(타임박스)",
        "Day 6: 업무 후 '클린 데스크·노티 OFF' 의식",
        "Day 7: 총 스크린타임 20% 추가 감축 목표",
    ];

    const habits = [
        "20-20-20 눈 휴식: 20분마다 20피트 20초 보기",
        "주말 절전 모드: 반나절 알림·앱 최소화",
        "취침 전 종이책/저널링으로 블루라이트 차단",
    ];

    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>디지털 웰빙</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        디지털 번아웃 디톡스: 7일 알림 다이어트 플랜
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.02</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        알림과 스크린타임을 줄이면 수면과 집중력이 회복됩니다. AEO 요약·자가 체크·FAQ를 먼저 확인하고 7일 플랜을 적용하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-10">
                        <section id="summary" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">한눈에 보기</h2>
                            <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                                <Card className="border border-purple-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-purple-700 uppercase">컷오프</p>
                                        <p>취침 60분 전 셧다운, 업무·개인 알림 분리, 메일 3회/일</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-purple-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-purple-700 uppercase">리듬</p>
                                        <p>점심 20분 산책으로 빛 리셋, SNS·앱 사용 시간 예약(타임박스)</p>
                                    </CardContent>
                                </Card>
                                <Card className="border border-purple-100">
                                    <CardContent className="pt-4 space-y-1">
                                        <p className="text-xs font-semibold text-purple-700 uppercase">유지</p>
                                        <p>20-20-20 눈 휴식, 주말 절전 모드, 취침 전 종이책/저널링</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 알림을 줄여야 할까?</h2>
                            <p className="text-gray-800 leading-relaxed text-base">
                                잦은 알림은 집중을 깨고 수면을 방해합니다. 뇌는 알림을 위협으로 인식해 코르티솔을 올리며,
                                밤 늦게까지 화면을 보면 멜라토닌 분비가 억제됩니다.
                            </p>
                        </section>

                        <section id="plan" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">7일 디톡스 플랜</h2>
                            <Card className="border-l-4 border-purple-400">
                                <CardContent className="pt-5 text-base text-gray-800 leading-relaxed space-y-2">
                                    {plan.map((item) => (
                                        <p key={item}>• {item}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="habits" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">디톡스 후 유지 루틴</h2>
                            <Card className="border-l-4 border-purple-300">
                                <CardContent className="pt-5 text-base text-gray-800 leading-relaxed space-y-1">
                                    {habits.map((h) => (
                                        <p key={h}>• {h}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>

                        <section id="selfcheck" className="bg-white border border-purple-100 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <NotebookPen className="w-5 h-5 text-purple-600" />
                                자가 체크 (0~3점)
                            </h3>
                            <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                                <li>업무·개인 알림이 하루 종일 섞여 온다</li>
                                <li>취침 1시간 전에도 스크린·알림을 계속 본다</li>
                                <li>주말에도 SNS/뉴스를 무작정 스크롤한다</li>
                            </ul>
                            <p className="text-sm text-purple-700">2점 이상이면 7일 플랜을 그대로 적용하고, 셧다운·타임박스·산책(빛 노출)을 우선 실행하세요.</p>
                        </section>

                        <section id="faq" className="bg-purple-50 border border-purple-100 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Info className="w-5 h-5 text-purple-600" />
                                FAQ
                            </h3>
                            <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                                <div>
                                    <p className="font-semibold">Q. 업무상 알림을 다 끄기 어렵다면?</p>
                                    <p>업무 메신저·메일을 3회(예: 10시/14시/17시)로 타임박스하고, 나머지 알림은 요약/배치로 묶어 확인하세요.</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Q. SNS를 끊기 힘들다면?</p>
                                    <p>SNS는 하루 2회, 각 10~15분으로 예약 사용하고, 홈 화면에서 앱을 제거하거나 위젯만 남겨 알림을 차단하세요.</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Q. 밤에 잠이 안 와서 휴대폰을 보게 됩니다.</p>
                                    <p>취침 60분 전 종이책·저널링으로 대체하고, 알람은 별도 기기/워치로 설정해 휴대폰을 침실 밖에 두세요.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">디지털 피로 점검하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        디지털 번아웃 테스트와 스트레스 테스트로 컨디션을 확인하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/digital-burnout">
                            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                디지털 번아웃 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

