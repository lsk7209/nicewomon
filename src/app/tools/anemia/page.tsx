import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Droplet, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "빈혈/철분 부족 체크 | 나이스우먼",
    description: "피로·어지럼·탈모 증상을 빠르게 점검하고 식사·보충 팁을 제안합니다.",
    keywords: ["빈혈", "철분", "피로", "탈모", "자가진단"],
    alternates: { canonical: "https://nicewomen.kr/tools/anemia" },
};

export default function AnemiaToolPage() {
    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <HeartPulse className="w-4 h-4" />
                        <span>빈혈 자가진단</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        빈혈/철분 부족 체크
                    </h1>
                    <p className="text-lg text-gray-700">
                        증상과 식습관을 입력하면 철 결핍 가능성을 추정하고 식사·보충 팁을 제공합니다.
                    </p>
                </div>

                <Card className="border-l-4 border-amber-500">
                    <CardContent className="pt-6 space-y-3">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <ClipboardCheck className="w-5 h-5 text-amber-600" />
                            체크 항목
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>피로·어지럼·맥박 변화</li>
                            <li>탈모·손톱 변화</li>
                            <li>월경량·주기, 채식 여부</li>
                            <li>커피/차 섭취 시간, 철분 섭취 패턴</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border border-amber-100">
                    <CardContent className="pt-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Droplet className="w-5 h-5 text-amber-600" />
                            결과 예시
                        </h3>
                        <p className="text-gray-700 text-sm">
                            철분이 풍부한 식품과 비타민C 동시 섭취, 커피/차 컷오프, 필요 시 검사·보충 권장 시점을 안내합니다.
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-3 flex-wrap">
                    <Link href="/blog/iron-deficiency-checklist">
                        <Button variant="outline">철분 체크리스트 읽기</Button>
                    </Link>
                    <Link href="/guide/nutrition">
                        <Button variant="ghost">영양 가이드</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

