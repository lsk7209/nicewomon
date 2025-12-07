import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Sun, Moon, AlarmClock } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "서카디언 리듬을 맞추는 수면 위생 | 나이스우먼 블로그",
    description: "아침 빛·저녁 어둠·식사·카페인 타이밍으로 생체리듬을 정렬해 숙면을 돕는 방법을 안내합니다.",
    keywords: ["서카디언", "수면 위생", "아침 햇빛", "카페인 컷오프", "멜라토닌"],
    alternates: { canonical: "https://nicewomen.kr/blog/circadian-sleep-hygiene" },
};

export default function CircadianSleepHygienePost() {
    const tocItems = [
        { id: "overview", label: "한눈에 보기" },
        { id: "why", label: "리듬이 깨지면 생기는 일" },
        { id: "timing", label: "시간대별 실천법" },
        { id: "evening", label: "저녁·취침 준비" },
        { id: "week", label: "주간 체크리스트" },
        { id: "faq", label: "FAQ" },
        { id: "habits", label: "매일 유지 루틴" },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면 위생</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        서카디언 리듬을 맞추는 수면 위생
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.03</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        빛·식사·카페인·운동 시간을 맞추면 수면 압력과 멜라토닌 분비가 개선됩니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section id="overview" className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-2">
                            <p className="text-sm font-semibold text-blue-700">요약 답변</p>
                            <p className="text-gray-800">
                                아침 30분 내 햇빛 10~15분, 점심 후 걷기 10분, 카페인 13~14시 컷오프, 취침 3시간 전 식사 종료,
                                취침 1시간 전 조도↓·스크린 차단이 서카디언 리듬 정렬의 핵심입니다.
                            </p>
                            <p className="text-xs text-blue-700">* 교대근무·시차 적응 시에는 일정 고정이 무엇보다 중요합니다.</p>
                        </section>

                        <section id="why">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">리듬이 깨지면?</h2>
                            <p className="text-gray-700">
                                야간 각성, 아침 피로, 혈당 변동이 심해집니다. 빛·식사·카페인 타이밍이 핵심이며,
                                특히 오후 늦은 카페인·야식·과한 스크린 노출이 멜라토닌 분비를 지연시킵니다.
                            </p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• 밤 각성: 늦은 카페인·운동·밝은 화면으로 코어 체온이 늦게 떨어짐</li>
                                <li>• 혈당 변동: 불규칙 식사와 짧은 수면이 인슐린 민감도를 낮춤</li>
                                <li>• 기분 저하: 세로토닌·코르티솔 리듬이 흐트러져 집중력·기분이 저하</li>
                            </ul>
                        </section>

                        <section id="timing" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">시간대별 실천법</h2>
                            <Card className="border-l-4 border-blue-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>아침(기상 0~2h): 기상 후 30분 내 햇빛 10~15분, 물 1컵, 단백질 아침</p>
                                    <p>오전(2~5h): 카페인 허용 시간, 집중 업무 배치</p>
                                    <p>오후(5~9h): 카페인 컷오프 13~14시, 점심 후 10~15분 걷기</p>
                                    <p>저녁(9~12h): 식사는 취침 3시간 전 마무리, 격한 운동 대신 스트레칭</p>
                                    <p>취침 전(1h 전): 조도 낮추기, 스크린 60분 차단, 4-7-8 호흡·박스 호흡</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="evening" className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">저녁·취침 준비</h2>
                            <Card className="border border-blue-100 shadow-sm">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-2">
                                    <p>• 온도: 침실 20~22도, 잠옷은 통기성 소재, 발 시원하게 유지</p>
                                    <p>• 광: 노란색 조명, 캔들·스탠드로 조도 단계적 낮추기</p>
                                    <p>• 소리: 화이트 노이즈·빗소리로 외부 소음 차단</p>
                                    <p>• 뇌 풀기: 저널링 5분, 내일 할 일 3개만 적어두기</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="week" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">주간 체크리스트 (Self-Audit)</h2>
                            <Card className="border-l-4 border-indigo-400">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>□ 기상 시간 편차 ±30분 이내 유지</p>
                                    <p>□ 주 5회 이상 아침 햇빛 10분 노출</p>
                                    <p>□ 카페인 14시 이전 마감, 알코올 주 2회 이하</p>
                                    <p>□ 식사-취침 간격 3시간 확보, 야식 1회 이하</p>
                                    <p>□ 스크린 차단 60분, 조도 단계적 낮추기 실천</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="faq" className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="font-semibold">Q. 교대근무자는 어떻게?</p>
                                <p>A. 근무 스케줄마다 기상·식사·카페인 시간을 세트로 고정하고, 근무 종료 후 30분 내 햇빛/밝은 조명 노출을 휴일에도 유지하세요.</p>
                                <p className="font-semibold">Q. 새벽 운동은 괜찮을까?</p>
                                <p>A. 고강도 운동은 기상 2~4시간 내가 좋고, 취침 3시간 전 이후는 저강도 스트레칭으로 제한합니다.</p>
                            </div>
                        </section>

                        <section id="habits" className="space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">매일 유지 루틴</h2>
                            <Card className="border-l-4 border-blue-300">
                                <CardContent className="pt-5 text-sm text-gray-700 space-y-1">
                                    <p>• 기상 시간 고정, 주말 편차 ±30분</p>
                                    <p>• 침실 20~22도, 암막/화이트노이즈로 방해 최소화</p>
                                    <p>• 저녁 루틴을 매일 같은 순서로 반복</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수 확인하기</h2>
                    <p className="text-lg mb-8 opacity-90">수면 질 테스트로 내 리듬 상태를 점검하세요.</p>
                    <Link href="/tools/sleep">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            수면 질 테스트 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

