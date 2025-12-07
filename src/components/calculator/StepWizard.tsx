"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepWizardProps {
    totalSteps: number;
    currentStep: number;
    onStepChange: (step: number) => void;
    onComplete: () => void;
    canNext: boolean;
    children: React.ReactNode;
    title?: string;
}

export function StepWizard({
    totalSteps,
    currentStep,
    onStepChange,
    onComplete,
    canNext,
    children,
    title,
}: StepWizardProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const newProgress = ((currentStep + 1) / totalSteps) * 100;
        setProgress(newProgress);
    }, [currentStep, totalSteps]);

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            onStepChange(currentStep + 1);
        } else {
            onComplete();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            onStepChange(currentStep - 1);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>
                        Step {currentStep + 1} / {totalSteps}
                    </span>
                    <span>{Math.round(progress)}% 완료</span>
                </div>
                <Progress value={progress} className="h-2" />
                {title && (
                    <h2 className="text-2xl font-bold text-center mt-6 text-gray-900">
                        {title}
                    </h2>
                )}
            </div>

            {/* Content */}
            <div className="min-h-[300px] mb-8 animate-fade-in">
                {children}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t">
                <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="w-24"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    이전
                </Button>

                <Button
                    onClick={handleNext}
                    disabled={!canNext}
                    className={cn(
                        "w-32 transition-all",
                        canNext ? "bg-rose-600 hover:bg-rose-700" : "bg-gray-300"
                    )}
                >
                    {currentStep === totalSteps - 1 ? (
                        <>
                            결과 보기
                            <CheckCircle2 className="w-4 h-4 ml-2" />
                        </>
                    ) : (
                        <>
                            다음
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
