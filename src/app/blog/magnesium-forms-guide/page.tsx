import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Pill, Moon, Dumbbell } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "마그네슘 형태별 효능과 복용 타이밍 | 나이스우먼 블로그",
    description: "글리시네이트·시트레이트 등 형태별 차이와 수면·근육·PMS 목적별 복용법을 정리합니다.",
    keywords: ["마그네슘", "수면", "근육", "PMS", "보충제"],
    alternates: { canonical: "https://nicewomen.kr/blog/magnesium-forms-guide" },
};

export default function MagnesiumFormsGuidePost() {
    const forms = [
        { name: "글리시네이트", use: "수면·불안 완화", note: "위 자극 적고 흡수율 우수, 취침 30~60분 전 200~400mg" },
        { name: "시트레이트", use: "근육 이완·변비 완화", note: "수분과 함께 복용, 변비에 민감하면 용량 조절" },
        { name: "말레이트", use: "에너지·피로", note: "아침/점심에 200~400mg" },
        { name: "타우레이트", use: "심혈관 안정", note: "카페인 민감·심계항진이 있다면 고려" },
    ];

    const recommended = [
        { title: "수면·긴장 완화", detail: "글리시네이트 200~400mg, 취침 30~60분 전. 카페인 컷오프와 함께." },
        { title: "근육 경련·운동 후", detail: "시트레이트/말레이트 200~400mg, 운동 후 수분과 함께." },
        { title: "PMS", detail: "글리시네이트·타우레이트 소량을 낮/저녁으로 나누어 복용." },
    ];

    const tocItems = [
        { id: "forms", label: "형태별 특징" },
        { id: "timing", label: "목적별 타이밍" },
        { id: "caution", label: "복용 시 주의" },
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        마그네슘 형태별 효능과 복용 타이밍
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>6분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        목적에 맞는 형태와 복용 시간을 알면 적은 용량으로도 효과를 높일 수 있습니다. 복용 전 약물·질환 여부를 반드시 확인하세요.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="forms" className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Pill className="w-6 h-6 text-amber-600" />
                            형태별 특징
                        </h2>
                        {forms.map((f) => (
                            <Card key={f.name} className="border-l-4 border-amber-500">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{f.name}</p>
                                    <p className="text-gray-700 text-sm">{f.use}</p>
                                    <p className="text-gray-600 text-xs">{f.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="timing" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Moon className="w-6 h-6 text-amber-600" />
                            목적별 추천 타이밍
                        </h2>
                        {recommended.map((r) => (
                            <Card key={r.title} className="border-l-4 border-amber-400">
                                <CardContent className="pt-5">
                                    <p className="font-semibold text-gray-900">{r.title}</p>
                                    <p className="text-gray-700 text-sm">{r.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="caution" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                            <Dumbbell className="w-5 h-5" />
                            복용 시 주의
                        </h3>
                        <p className="text-gray-700 text-sm">
                            신장 질환, 저혈압, 약물 복용(항생제·갑상선 호르몬 등)이 있다면 복용 전 의료진과 상담이 필요합니다.
                            과량 복용 시 설사·복통이 생길 수 있어 소량으로 나누어 시작하세요.
                        </p>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">나에게 맞는 영양 성분 확인</h2>
                    <p className="text-lg mb-8 opacity-90">
                        영양소 결핍 분석기로 부족 가능성을 확인하고 맞춤 성분 가이드를 받아보세요.
                    </p>
                    <Link href="/tools/nutrients">
                        <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석기 →
                        </Button>
                    </Link>
                </section>
            </article>
        </div>
    );
}

