"use client";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface QuestionSliderProps {
    value: number;
    onChange: (value: number) => void;
    labels: [string, string, string, string];
    description?: string;
    onAutoAdvance?: () => void;
}

export function QuestionSlider({
    value,
    onChange,
    labels,
    description,
    onAutoAdvance,
}: QuestionSliderProps) {
    return (
        <div className="space-y-8 py-4">
            {description && (
                <p className="text-center text-gray-600 mb-8 text-lg">
                    {description}
                </p>
            )}

            <div className="px-2">
                <Slider
                    defaultValue={[0]}
                    value={[value]}
                    max={3}
                    step={1}
                    onValueChange={(vals) => onChange(vals[0])}
                    className="py-4"
                />
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-sm">
                {labels.map((label, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            onChange(index);
                            onAutoAdvance?.();
                        }}
                        className={cn(
                            "cursor-pointer transition-colors rounded-lg py-2 px-1",
                            value === index
                                ? "font-bold text-rose-600 bg-rose-50"
                                : "text-gray-500 hover:bg-gray-50"
                        )}
                    >
                        <div className="mb-1 text-xs text-gray-400">
                            {index}점
                        </div>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
