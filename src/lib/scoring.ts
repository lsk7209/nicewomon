/**
 * 점수 계산 및 분석 엔진
 */

import type { PersonaType } from "./storage";

export interface ScoreLevel {
    level: "normal" | "early" | "mid" | "high";
    label: string;
    description: string;
    color: string;
}

export interface AgeComparison {
    userScore: number;
    ageGroupAverage: number;
    percentile: number;
    comparison: "above" | "average" | "below";
}

export interface ScoreAnalysis {
    totalScore: number;
    maxScore: number;
    percentage: number;
    level: ScoreLevel;
    ageComparison?: AgeComparison;
    topSymptoms: Array<{ name: string; score: number }>;
}

/**
 * 점수 레벨 분류
 */
export function getScoreLevel(score: number, maxScore: number): ScoreLevel {
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) {
        return {
            level: "normal",
            label: "정상 범위",
            description: "건강한 상태를 유지하고 있습니다",
            color: "text-green-600 bg-green-50",
        };
    } else if (percentage <= 50) {
        return {
            level: "early",
            label: "초기 변화",
            description: "가벼운 증상이 나타나기 시작했습니다",
            color: "text-blue-600 bg-blue-50",
        };
    } else if (percentage <= 75) {
        return {
            level: "mid",
            label: "중간 단계",
            description: "여러 증상이 나타나고 있습니다",
            color: "text-orange-600 bg-orange-50",
        };
    } else {
        return {
            level: "high",
            label: "본격화 단계",
            description: "적극적인 관리가 필요합니다",
            color: "text-rose-600 bg-rose-50",
        };
    }
}

/**
 * 연령대별 평균 점수 (통계 데이터 기반 - 가상)
 */
const AGE_GROUP_AVERAGES: Record<string, number> = {
    "30-34": 8,
    "35-39": 10,
    "40-44": 13,
    "45-49": 16,
    "50-54": 18,
    "55+": 17,
};

/**
 * 연령대 그룹 결정
 */
function getAgeGroup(age: number): string {
    if (age < 35) return "30-34";
    if (age < 40) return "35-39";
    if (age < 45) return "40-44";
    if (age < 50) return "45-49";
    if (age < 55) return "50-54";
    return "55+";
}

/**
 * 연령대 비교 분석
 */
export function compareWithAgeGroup(
    score: number,
    age: number
): AgeComparison {
    const ageGroup = getAgeGroup(age);
    const average = AGE_GROUP_AVERAGES[ageGroup];

    // 백분위 계산 (간단한 정규분포 가정)
    const stdDev = 4; // 표준편차
    const zScore = (score - average) / stdDev;
    const percentile = Math.round(
        (1 - (1 / (1 + Math.exp(-zScore * 0.5)))) * 100
    );

    let comparison: "above" | "average" | "below";
    if (score < average - stdDev) {
        comparison = "below";
    } else if (score > average + stdDev) {
        comparison = "above";
    } else {
        comparison = "average";
    }

    return {
        userScore: score,
        ageGroupAverage: average,
        percentile: Math.max(0, Math.min(100, percentile)),
        comparison,
    };
}

/**
 * 종합 점수 분석
 */
export function analyzeScore(
    answers: Record<string, number>,
    questionNames: Record<string, string>,
    age?: number
): ScoreAnalysis {
    const scores = Object.entries(answers);
    const totalScore = scores.reduce((sum, [, score]) => sum + score, 0);
    const maxScore = scores.length * 3; // 각 문항 최대 3점

    // 상위 증상 추출 (점수 높은 순)
    const topSymptoms = scores
        .map(([key, score]) => ({
            name: questionNames[key] || key,
            score,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    const analysis: ScoreAnalysis = {
        totalScore,
        maxScore,
        percentage: (totalScore / maxScore) * 100,
        level: getScoreLevel(totalScore, maxScore),
        topSymptoms,
    };

    if (age) {
        analysis.ageComparison = compareWithAgeGroup(totalScore, age);
    }

    return analysis;
}

/**
 * 인사이트 생성
 */
export function generateInsights(
    analysis: ScoreAnalysis,
    persona: PersonaType
): string[] {
    const insights: string[] = [];

    // 점수 레벨 기반 인사이트
    if (analysis.level.level === "normal") {
        insights.push(
            "현재 건강 상태가 매우 양호합니다. 예방적 관리에 집중하세요."
        );
    } else if (analysis.level.level === "early") {
        insights.push(
            "초기 변화가 감지되었습니다. 지금부터 관리하면 큰 개선을 기대할 수 있습니다."
        );
    } else if (analysis.level.level === "mid") {
        insights.push(
            "여러 증상이 나타나고 있습니다. 체계적인 관리가 필요한 시점입니다."
        );
    } else {
        insights.push(
            "증상이 본격화되었습니다. 전문의 상담을 고려해보세요."
        );
    }

    // 연령 비교 인사이트
    if (analysis.ageComparison) {
        const { comparison, percentile } = analysis.ageComparison;
        if (comparison === "below") {
            insights.push(
                `같은 연령대 평균보다 증상이 적습니다 (상위 ${100 - percentile}%). 현재 습관을 유지하세요.`
            );
        } else if (comparison === "above") {
            insights.push(
                `같은 연령대 평균보다 증상이 많습니다 (상위 ${percentile}%). 적극적인 관리가 필요합니다.`
            );
        } else {
            insights.push(
                `같은 연령대의 평균적인 수준입니다. 예방과 관리를 병행하세요.`
            );
        }
    }

    // 주요 증상 인사이트
    if (analysis.topSymptoms.length > 0) {
        const topSymptom = analysis.topSymptoms[0];
        if (topSymptom.score >= 2) {
            insights.push(
                `'${topSymptom.name}' 증상이 가장 두드러집니다. 이 부분에 집중적으로 대응하세요.`
            );
        }
    }

    return insights;
}

/**
 * 개선 제안 생성
 */
export function generateRecommendations(
    analysis: ScoreAnalysis
): string[] {
    const recommendations: string[] = [];

    // 상위 증상별 맞춤 제안
    analysis.topSymptoms.forEach((symptom) => {
        if (symptom.score >= 2) {
            const suggestion = getSymptomRecommendation(symptom.name);
            if (suggestion) {
                recommendations.push(suggestion);
            }
        }
    });

    // 일반적인 제안
    if (analysis.percentage > 50) {
        recommendations.push("규칙적인 수면 스케줄을 만드세요 (매일 같은 시간)");
        recommendations.push("주 3회 이상 30분 이상 유산소 운동을 하세요");
    }

    return recommendations.slice(0, 4); // 최대 4개
}

/**
 * 증상별 맞춤 제안
 */
function getSymptomRecommendation(symptomName: string): string | null {
    const recommendations: Record<string, string> = {
        수면: "수면 환경을 개선하세요 (어두운 방, 시원한 온도, 조용한 환경)",
        피로: "비타민 B군과 철분 섭취를 늘리세요",
        감정: "명상이나 요가 등 마음챙김 활동을 시작하세요",
        홍조: "시원한 환경을 유지하고, 자극적인 음식을 피하세요",
        "질 건조": "충분한 수분 섭취와 오메가3 보충을 고려하세요",
        관절: "저강도 스트레칭과 수영 등을 시작하세요",
        집중력: "규칙적인 휴식과 충분한 수면을 취하세요",
        생리: "호르몬 변화를 기록하고, 필요시 전문의 상담을 받으세요",
    };

    for (const [key, recommendation] of Object.entries(recommendations)) {
        if (symptomName.includes(key)) {
            return recommendation;
        }
    }

    return null;
}
