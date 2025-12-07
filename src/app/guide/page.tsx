import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Moon, Brain, Pill, Activity, Sparkles, NotebookPen, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "건강 가이드 | 나이스우먼",
    description: "30~55세 여성을 위한 건강 정보, 호르몬 변화, 수면, 스트레스, 영양 가이드를 제공합니다.",
    keywords: ["여성 건강", "건강 가이드", "호르몬", "수면", "스트레스", "영양"],
    alternates: { canonical: "https://nicewomen.kr/guide" },
};

export default function GuidePage() {
    const guides = [
        {
            id: "hormone-basics",
            title: "호르몬 기초 지식",
            description: "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화",
            icon: Heart,
            color: "text-rose-600 bg-rose-50",
            href: "/guide/hormone-basics",
        },
        {
            id: "30s-health",
            title: "30대 여성 건강",
            description: "30대 여성의 주요 건강 변화와 예방, 관리 방법",
            icon: Activity,
            color: "text-green-600 bg-green-50",
            href: "/guide/30s-health",
        },
        {
            id: "40s-health",
            title: "40대 여성 건강",
            description: "40대 여성의 호르몬 변화와 갱년기 전기 관리",
            icon: Activity,
            color: "text-orange-600 bg-orange-50",
            href: "/guide/40s-health",
        },
        {
            id: "50s-health",
            title: "50대 여성 건강",
            description: "50대 여성의 폐경기 관리와 건강 유지 방법",
            icon: Activity,
            color: "text-purple-600 bg-purple-50",
            href: "/guide/50s-health",
        },
        {
            id: "sleep",
            title: "수면 가이드",
            description: "수면 질을 개선하는 과학적 방법과 실천 가능한 팁",
            icon: Moon,
            color: "text-blue-600 bg-blue-50",
            href: "/guide/sleep",
        },
        {
            id: "stress",
            title: "스트레스 관리",
            description: "스트레스를 효과적으로 관리하고 회복하는 방법",
            icon: Brain,
            color: "text-indigo-600 bg-indigo-50",
            href: "/guide/stress",
        },
        {
            id: "nutrition",
            title: "영양 가이드",
            description: "여성 건강에 필수적인 영양소와 올바른 섭취 방법",
            icon: Pill,
            color: "text-amber-600 bg-amber-50",
            href: "/guide/nutrition",
        },
        {
            id: "symptoms",
            title: "증상별 가이드",
            description: "여성 건강 증상별 원인, 대처법, 관련 성분 정보를 제공합니다.",
            icon: Heart,
            color: "text-rose-600 bg-rose-50",
            href: "/guide/symptoms",
        },
        {
            id: "blood-sugar",
            title: "혈당 관리 가이드",
            description: "식사 순서, 간격, 저GI 식품으로 혈당 스파이크를 줄이는 법",
            icon: Pill,
            color: "text-emerald-700 bg-emerald-50",
            href: "/guide/blood-sugar",
        },
        {
            id: "pms",
            title: "PMS/PMDD 관리",
            description: "주기별 증상 완화, 운동·영양·멘탈 루틴을 안내합니다.",
            icon: Brain,
            color: "text-indigo-700 bg-indigo-50",
            href: "/guide/pms",
        },
        {
            id: "cbti-basics",
            title: "불면 CBT-I 핵심",
            description: "자극조절, 수면 제한, 인지 재구성, 수면 위생 요약",
            icon: Moon,
            color: "text-blue-700 bg-blue-50",
            href: "/guide/cbti-basics",
        },
        {
            id: "trf-fasting-women",
            title: "시간제한식사(TRF) 여성 유의",
            description: "14:10부터 시작해 호르몬·수면 부담을 줄이는 방법",
            icon: Pill,
            color: "text-emerald-700 bg-emerald-50",
            href: "/guide/trf-fasting-women",
        },
        {
            id: "thyroid-hypo-lifestyle",
            title: "갑상선 저하 생활 가이드",
            description: "피로·한기·부종 시 점검할 식사·운동·의료 상담 포인트",
            icon: Heart,
            color: "text-slate-700 bg-slate-50",
            href: "/guide/thyroid-hypo-lifestyle",
        },
        {
            id: "food-label-reading",
            title: "식품 라벨 읽기",
            description: "당·나트륨·지방을 1분 안에 체크하는 방법",
            icon: BookOpen,
            color: "text-amber-700 bg-amber-50",
            href: "/guide/food-label-reading",
        },
        {
            id: "pelvic-floor-care",
            title: "골반저 근육 케어",
            description: "요실금 예방 10분 루틴과 호흡·자세 주의점",
            icon: Activity,
            color: "text-rose-700 bg-rose-50",
            href: "/guide/pelvic-floor-care",
        },
        {
            id: "hrv-monitoring-guide",
            title: "HRV 회복 모니터링",
            description: "베이스라인 만들기, 회복일·강도 조정법",
            icon: Heart,
            color: "text-indigo-700 bg-indigo-50",
            href: "/guide/hrv-monitoring-guide",
        },
        {
            id: "migraine-trigger-guide",
            title: "편두통 트리거 관리",
            description: "수면·카페인·식사·호르몬 요인 추적과 완화 루틴",
            icon: Brain,
            color: "text-purple-700 bg-purple-50",
            href: "/guide/migraine-trigger-guide",
        },
        {
            id: "reflux-gerd-lifestyle",
            title: "역류 생활 관리",
            description: "식사 시점·자극 식품·수면 자세로 속쓰림 줄이기",
            icon: Pill,
            color: "text-amber-700 bg-amber-50",
            href: "/guide/reflux-gerd-lifestyle",
        },
        {
            id: "air-quality-sleep",
            title: "공기질 나쁜 날 수면",
            description: "미세먼지·건조 시 침실 청정·가습 체크리스트",
            icon: Moon,
            color: "text-sky-700 bg-sky-50",
            href: "/guide/air-quality-sleep",
        },
        {
            id: "morning-evening-routine",
            title: "아침·저녁 루틴 설계",
            description: "빛·컷오프·조도로 하루 시작과 마무리를 고정",
            icon: Activity,
            color: "text-amber-700 bg-amber-50",
            href: "/guide/morning-evening-routine",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <BookOpen className="w-5 h-5" />
                        <span>건강 정보 라이브러리</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        <span className="text-rose-600">나이스우먼</span> 건강 가이드
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        30~55세 여성의 건강한 삶을 위한
                        <br />
                        <strong className="text-gray-800">과학적 근거 기반 건강 정보</strong>를 제공합니다
                    </p>

                    <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900">
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">호르몬/연령</p>
                                <p>20~50대 전환기별 호르몬 변화, 검진·영양·운동 루틴 요약</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">수면/스트레스</p>
                                <p>컷오프·조도·호흡·CBT-I 핵심, 번아웃·편두통·역류 등 생활관리 링크</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-rose-100">
                            <CardContent className="pt-4 space-y-1">
                                <p className="text-xs font-semibold text-rose-700 uppercase">영양/혈당</p>
                                <p>철·엽산·칼슘·오메가-3, 혈당/라벨/TRF 유의사항, 도구/테스트 바로가기</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => {
                        const Icon = guide.icon;
                        return (
                            <Link key={guide.id} href={guide.href}>
                                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-rose-200 h-full">
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-14 h-14 rounded-xl ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-rose-600 transition-colors">
                                            {guide.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed text-gray-600">
                                            {guide.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-sm text-rose-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                            자세히 보기 →
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Why Trust Us Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            왜 나이스우먼 가이드를 신뢰할 수 있나요?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">📚</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">과학적 근거</h3>
                                <p className="text-gray-600 text-sm">
                                    WHO, NIH, 보건복지부 등 신뢰할 수 있는 기관의 연구 자료를 기반으로 작성되었습니다
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">👩‍⚕️</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">전문가 검수</h3>
                                <p className="text-gray-600 text-sm">
                                    Health Lab Research Team의 전문가들이 검토하고 승인한 정보만 제공합니다
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🔄</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">정기 업데이트</h3>
                                <p className="text-gray-600 text-sm">
                                    최신 연구 결과를 반영하여 정기적으로 내용을 업데이트합니다
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-rose-50 py-16 border-t border-rose-100">
                <div className="container mx-auto px-4 max-w-5xl space-y-8">
                    <div className="flex items-center gap-2 text-rose-700">
                        <Sparkles className="w-5 h-5" />
                        <p className="text-sm font-semibold">자가 체크 & FAQ</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-rose-100">
                            <CardHeader className="space-y-1">
                                <p className="text-xs uppercase text-rose-700 font-semibold">자가 체크 (0~3점)</p>
                                <CardTitle className="text-lg text-gray-900">지금 필요한 가이드는?</CardTitle>
                                <CardDescription className="text-base leading-relaxed text-gray-700">
                                    수면/스트레스/영양·혈당/호르몬·연령별 가이드에서 2개 이상 궁금하거나, 최근 1년 검진을 놓쳤다면 해당 섹션을 먼저 확인하세요.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 text-gray-800 text-base leading-relaxed space-y-1">
                                    <li>수면/카페인/컷오프가 불규칙하다</li>
                                    <li>PMS·번아웃·두통·역류 등 생활 증상이 잦다</li>
                                    <li>철·비타민 D·지질·혈당 검진을 1년 이상 하지 않았다</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border border-rose-100">
                            <CardHeader className="space-y-1">
                                <p className="text-xs uppercase text-rose-700 font-semibold">FAQ</p>
                                <CardTitle className="text-lg text-gray-900">자주 찾는 페이지</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-base text-gray-800 leading-relaxed">
                                <p>- 수면/불면 → `수면`, `CBT-I`, `공기질 수면`, `아침·저녁 루틴`</p>
                                <p>- 스트레스/번아웃 → `스트레스`, `번아웃 회복`, `편두통`, `HRV`</p>
                                <p>- 혈당/체중/라벨 → `혈당`, `TRF`, `식품 라벨`, `영양`</p>
                                <p>- 호르몬/연령 → `호르몬 기초`, `30/40/50대`, `PMS`, `갑상선`</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
