import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "골반저 운동 리마인더 | 나이스우먼 도구",
    description: "하루 3회 알림과 세트 기록으로 골반저 운동을 꾸준히 이어가도록 돕습니다.",
    keywords: ["골반저 운동", "리마인더", "요실금 예방", "케겔"],
    alternates: { canonical: "https://nicewomen.kr/tools/pelvic-floor-reminder" },
};

export default function PelvicFloorReminderIntro() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-10 space-y-4">
                    <Link href="/tools" className="text-rose-700 hover:text-rose-800 text-sm">
                        ← 도구 목록
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <BellRing className="w-4 h-4" />
                        <span>골반저</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        골반저 운동 리마인더
                    </h1>
                    <p className="text-lg text-gray-700">
                        아침·점심·저녁 알림과 세트 기록으로 10분 루틴을 꾸준히 실행하도록 돕습니다.
                        요실금 예방, 허리·골반 안정에 활용하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="border border-rose-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">입력/기능</h2>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>알림 시간 3개 설정</li>
                                <li>세트 완료 체크, 주간 성공률 표시</li>
                                <li>수축/이완 가이드 텍스트 제공</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border border-rose-100">
                        <CardContent className="pt-6 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-rose-600" />
                                주의사항
                            </h2>
                            <p className="text-gray-700 text-sm">
                                통증·출혈이 있으면 중단하고 상담하세요. 복부·엉덩이 힘을 과도하게 주지 않도록 안내합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/tools/pelvic-floor-reminder/test">
                        <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg font-bold">
                            알림 설정 →
                        </Button>
                    </Link>
                    <Link href="/guide/pelvic-floor-care">
                        <Button size="lg" variant="secondary" className="bg-white text-rose-700 border border-rose-200 hover:bg-rose-50 px-8 py-6 text-lg font-bold">
                            운동 가이드 보기
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


