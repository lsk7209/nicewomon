"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Ingredient, getCoupangLink, getIherbLink } from "@/lib/ingredients";

interface IngredientGuideProps {
    ingredient: Ingredient;
}

export function IngredientGuide({ ingredient }: IngredientGuideProps) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-sm text-rose-600 font-medium mb-1">
                            {ingredient.nameEn}
                        </div>
                        <CardTitle className="text-xl">{ingredient.name}</CardTitle>
                    </div>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {ingredient.recommendedDosage}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                    {ingredient.description}
                </p>

                <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-900">추천 형태</div>
                    <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        {ingredient.bestForm}
                    </div>
                </div>

                <div className="pt-2 flex gap-2">
                    <Button
                        variant="outline"
                        className="flex-1 text-xs h-9"
                        onClick={() => window.open(getCoupangLink(ingredient.searchKeyword), "_blank")}
                    >
                        쿠팡 검색
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 text-xs h-9"
                        onClick={() => window.open(getIherbLink(ingredient.searchKeyword), "_blank")}
                    >
                        아이허브 검색
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
