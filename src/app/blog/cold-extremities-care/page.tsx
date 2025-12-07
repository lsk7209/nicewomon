import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Droplets, Flame, Activity, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "손발 냉증 줄이는 생활 루틴 | 나이스우먼 블로그",
    description: "보온, 수분·전해질, 저강도 순환 운동으로 손발 냉증을 완화하는 4단계 루틴과 자가 체크, 하루 시간표 예시를 제공합니다.",
    keywords: ["손발 냉증", "순환", "보온", "전해질", "저강도 운동", "자가 체크"],
    alternates: { canonical: "https://nicewomen.kr/blog/cold-extremities-care" },
};

export default function ColdExtremitiesCarePost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "warm", label: "보온/환경" },
        { id: "hydrate", label: "수분·전해질" },
        { id: "move", label: "저강도 순환 운동" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "dayplan", label: "하루 예시" },
    ];

    const warmTips = [
        "겹겹이 레이어링, 손목·발목 덮는 소재, 전기장판 과열 피하기",
        "손발 온수 세척/족욕 5~10분 후 완전 건조",
        "사무실/집은 21~23도 유지, 찬 바닥 장시간 노출 피하기",
    ];

    const hydrateTips = [
        "물·티를 자주 소량, 카페인 음료는 이른 오후까지만",
        "짠 음식 줄이고 칼륨·마그네슘 식품(콩, 바나나, 견과) 보충",
        "운동/사우나 후 전해질 소량 보충",
    ];

    const moves = [
        "발목 돌리기/까치발 들기 10회×2세트",
        "손목·손가락 스트레칭 1분, 악력 공 1~2분",
        "가벼운 걷기 5~10분, 오래 앉았다면 1시간마다 일어서기",
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-sky-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">손발 냉증 줄이는 생활 루틴</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.07</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        냉증은 보온, 수분·전해질, 저강도 순환 운동을 함께 적용할 때 완화가 빠릅니다.
                        간단한 루틴으로 일상에서 손발 따뜻함을 유지하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-sky-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">한눈에 보기</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-sky-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-sky-700 uppercase">보온</p>
                                    <p>레이어링, 손목·발목 커버, 온수 세척/족욕 후 완전 건조</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-sky-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-sky-700 uppercase">수분·전해질</p>
                                    <p>짠 음식 줄이고 물·티 분할 섭취, 칼륨·마그네슘 식품 보충</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-sky-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-sky-700 uppercase">순환</p>
                                    <p>발목·손목 루틴 + 1시간마다 2분 걷기, 5~10분 걷기 2~3회</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="warm" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">보온/환경</h2>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-orange-600" />
                                    따뜻하게 유지하기
                                </h3>
                                <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                                    {warmTips.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="hydrate" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">수분·전해질</h2>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-emerald-600" />
                                    균형 맞추기
                                </h3>
                                <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                                    {hydrateTips.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="move" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">저강도 순환 운동</h2>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <p className="text-gray-800 text-base leading-relaxed">하루 여러 번 짧게, 통증 없는 범위에서 시행하세요.</p>
                                <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                                    {moves.map((m) => (
                                        <li key={m}>{m}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="selfcheck" className="bg-white border border-sky-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-sky-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>손발이 하루에 2회 이상 시리고, 색이 창백해짐</li>
                            <li>실내에서도 21~23도에서 불편, 두꺼운 양말·장갑을 상시 착용</li>
                            <li>카페인·흡연 후 냉증이 심해짐</li>
                        </ul>
                        <p className="text-sm text-sky-700">2점 이상이면 카페인 줄이기, 보온·순환 루틴 강화, 증상 지속 시 의료 상담을 권장합니다.</p>
                    </section>

                    <section id="dayplan" className="bg-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-sky-600" />
                            하루 예시 (직장/재택)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-base leading-relaxed space-y-1">
                            <li>아침: 온수 세척/족욕 5분, 보온 레이어링, 따뜻한 차</li>
                            <li>근무 중: 1시간마다 2분 걷기+발목/손목 풀기, 물·티 분할</li>
                            <li>점심 후: 5~10분 걷기, 카페인 컷오프 14시</li>
                            <li>저녁: 가벼운 걷기 10분, 온수 족욕 후 완전 건조, 보습</li>
                        </ul>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">순환 점검하고 맞춤 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">나트륨 점수, 수분·전해질 플래너, 스트레스 테스트를 활용하세요.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sodium-intake-score">
                            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                나트륨 점수 →
                            </Button>
                        </Link>
                        <Link href="/tools/water-electrolyte-planner">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                수분·전해질 플래너 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


