"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveResult } from "@/lib/storage";
import { TOOL_METADATA } from "@/lib/config";
import { toast } from "sonner";

export default function BodyAgePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        birthYear: "",
        height: "",
        weight: "",
        waist: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const height = parseFloat(formData.height);
        const weight = parseFloat(formData.weight);
        const waist = parseFloat(formData.waist);
        const birthYear = parseInt(formData.birthYear);

        if (!height || !weight || !waist || !birthYear) {
            toast.error("모든 항목을 입력해주세요.");
            return;
        }

        if (height < 100 || height > 250) {
            toast.error("키를 정확히 입력해주세요 (100~250cm).");
            return;
        }

        if (weight < 30 || weight > 200) {
            toast.error("몸무게를 정확히 입력해주세요 (30~200kg).");
            return;
        }

        if (waist < 40 || waist > 200) {
            toast.error("허리둘레를 정확히 입력해주세요 (40~200cm).");
            return;
        }

        // 결과 저장 (점수는 WHtR * 100으로 저장하여 통일성 유지, 페르소나는 나중에 계산)
        // Body Age는 별도의 계산 로직이 필요하므로 score 필드를 WHtR로 활용
        const whtr = waist / height;

        saveResult({
            toolId: "body-age",
            score: whtr * 100, // 0.5 -> 50점
            persona: "body-age", // 임시 페르소나 ID
            answers: {
                birthYear,
                height,
                weight,
                waist,
            },
        });

        router.push("/tools/body-age/result");
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 60 }, (_, i) => currentYear - 20 - i); // 20세 ~ 80세

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {TOOL_METADATA["body-age"].title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {TOOL_METADATA["body-age"].description}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="birthYear">출생년도</Label>
                            <select
                                id="birthYear"
                                name="birthYear"
                                value={formData.birthYear}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">선택하세요</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}년
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="height">키 (cm)</Label>
                            <Input
                                id="height"
                                name="height"
                                type="number"
                                placeholder="예: 160"
                                value={formData.height}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="weight">몸무게 (kg)</Label>
                            <Input
                                id="weight"
                                name="weight"
                                type="number"
                                placeholder="예: 55"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="waist">허리둘레 (cm)</Label>
                            <Input
                                id="waist"
                                name="waist"
                                type="number"
                                placeholder="예: 70"
                                value={formData.waist}
                                onChange={handleChange}
                            />
                            <p className="text-xs text-gray-500">
                                * 배꼽 높이에서 측정해주세요.
                            </p>
                        </div>

                        <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-lg py-6">
                            체형 나이 확인하기
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
