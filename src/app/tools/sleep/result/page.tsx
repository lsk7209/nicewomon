"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getResult, StoredResult } from "@/lib/storage";
import { getPersona, getPersonaChartColor } from "@/lib/persona";
import { analyzeScore, generateInsights, generateRecommendations } from "@/lib/scoring";
import { SLEEP_QUESTIONS } from "@/lib/questions";
import { getIngredientsForSymptom } from "@/lib/ingredients";
import { ResultLayout } from "@/components/result/ResultLayout";
import { RadarChart } from "@/components/charts/RadarChart";
import { PersonaCard } from "@/components/result/PersonaCard";
import { IngredientGuide } from "@/components/monetization/IngredientGuide";
import { getPersonaColor } from "@/lib/persona";

export default function SleepResultPage() {
    const router = useRouter();
    const [result, setResult] = useState<StoredResult | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = getResult("sleep");
        if (!data) {
            router.replace("/tools/sleep");
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

    const questionNames = SLEEP_QUESTIONS.reduce((acc, q) => {
        acc[q.id] = q.text;
        return acc;
    }, {} as Record<string, string>);

    const analysis = analyzeScore(result.answers, questionNames);
    const persona = getPersona(result.persona);
    const insights = generateInsights(analysis, result.persona);
    const recommendations = generateRecommendations(analysis);

    // 차트 데이터 변환
    const chartData = Object.entries(result.answers).map(([key, value]) => ({
        subject: questionNames[key] || key,
        A: value,
        fullMark: 3,
    }));

    // 추천 성분 (상위 증상 기반)
    const topSymptoms = analysis.topSymptoms.map((s) => s.name);
    const recommendedIngredients = topSymptoms
        .flatMap((symptom) => getIngredientsForSymptom(symptom))
        .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i) // 중복 제거
        .slice(0, 3); // 최대 3개

    return (
        <ResultLayout
            title="수면 질 분석 결과"
            subtitle={persona.title}
            score={result.score}
            maxScore={analysis.maxScore}
            personaTitle={persona.title}
        >
            <div className="p-6 md:p-10 space-y-12">
                {/* 1. Persona Section */}
                <section>
                    <PersonaCard
                        persona={persona}
                        color={getPersonaColor(result.persona)}
                    />
                </section>

                {/* 2. Analysis Chart & Insights */}
                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                            수면 패턴 분석
                        </h3>
                        <RadarChart
                            data={chartData}
                            color={getPersonaChartColor(result.persona)}
                        />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                분석 인사이트
                            </h3>
                            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                {insights.map((insight, i) => (
                                    <p key={i} className="text-gray-700 leading-relaxed flex items-start">
                                        <span className="text-rose-500 mr-2 font-bold">·</span>
                                        {insight}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                수면 개선 제안
                            </h3>
                            <div className="bg-rose-50 rounded-xl p-6 space-y-4">
                                {recommendations.map((rec, i) => (
                                    <p key={i} className="text-gray-700 leading-relaxed flex items-start">
                                        <span className="text-rose-500 mr-2 font-bold">✓</span>
                                        {rec}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Ingredient Guide (Monetization) */}
                <section>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            수면 도움 성분 가이드
                        </h3>
                        <p className="text-gray-600">
                            수면 질 개선에 도움이 되는 성분 기준입니다
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {recommendedIngredients.map((ingredient) => (
                            <IngredientGuide key={ingredient.id} ingredient={ingredient} />
                        ))}
                        {recommendedIngredients.length === 0 && (
                            <div className="col-span-3 text-center text-gray-500 py-8 bg-gray-50 rounded-xl">
                                현재 특별히 권장되는 성분이 없습니다. 규칙적인 수면 습관을 유지하세요.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </ResultLayout>
    );
}
