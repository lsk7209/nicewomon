"use client";

import { cn } from "@/lib/utils";

interface ChipSelectorProps {
    options: Array<{ value: string; label: string }>;
    value: string | string[];
    onChange: (value: string | string[]) => void;
    multiple?: boolean;
}

export function ChipSelector({
    options,
    value,
    onChange,
    multiple = false,
}: ChipSelectorProps) {
    const isSelected = (optionValue: string) => {
        if (multiple && Array.isArray(value)) {
            return value.includes(optionValue);
        }
        return value === optionValue;
    };

    const handleClick = (optionValue: string) => {
        if (multiple && Array.isArray(value)) {
            if (value.includes(optionValue)) {
                onChange(value.filter((v) => v !== optionValue));
            } else {
                onChange([...value, optionValue]);
            }
        } else {
            onChange(optionValue);
        }
    };

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                        isSelected(option.value)
                            ? "bg-rose-600 text-white border-rose-600 shadow-md transform scale-105"
                            : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                    )}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
