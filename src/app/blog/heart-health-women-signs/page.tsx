import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Heart, Activity, Shield, AlertTriangle, NotebookPen, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "여성 심혈관 경고 신호 놓치지 않기 | 나이스우먼 블로그",
    description: "여성에게 흔한 비전형적 심혈관 증상, 자가 체크 포인트, 혈압·혈당·지질 기준과 생활 관리 루틴을 정리했습니다.",
    keywords: ["심혈관", "여성 심장 건강", "가슴 통증", "호흡곤란", "위험 신호", "LDL 기준"],
    alternates: { canonical: "https://nicewomen.kr/blog/heart-health-women-signs" },
};

export default function HeartHealthWomenSignsPost() {
    const signs = [
        "턱·목·등 상부 압박감, 소화불량 같은 통증",
        "가벼운 활동에도 숨참/식은땀, 설명 안 되는 피로",
        "왼쪽 팔뿐 아니라 양팔, 등, 턱으로 퍼지는 불편감",
    ];

    const prevent = [
        "혈압·혈당·지질 연 1회 이상 확인, WHtR(허리/키) 0.5 미만 유지",
        "주 150분 중강도 유산소 + 주 2회 근력, 좌식 시간 줄이기",
        "염분 1일 5g 미만, 포화지방·트랜스지방 줄이고 식이섬유 늘리기",
    ];

    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "warning", label: "경고 신호" },
        { id: "prevention", label: "생활 관리" },
        { id: "checks", label: "자가 체크" },
        { id: "faq", label: "FAQ" },
    ];

    return (
        <div className="bg-gradient-to-b from-red-50 via-white to-red-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>심혈관</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        여성 심혈관 경고 신호 놓치지 않기
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.12.06</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700">
                        여성은 비전형적 심혈관 증상이 더 흔해 놓치기 쉽습니다.
                        경고 신호와 생활 관리 포인트를 짧게 정리했습니다. 증상 발생 시 즉시 의료기관을 이용하세요.
                        혈압·혈당·지질 수치를 수치로 확인하고, 체중보다 허리둘레/키 비율(WHtR)을 우선 체크하세요.
                    </p>
                </header>

                <ContentWithToc items={tocItems}>
                    <section id="summary" className="bg-white border border-red-100 rounded-2xl p-6 space-y-3">
                        <p className="text-sm font-semibold text-red-700">핵심 요약</p>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-red-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-red-700 uppercase">경고 신호</p>
                                    <p>턱/등/소화불량형 통증, 설명 안 되는 숨참·피로·식은땀</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-red-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-red-700 uppercase">지표</p>
                                    <p>혈압 &lt;120/80, 공복혈당 &lt;100, LDL &lt;100 (고위험군 70 미만), WHtR &lt;0.5</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-red-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-red-700 uppercase">생활</p>
                                    <p>주 150분 유산소 + 근력 2회, 염분 5g 미만, 앉는 시간 줄이기</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="warning" className="bg-white border border-red-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">경고 신호</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base leading-relaxed">
                            {signs.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-600 mt-2">급성 증상 시 즉시 119 또는 응급실 방문이 필요합니다.</p>
                    </section>

                    <section id="prevention" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">생활 관리</h2>
                        {prevent.map((p) => (
                            <Card key={p} className="border border-red-100">
                                <CardContent className="pt-5 space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-red-600" />
                                        예방 포인트
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed">{p}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section id="checks" className="bg-red-50 border border-red-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-red-600" />
                            자가 체크
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base leading-relaxed">
                            <li>혈압·혈당·지질 최근 측정 기록이 1년 이상 비어 있는가?</li>
                            <li>허리둘레/신장 비율 0.5 이상인가? (WHtR 0.5 미만 목표)</li>
                            <li>LDL 100 이상 또는 공복혈당 100 이상이 지속되는가?</li>
                            <li>주 150분 유산소·주 2회 근력이 유지되고 있는가?</li>
                        </ul>
                        <p className="text-xs text-gray-600">둘 이상 해당하면 생활 개선과 함께 검진을 권장합니다.</p>
                    </section>

                    <section id="faq" className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <div className="space-y-2 text-base text-gray-800 leading-relaxed">
                            <p className="font-semibold">Q. 가슴 통증이 없는데도 심장 문제가 있을 수 있나요?</p>
                            <p>A. 여성은 소화불량·피로·호흡곤란 등 비전형 증상이 흔합니다. 의심되면 지체 없이 진료를 받으세요.</p>
                            <p className="font-semibold">Q. 운동 강도는 어떻게 시작할까?</p>
                            <p>A. 주 150분 중강도(빠른 걷기)부터 시작해, 증상 없으면 인터벌/근력을 추가하세요.</p>
                            <p className="font-semibold">Q. 수치 목표는?</p>
                            <p>A. 혈압 &lt;120/80, 공복혈당 &lt;100, LDL &lt;100(고위험군 70 미만), WHtR 0.5 미만을 목표로 합니다.</p>
                            <p className="font-semibold">Q. 가족력이 있으면?</p>
                            <p>A. 1차 친족 발병력이 있으면 35~40세부터 정기 검진과 수치 관리 목표를 더 엄격히 적용하세요.</p>
                        </div>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">심혈관 위험 자가 점검하고 루틴 받기</h2>
                    <p className="text-lg mb-8 opacity-90">
                        스트레스·수면·운동 루틴 점검으로 심혈관 위험을 낮추세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                        <Link href="/guide/40s-health">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                연령별 건강 가이드 →
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm mt-4 opacity-80">
                        외부 참고: <Link href="https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack" className="underline text-white">AHA Warning Signs</Link>
                    </p>
                </section>
            </article>
        </div>
    );
}


