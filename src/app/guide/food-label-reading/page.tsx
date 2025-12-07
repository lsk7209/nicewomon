import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ScanBarcode, PercentCircle, AlertTriangle, NotebookPen, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "식품 라벨 읽기: 당·나트륨·지방 빠르게 확인 | 나이스우먼",
    description: "총 당류와 첨가당, 나트륨 1일 기준, 포화·트랜스지방을 1분 안에 점검하는 라벨 읽기 체크리스트.",
    keywords: ["식품 라벨", "나트륨", "당류", "포화지방", "트랜스지방"],
    alternates: { canonical: "https://nicewomen.kr/guide/food-label-reading" },
};

export default function FoodLabelReadingGuide() {
    const checks = [
        "총 내용량 대비 1회 제공량이 과소 설정되지 않았는지",
        "당류: 총 당류와 첨가당 모두 확인, 10g 이상이면 주 1~2회 이내",
        "나트륨: %DV(하루 기준치) 20% 이하면 상대적으로 안전",
        "포화/트랜스: 포화지방 1회 1g↑ 주의, 트랜스는 0g 표기 확인",
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "checklist", label: "1분 체크리스트" },
        { id: "daily", label: "1일 기준치 감 잡기" },
        { id: "quick", label: "빠른 스캔 기준" },
        { id: "warnings", label: "주의 라벨 신호" },
        { id: "examples", label: "라벨 읽기 예시" },
        { id: "selfcheck", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/guide" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
                    <span>← 가이드 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        식품 라벨 읽기: 당·나트륨·지방 빠르게 확인
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        가공식품과 외식이 많은 환경에서 라벨을 빠르게 읽는 법만 익혀도 혈당·혈압·체중 관리가 쉬워집니다.
                        1분 체크리스트와 %DV 기준으로 당·나트륨·지방을 바로 판단하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-2">
                        <p className="text-sm font-semibold text-amber-700">핵심 요약</p>
                        <p className="text-gray-900 leading-relaxed">
                            1) 1회 제공량 함정 확인 2) 당류 10g+ 간식은 주 1~2회 이내 3) 나트륨 %DV 20%↓ 우선 선택(하루 소금 5g, 나트륨 2g 이하) 4) 포화지방 낮고 트랜스 0g.
                            1분 투자로 혈당·혈압·체중 관리가 한결 쉬워집니다.
                        </p>
                    </section>

                    <section id="checklist" className="bg-white border border-amber-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">1분 체크리스트</h2>
                        <ul className="list-disc pl-5 text-gray-800 leading-relaxed space-y-1 text-base">
                            {checks.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="daily" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">1일 기준치 감 잡기</h2>
                        <Card className="border border-amber-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <PercentCircle className="w-5 h-5 text-amber-600" />
                                    당류·나트륨·지방
                                </h3>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    당류: 하루 25g 내외(WHO 권고), 나트륨: 2g(소금 5g) 미만, 포화지방: 총열량의 10% 미만,
                                    트랜스지방: 0g 선호. %DV 5% 이하면 “낮음”, 20% 이상이면 “높음”으로 간주하세요.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="quick" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-amber-600" />
                            빠른 스캔 기준 (가공식품/외식)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-base space-y-1">
                            <li>나트륨 %DV 20%↑이면 “고나트륨”, 5%↓면 “낮음”</li>
                            <li>당류 10g+ 간식은 주 1~2회로 제한, 무가당 대체 우선</li>
                            <li>포화지방 5g+ 제품은 소량·저빈도로, 트랜스 0g 확인</li>
                        </ul>
                    </section>

                    <section id="warnings" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            주의 라벨 신호
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-base space-y-1">
                            <li>1회 제공량이 과도하게 작아 총량이 숨겨진 경우</li>
                            <li>당류 10g+ 간식, 나트륨 600mg+ 컵라면류</li>
                            <li>포화지방 5g+ 버터/크림 기반 제품</li>
                        </ul>
                    </section>

                    <section id="examples" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">라벨 읽기 예시</h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>간식 바: 당류 12g → 주 1회 이하, 나트륨 150mg이면 괜찮은 편</li>
                            <li>컵라면: 나트륨 1500~2000mg → 국물은 거의 남기기</li>
                            <li>시리얼: 1회 제공량 30g인데 실제 섭취는 60g? 당류·칼로리를 2배로 계산</li>
                            <li>요거트: “무가당” 확인, 당류 6g↓ 제품 우선, 단백질 8g↑면 포만감 ↑</li>
                        </ul>
                    </section>

                    <section id="selfcheck" className="bg-white border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-amber-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>라벨의 %DV 의미를 정확히 모른다</li>
                            <li>1회 제공량과 실제 섭취량을 다르게 계산한 적이 많다</li>
                            <li>당류·나트륨이 높은 간식을 하루 2회 이상 먹는다</li>
                        </ul>
                        <p className="text-sm text-amber-700">2점 이상이면, 일주일 동안 라벨 사진을 찍어 기록하고 %DV 20%↓ 제품 비중을 늘려보세요.</p>
                    </section>

                    <section id="faq" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">FAQ</h3>
                        <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                            <div>
                                <p className="font-semibold">Q. “트랜스지방 0g”이 안전하다는 뜻인가요?</p>
                                <p>0.5g 미만은 0g으로 표시될 수 있습니다. 가공유지(쇼트닝/마가린)가 앞쪽에 있으면 섭취를 줄이세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. %DV는 어떻게 보나요?</p>
                                <p>나트륨 20% 이상이면 고나트륨 식품입니다. 당류는 %DV가 없으므로 g 단위를 직접 확인하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 당알코올(에리스리톨 등)은 괜찮나요?</p>
                                <p>과량 섭취 시 복부팽만·설사를 유발할 수 있습니다. 성인 기준 10~15g 이하, 어린이는 더 적게 제한하세요.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q. 어린이 간식 라벨은 어떻게 보나요?</p>
                                <p>당류 6g↓, 나트륨 100mg↓, 포화지방 1g↓ 제품을 우선 고르고, 트랜스 0g인지 확인하세요.</p>
                            </div>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">섭취 기록하고 나트륨 점수 계산하기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        나트륨 점수 도구와 식단 가이드로 라벨 선택을 빠르게 개선하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/sodium-intake-score">
                            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                나트륨 점수 계산 →
                            </Button>
                        </Link>
                        <Link href="/guide/nutrition">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                영양 가이드 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


