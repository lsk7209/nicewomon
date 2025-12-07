"use client";

import {
    Radar,
    RadarChart as RechartsRadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

interface RadarChartProps {
    data: Array<{ subject: string; A: number; fullMark: number }>;
    color: string;
}

export function RadarChart({ data, color }: RadarChartProps) {
    return (
        <div className="w-full h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#4b5563", fontSize: 12 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 3]} tick={false} axisLine={false} />
                    <Radar
                        name="My Score"
                        dataKey="A"
                        stroke={color}
                        fill={color}
                        fillOpacity={0.6}
                    />
                </RechartsRadarChart>
            </ResponsiveContainer>
        </div>
    );
}
