"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getResult, StoredResult } from "@/lib/storage";
import { ResultLayout } from "@/components/result/ResultLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function BodyAgeResultPage() {
    const router = useRouter();
    const [result, setResult] = useState<StoredResult | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = getResult("body-age");
        if (!data) {
            router.replace("/tools/body-age");
            return;
        }
        setResult(data);
        setLoading(false);
    }, [router]);

    if (loading || !result) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
            </div>
        );
    }

    const { height, weight, waist, birthYear } = result.answers;
    const currentYear = new Date().getFullYear();
    const actualAge = currentYear - birthYear;
    const whtr = waist / height;
    const bmi = weight / ((height / 100) * (height / 100));

    // 체형 나이 계산
    let ageDiff = 0;
    let status = "";
    let statusColor = "";
    let description = "";

    if (whtr < 0.42) {
        ageDiff = -2;
        status = "마름";
        statusColor = "text-blue-600";
        description = "체지방이 다소 부족한 상태입니다. 근육량을 늘리는 것이 좋습니다.";
    } else if (whtr < 0.49) {
        ageDiff = -5;
        status = "이상적";
        statusColor = "text-green-600";
        description = "매우 이상적인 체형입니다! 현재의 건강한 상태를 유지하세요.";
    } else if (whtr < 0.54) {
        ageDiff = 3;
        status = "주의";
        statusColor = "text-yellow-600";
        description = "복부 비만이 시작될 수 있습니다. 식단 조절과 유산소 운동이 필요합니다.";
    } else if (whtr < 0.58) {
        ageDiff = 7;
        status = "비만";
        statusColor = "text-orange-600";
        description = "체중 관리와 복부 지방 감량이 시급합니다. 전문가 상담을 권장합니다.";
    } else {
        ageDiff = 10;
        status = "고도비만";
        statusColor = "text-red-600";
        description = "건강 위험이 높은 상태입니다. 즉각적인 생활 습관 개선이 필요합니다.";
    }

    const bodyAge = actualAge + ageDiff;

    return (
        <ResultLayout
            title="체형 나이 분석 결과"
            subtitle={`${actualAge}세 여성 기준`}
            score={bodyAge}
            maxScore={100} // 의미 없음
            personaTitle={status}
        >
            <div className="p-6 md:p-10 space-y-12">
                {/* 1. Body Age Main Result */}
                <section className="text-center space-y-6">
                    <div className="inline-block p-8 rounded-full bg-rose-50 border-4 border-rose-200 w-64 h-64 flex flex-col items-center justify-center mx-auto shadow-inner">
                        <span className="text-gray-500 text-lg mb-2">나의 체형 나이</span>
                        <span className="text-6xl font-bold text-rose-600">{bodyAge}세</span>
                        <span className="text-sm text-gray-400 mt-2">
                            실제 나이보다 <span className={ageDiff > 0 ? "text-red-500" : "text-green-500"}>{Math.abs(ageDiff)}세 {ageDiff > 0 ? "많음" : "적음"}</span>
                        </span>
                    </div>

                    <div className="max-w-md mx-auto bg-white border rounded-xl p-6 shadow-sm">
                        <h3 className={cn("text-2xl font-bold mb-2", statusColor)}>{status}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </section>

                {/* 2. Detailed Metrics */}
                <section className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">BMI (체질량지수)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{bmi.toFixed(1)}</div>
                            <p className="text-xs text-gray-400 mt-1">
                                정상 범위: 18.5 ~ 23.0
                            </p>
                            <Progress value={(bmi / 35) * 100} className="h-2 mt-3" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">WHtR (허리/키 비율)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{whtr.toFixed(2)}</div>
                            <p className="text-xs text-gray-400 mt-1">
                                이상적 범위: 0.42 ~ 0.49
                            </p>
                            <Progress value={(whtr / 0.7) * 100} className="h-2 mt-3" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">복부둘레</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{waist}cm</div>
                            <p className="text-xs text-gray-400 mt-1">
                                여성 복부비만 기준: 85cm 이상
                            </p>
                            <Progress value={(waist / 100) * 100} className="h-2 mt-3" />
                        </CardContent>
                    </Card>
                </section>

                {/* 3. Recommendations */}
                <section className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                        체형 나이를 줄이는 3가지 습관
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🥗</div>
                            <h4 className="font-bold mb-2">단백질 위주 식단</h4>
                            <p className="text-sm text-gray-600">
                                근육량 유지를 위해 매끼 단백질을 섭취하고, 정제 탄수화물을 줄이세요.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🏃‍♀️</div>
                            <h4 className="font-bold mb-2">인터벌 트레이닝</h4>
                            <p className="text-sm text-gray-600">
                                짧고 굵은 고강도 인터벌 운동이 복부 지방 연소에 효과적입니다.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">😴</div>
                            <h4 className="font-bold mb-2">7시간 수면</h4>
                            <p className="text-sm text-gray-600">
                                수면 부족은 식욕 호르몬을 자극하여 복부 비만을 유발합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </ResultLayout>
    );
}
