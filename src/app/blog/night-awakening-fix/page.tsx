import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Moon, Lightbulb, Coffee, NotebookPen, Activity, AlertCircle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "새벽 각성 줄이는 저녁 루틴 | 나이스우먼 블로그",
    description: "조도·카페인·수분·체온을 정리해 새벽 각성을 줄이는 4단계 저녁 루틴을 안내합니다.",
    keywords: ["새벽 각성", "수면 루틴", "카페인 컷오프", "조도 관리", "체온 조절"],
    alternates: { canonical: "https://nicewomen.kr/blog/night-awakening-fix" },
};

export default function NightAwakeningFixPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "routine", label: "저녁 루틴 4단계" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "today", label: "오늘 실행 체크" },
        { id: "faq", label: "FAQ" },
    ];

    const steps = [
        "취침 2시간 전 조도 50~100 lux, 블루라이트 최소화",
        "카페인 8~10시간 전 컷오프, 알코올·과식 피하기",
        "미지근한 샤워/족욕 후 체온 하강 대기 30~60분",
        "수분은 취침 2시간 전부터 소량, 야간뇨 줄이기",
    ];

    const today = [
        "오후 2시 이후 카페인/차/초콜릿 제한",
        "저녁 조명 어둡게, 화면 밝기 낮추기",
        "샤워 후 30분 뒤 취침, 침실 20~22도 유지",
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>수면</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">새벽 각성 줄이는 저녁 루틴</h1>
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
                        새벽 각성은 조도, 카페인, 수분, 체온 관리로 크게 줄일 수 있습니다. 4단계 저녁 루틴으로
                        체온 하강과 멜라토닌 분비를 돕고, 야간뇨를 줄여 깊은 잠을 준비하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">한눈에 보기</h2>
                        <div className="grid md:grid-cols-2 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">환경/조도</p>
                                    <p>취침 2시간 전 조도 50~100 lux, 블루라이트 최소화</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">섭취·체온</p>
                                    <p>카페인 8~10h 전 컷, 알코올·과식 피하기, 샤워 후 30~60분 체온 하강</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">수분</p>
                                    <p>취침 2h 전부터 소량씩, 야간뇨 줄이기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-blue-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-blue-700 uppercase">온도</p>
                                    <p>침실 20~22도, 습도 45~55%, 이불/파자마는 통기성 소재</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="routine" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">저녁 루틴 4단계</h2>
                        {steps.map((step) => (
                            <Card key={step} className="border border-blue-100">
                                <CardContent className="pt-5 text-base text-gray-800 leading-relaxed">{step}</CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="selfcheck" className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-blue-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>새벽 각성/야간뇨로 2회 이상 깨는가?</li>
                            <li>카페인 컷오프(8~10h 전)와 저녁 조도↓를 지키지 못하는가?</li>
                            <li>샤워 후 바로 눕거나, 수분을 늦게 많이 마시는가?</li>
                        </ul>
                        <p className="text-sm text-blue-700">2점 이상이면 조도→카페인·수분→체온 순으로 1주 적용하세요.</p>
                    </section>

                    <section id="today" className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">오늘 실행 체크</h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            {today.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
                        <Card className="border border-blue-100">
                            <CardContent className="pt-5 space-y-2">
                                <p className="font-semibold text-gray-900">밤중에 깨면 어떻게?</p>
                                <p className="text-gray-800 text-base leading-relaxed">침대에 오래 누워 있지 말고, 은은한 조명 아래 5~10분 호흡 후 다시 눕습니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-blue-100">
                            <CardContent className="pt-5 space-y-2">
                                <p className="font-semibold text-gray-900">카페인 시간 계산은?</p>
                                <p className="text-gray-800 text-base leading-relaxed">취침 8~10시간 전이 기본입니다. 민감하면 오후 1~2시 컷을 권장합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-blue-100">
                            <CardContent className="pt-5 space-y-2">
                                <p className="font-semibold text-gray-900">야간뇨가 심하면?</p>
                                <p className="text-gray-800 text-base leading-relaxed">취침 2h 전부터는 물을 소량씩만, 짠 음식·카페인·알코올을 저녁에 피하세요. 지속되면 의료 상담을 권장합니다.</p>
                            </CardContent>
                        </Card>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">수면 점수와 컷오프 시간을 계산하세요</h2>
                    <p className="text-lg mb-8 opacity-90">수면 테스트와 카페인 컷오프 계산기로 새벽 각성을 줄여보세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sleep">
                            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/caffeine-cutoff-calculator">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                컷오프 계산기 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


