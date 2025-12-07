import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, AlertTriangle, Stethoscope, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "증상별 가이드 | 나이스우먼",
    description: "여성 건강 증상별 원인, 대처법, 관련 성분 정보를 제공합니다.",
    keywords: ["여성 건강 증상", "갱년기 증상", "건강 가이드", "자가 관리"],
    alternates: { canonical: "https://nicewomen.kr/guide/symptoms" },
};

const symptoms = [
    { title: "홍조/야간 발한", tips: ["침실 온도 20~22도, 카페인/알코올 컷오프", "이소플라본·오메가3 섭취, 4-7-8 호흡"] },
    { title: "수면 장애", tips: ["블루라이트 차단 60분, 규칙적 기상", "멜라토닌/마그네슘 고려(전문의 상담)"] },
    { title: "기분 기복/불안", tips: ["호흡·명상 10분, 카페인 감량", "규칙적 운동과 단백질 섭취로 혈당 안정"] },
    { title: "피로/탈모", tips: ["철분·비타민D·단백질 보충 여부 확인", "수면 7~8시간, 스트레스 관리"] },
];

export default function SymptomsGuidePage() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-5 h-5" />
                        <span>건강 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        증상별 가이드
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        자주 겪는 증상의 원인과 즉시 적용 가능한 대처법을 한눈에 정리했습니다.
                    </p>
                </header>

                <div className="prose prose-lg max-w-none space-y-10">
                    <section className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100 space-y-3">
                        <p className="text-sm font-semibold text-rose-700">핵심 요약</p>
                        <p className="text-gray-800">
                            증상 완화의 우선순위는 수면(7~8h), 혈당 안정(식사 순서·간격), 스트레스 감속(호흡·걷기)입니다.
                            의료 경고 신호는 흉통·호흡곤란·실신·지속 통증이며, 발생 시 즉시 진료가 필요합니다.
                        </p>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 리듬: 기상/취침 시간 편차 ±30분, 카페인 14시 컷오프</li>
                            <li>• 식사: 채소/단백질 → 탄수화물 순서, 식후 10분 걷기</li>
                            <li>• 스트레스: 4-7-8 호흡 4세트, 10분 산책으로 코르티솔 리셋</li>
                        </ul>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        {symptoms.map((item) => (
                            <Card key={item.title} className="border-l-4 border-rose-400 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-gray-700">
                                    {item.tips.map((tip) => (
                                        <p key={tip}>• {tip}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section className="bg-rose-50 border border-rose-100 rounded-2xl p-8 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">증상별 심화 포인트</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="space-y-1">
                                <p className="font-semibold text-rose-700">홍조/야간 발한</p>
                                <p>저녁 알코올·카페인 제한, 침실 20~22도, 이소플라본 식품 소량</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-rose-700">수면 장애</p>
                                <p>스크린 차단 60분, 저조도 조명, 마그네슘·글라이신 식품, 10분 스트레칭</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-rose-700">기분 기복/불안</p>
                                <p>카페인 감량, 단백질 아침, 산책 10~20분으로 세로토닌 리셋</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-rose-700">피로/탈모</p>
                                <p>철분·비타민D 확인, 수면 7~8h, 단백질 1.2g/kg, 스트레스 호흡</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl shadow p-8 border border-rose-100 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">자가 점검 체크리스트</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>주 5일 이상 7시간 수면, 기상 시간 편차 ±30분 이내</li>
                            <li>카페인 14시 이전, 알코올 주 2회 이하</li>
                            <li>식사 순서(채소/단백질 → 탄수)와 식후 10분 걷기 실천</li>
                            <li>주 5일 10분 이상 햇빛·걷기, 호흡/명상 10분</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl shadow-lg p-8 space-y-3 border border-rose-100">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <ClipboardCheck className="w-6 h-6 text-rose-600" />
                            언제 병원을 가야 할까?
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>갑작스러운 흉통, 호흡곤란, 실신</li>
                            <li>2주 이상 지속되는 불면/우울/불안</li>
                            <li>불규칙·과다 월경이 지속될 때</li>
                            <li>체중 급변, 설명되지 않는 발열/통증</li>
                        </ul>
                        <p className="text-xs text-rose-700">* 본 가이드는 정보 제공용이며, 증상이 지속되면 반드시 전문의 진료를 받으세요.</p>
                    </section>

                    <section className="bg-rose-50 border border-rose-100 rounded-2xl p-8 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p className="font-semibold">Q. 갑작스런 불면이 생기면 무엇부터?</p>
                            <p>A. 카페인·알코올 시간 확인 → 스크린 60분 차단 → 4-7-8 호흡과 스트레칭 후에도 지속되면 의료 상담을 권장합니다.</p>
                            <p className="font-semibold">Q. 영양 보충제는 바로 시작해도 되나요?</p>
                            <p>A. 철분·비타민D는 과잉 위험이 있으니 혈액검사 결과를 확인하거나 전문의와 상의 후 시작하세요.</p>
                        </div>
                    </section>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">증상 자가진단 해보기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        호르몬·수면·스트레스 테스트로 내 상태를 수치화하고 맞춤 가이드를 받아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                호르몬 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/sleep">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                수면 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/stress">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}

