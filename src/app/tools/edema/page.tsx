import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Activity, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "부종/순환 체크 | 나이스우먼",
    description: "염분·수분·활동 패턴을 입력해 부종 위험을 점검하고 실천 팁을 드립니다.",
    keywords: ["부종", "순환", "염분", "수분", "자가진단"],
    alternates: { canonical: "https://nicewomen.kr/tools/edema" },
};

export default function EdemaToolPage() {
    return (
        <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Droplets className="w-4 h-4" />
                        <span>부종 자가진단</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        부종/순환 체크
                    </h1>
                    <p className="text-lg text-gray-700">
                        국물 섭취, 수분/전해질, 활동량을 입력해 부종 리스크를 확인하고 루틴을 제안합니다.
                    </p>
                </div>

                <Card className="border-l-4 border-emerald-500">
                    <CardContent className="pt-6 space-y-3">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
                            체크 항목
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>국/찌개·가공식품 섭취 빈도</li>
                            <li>하루 수분/전해질 섭취, 알코올 여부</li>
                            <li>하루 걸음수, 오래 앉아 있는 시간</li>
                            <li>저녁 부종·신발 꽉 낌 여부</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border border-emerald-100">
                    <CardContent className="pt-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-emerald-600" />
                            결과 예시
                        </h3>
                        <p className="text-gray-700 text-sm">
                            저염·칼륨 식사, 식후 10분 걷기, 취침 전 종아리 스트레칭, 수분 조절 가이드를 제공합니다.
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-3 flex-wrap">
                    <Link href="/blog/edema-low-salt">
                        <Button variant="outline">부종 저염 전략 읽기</Button>
                    </Link>
                    <Link href="/guide/nutrition">
                        <Button variant="ghost">영양 가이드</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

