import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Brain, Wind, Utensils, StretchHorizontal, Activity, NotebookPen, AlertCircle } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "브레인 포그 날, 10분 회복 루틴 | 나이스우먼 블로그",
    description: "호흡·스트레칭·저당 스낵으로 10분 안에 집중력을 회복하는 방법과 저혈당·수면 부족·카페인 과다 신호를 구분하는 체크리스트.",
    keywords: ["브레인포그", "집중력", "스트레스", "회복 루틴", "호흡", "저혈당"],
    alternates: { canonical: "https://nicewomen.kr/blog/brain-fog-10min-recovery" },
};

export default function BrainFogRecoveryPost() {
    const routine = [
        { title: "호흡 2분", detail: "4-4-4-4 박스호흡 8회 또는 4-7-8 호흡 4세트. 앉아서 복식호흡." },
        { title: "스트레칭 5분", detail: "어깨 돌리기 10회, 목 측면 10초×3, 흉추 회전 좌우 10회, 가슴 열기 1분." },
        { title: "스낵·수분 3분", detail: "견과류 한 줌+그릭요거트 소량 또는 삶은 달걀 1개 + 물 300ml." },
    ];

    const triggers = [
        "야근/수면 부족으로 인한 렘수면 감소",
        "카페인 과다/혈당 스파이크 후 저하",
        "장시간 앉은 자세로 인한 혈류 저하",
    ];

    const tocItems = [
        { id: "summary", label: "핵심 요약" },
        { id: "causes", label: "브레인 포그 원인" },
        { id: "routine", label: "10분 회복 루틴" },
        { id: "snack", label: "먹을 것" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>스트레스</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        브레인 포그 날, 10분 회복 루틴
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.01</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        멍하고 집중이 안 되는 날, 10분이면 할 수 있는 회복 루틴을 제안합니다. 호흡-스트레칭-간단 스낵 순서로 뇌 혈류와 안정감을 회복하세요.
                        저혈당·수면 부족·카페인 과다 신호를 구분해 맞춤 대응을 더합니다.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                    <div className="prose prose-lg max-w-none space-y-8">
                    <section id="summary" className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-6 h-6 text-indigo-600" />
                            핵심 요약
                        </h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">10분 루틴</p>
                                    <p>호흡 2분 + 스트레칭 5분 + 저당 스낵·수분 3분</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">빈약 에너지 대처</p>
                                    <p>견과+단백질, 물 300ml, 카페인은 오후 1~2시 이후 중단</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-indigo-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-indigo-700 uppercase">의료 상담 시점</p>
                                    <p>흑색변/심한 피로·호흡곤란/두근거림이 반복되면 검진 필요</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section id="causes" className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Brain className="w-6 h-6 text-indigo-600" />
                            브레인 포그 주요 원인
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base leading-relaxed">
                            {triggers.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-indigo-700">밤 수면 6시간 미만, 카페인 과다(200mg 이상), 과당 많은 간식 후 멍함이 반복되면 루틴 적용 + 원인 기록을 함께 하세요.</p>
                    </section>

                    <section id="routine" className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Wind className="w-6 h-6 text-indigo-600" />
                            10분 회복 루틴
                        </h2>
                        {routine.map((step) => (
                            <Card key={step.title} className="border-l-4 border-indigo-500">
                                <CardContent className="pt-5 space-y-2">
                                    <p className="font-semibold text-gray-900 text-lg">{step.title}</p>
                                    <p className="text-gray-800 text-base leading-relaxed">{step.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="snack" className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                            <Utensils className="w-5 h-5" />
                            무엇을 먹을까?
                        </h3>
                        <p className="text-gray-800 text-base leading-relaxed">
                            혈당 급락을 막기 위해 당류 많은 간식 대신 단백질·지방이 있는 스낵을 선택하세요. 추천: 견과 한 줌+그릭요거트 소량, 또는 삶은 달걀 1개+당도 낮은 과일 소량.
                            수분은 카페인 없는 따뜻한 차나 물 300ml.
                        </p>
                    </section>
                    <section id="selfcheck" className="bg-white border border-indigo-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-indigo-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>수면 6시간 이하 또는 새벽 각성이 잦다</li>
                            <li>카페인 200mg 이상 섭취 후 두근거림·손떨림</li>
                            <li>달콤한 간식 후 1~2시간 내 멍함·졸림이 심하다</li>
                            <li>앉은 자세가 90분 이상 이어지고 어깨·목이 뻐근하다</li>
                        </ul>
                        <p className="text-sm text-indigo-700">2점 이상이면 10분 루틴 + 카페인 컷오프(13~14시) + 단백질 스낵으로 조정하세요.</p>
                    </section>

                    <section id="faq" className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-indigo-600" />
                            FAQ
                        </h3>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900">카페인을 더 마셔도 될까?</p>
                                <p className="text-gray-800 text-base leading-relaxed">브레인 포그가 올 때 추가 카페인은 일시 각성을 주지만 이후 더 큰 피로를 부를 수 있습니다. 오후 1~2시 이후는 컷오프를 권장합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900">저혈당인지 어떻게 알까?</p>
                                <p className="text-gray-800 text-base leading-relaxed">손떨림·식은땀·심한 허기·어지럼이 동반되면 저혈당 가능성이 있습니다. 단백질+지방 간식과 물을 먼저 섭취하고, 반복되면 검진을 권장합니다.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-indigo-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900">언제 병원에 가야 하나?</p>
                                <p className="text-gray-800 text-base leading-relaxed">흑색변, 심한 피로와 호흡곤란, 지속 두근거림/흉통, 시야 흐림이 동반되면 즉시 진료를 받으세요.</p>
                            </CardContent>
                        </Card>
                    </section>
                    </div>
                </div>

                <section className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">현재 스트레스/피로 상태 점검</h2>
                    <p className="text-lg mb-8 opacity-90">
                        스트레스·수면 테스트로 컨디션을 측정하고 회복 루틴을 추천받으세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                스트레스·번아웃 테스트 →
                            </Button>
                        </Link>
                        <Link href="/blog/caffeine-cutoff-guide">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                카페인 컷오프 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

