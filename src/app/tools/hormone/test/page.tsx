"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StepWizard } from "@/components/calculator/StepWizard";
import { QuestionSlider } from "@/components/calculator/QuestionSlider";
import { HORMONE_QUESTIONS, QUESTION_NAMES } from "@/lib/questions";
import { saveResult } from "@/lib/storage";
import { classifyPersona } from "@/lib/persona";
import { analyzeScore } from "@/lib/scoring";
import { TOOL_METADATA } from "@/lib/config";

export default function HormoneTestPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});

    const handleAnswer = (value: number) => {
        const questionId = HORMONE_QUESTIONS[currentStep].id;
        setAnswers((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleComplete = () => {
        // 점수 계산
        const analysis = analyzeScore(answers, QUESTION_NAMES);
        const persona = classifyPersona(analysis.totalScore);

        // 결과 저장
        saveResult({
            toolId: "hormone",
            score: analysis.totalScore,
            persona,
            answers,
        });

        // 결과 페이지로 이동
        router.push("/tools/hormone/result");
    };

    const handleAutoAdvance = () => {
        if (currentStep < HORMONE_QUESTIONS.length - 1) {
            setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, 300);
        } else {
            setTimeout(() => {
                handleComplete();
            }, 300);
        }
    };

    const currentQuestion = HORMONE_QUESTIONS[currentStep];
    const currentAnswer = answers[currentQuestion.id] ?? 0;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {TOOL_METADATA.hormone.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {TOOL_METADATA.hormone.description}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    <StepWizard
                        totalSteps={HORMONE_QUESTIONS.length}
                        currentStep={currentStep}
                        onStepChange={setCurrentStep}
                        onComplete={handleComplete}
                        canNext={true} // 슬라이더는 항상 값이 있음 (기본 0)
                        title={currentQuestion.text}
                    >
                        <QuestionSlider
                            value={currentAnswer}
                            onChange={handleAnswer}
                            onAutoAdvance={handleAutoAdvance}
                            labels={currentQuestion.labels}
                            description={currentQuestion.description}
                        />
                    </StepWizard>
                </div>
            </div>
        </div>
    );
}
