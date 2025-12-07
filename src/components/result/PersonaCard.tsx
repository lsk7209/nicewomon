"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Persona } from "@/lib/persona";
import { cn } from "@/lib/utils";

interface PersonaCardProps {
    persona: Persona;
    color: string;
}

export function PersonaCard({ persona, color }: PersonaCardProps) {
    return (
        <Card className={cn("border-2", color.replace("text-", "border-").replace("bg-", "border-opacity-20"))}>
            <CardHeader className="text-center pb-2">
                <div className="text-6xl mb-4">{persona.icon}</div>
                <div className={cn("text-sm font-bold uppercase tracking-wider mb-1", color)}>
                    {persona.subtitle}
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                    {persona.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-center text-gray-600 leading-relaxed">
                    {persona.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="mr-2">🔍</span> 주요 특징
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {persona.characteristics.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="mr-2">💡</span> 맞춤 처방
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {persona.recommendations.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
