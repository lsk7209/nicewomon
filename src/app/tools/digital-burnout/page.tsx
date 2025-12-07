import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, AlarmClock } from "lucide-react";

export const metadata: Metadata = {
    title: "디지털 번아웃 테스트 | 나이스우먼",
    description: "스크린타임, 알림 빈도, 수면 영향도를 입력해 디지털 피로를 측정합니다.",
    keywords: ["디지털 번아웃", "스크린타임", "수면", "스트레스"],
    alternates: { canonical: "https://nicewomen.kr/tools/digital-burnout" },
};

export default function DigitalBurnoutToolPage() {
    return (
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Brain className="w-4 h-4" />
                        <span>디지털 피로 체크</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        디지털 번아웃 테스트
                    </h1>
                    <p className="text-lg text-gray-700">
                        하루 스크린타임, 알림 빈도, 수면 영향도를 입력하면 피로 점수와 알림 다이어트 플랜을 제공합니다.
                    </p>
                </div>

                <Card className="border-l-4 border-purple-500">
                    <CardContent className="pt-6 space-y-3">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-purple-600" />
                            체크 항목
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>하루 스크린타임/앱별 사용 시간</li>
                            <li>푸시 알림 빈도, 업무·개인 구분</li>
                            <li>수면 지연/각성 여부</li>
                            <li>눈 피로·두통·목어깨 뻐근함</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border border-purple-100">
                    <CardContent className="pt-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <AlarmClock className="w-5 h-5 text-purple-600" />
                            결과 예시
                        </h3>
                        <p className="text-gray-700 text-sm">
                            알림 다이어트(중요 앱만 허용), 20-20-20 눈 휴식, 취침 60분 전 디지털 셧다운 루틴을 제안합니다.
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-3 flex-wrap">
                    <Link href="/blog/brain-fog-10min-recovery">
                        <Button variant="outline">10분 회복 루틴 보기</Button>
                    </Link>
                    <Link href="/guide/stress">
                        <Button variant="ghost">스트레스 가이드</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

