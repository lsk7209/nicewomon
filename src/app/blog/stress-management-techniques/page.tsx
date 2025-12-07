import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, Brain, Coffee, Heart, Smile, NotebookPen, AlertCircle } from "lucide-react";
import { Toc } from "@/components/layout/Toc";

export const metadata: Metadata = {
    title: "직장인 여성을 위한 스트레스 관리법 | 나이스우먼 블로그",
    description: "바쁜 일상 속에서도 실천 가능한 스트레스 관리 기법을 소개합니다. 5분 명상, 호흡법, 업무 경계 설정 등 실용적인 방법들을 알아봅니다.",
    keywords: ["스트레스", "번아웃", "직장인", "워라밸", "마음챙김"],
    alternates: { canonical: "https://nicewomen.kr/blog/stress-management-techniques" },
};

export default function StressManagementBlogPost() {
    const tocItems = [
        { id: "summary", label: "한눈에 보기" },
        { id: "why", label: "스트레스, 참는 게 답일까?" },
        { id: "tips", label: "사무실에서 쓰는 처방전" },
        { id: "burnout", label: "번아웃 체크리스트" },
        { id: "selfcheck", label: "자가 체크" },
    ];

    return (
        <div className="bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>스트레스 관리</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        직장인 여성을 위한 현실적인 스트레스 관리법
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.22</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        업무 압박, 인간관계, 그리고 일과 삶의 균형.
                        직장인 여성이라면 누구나 겪는 스트레스, 어떻게 관리하고 계신가요?
                        사무실에서도 몰래 할 수 있는 초간단 스트레스 해소법을 소개합니다.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-96 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">🌿</span>
                </div>

                <div className="grid md:grid-cols-[1fr,3fr] gap-6 mb-10">
                    <div className="md:sticky md:top-24 h-fit">
                        <Toc items={tocItems} />
                    </div>
                <div className="prose prose-lg max-w-none space-y-10">
                    <section id="summary" className="bg-white border border-green-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-green-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-green-700 uppercase">즉각 진정</p>
                                    <p>박스 호흡 4세트, 3분 멍 때리기, 스트레칭 5분</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-green-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-green-700 uppercase">경계</p>
                                    <p>알림 요약 모드, 회신 시점 선언, “퇴근 의식” 만들기</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-green-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-green-700 uppercase">회복</p>
                                    <p>수면 7~8h, 카페인 13~14시 컷, 가벼운 걷기/요가로 회복일 확보</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section id="why">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            스트레스, 무조건 참는 게 답일까요?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            적당한 스트레스는 업무 효율을 높이지만, 만성적인 스트레스는 '독'이 됩니다.
                            특히 여성은 호르몬의 영향으로 스트레스에 더 민감하게 반응할 수 있습니다.
                            두통, 소화불량, 생리 불순 등이 나타난다면 몸이 보내는 경고 신호일 수 있습니다.
                        </p>
                    </section>

                    <section id="tips">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            사무실에서 바로 쓰는 스트레스 처방전
                        </h2>

                        <Card className="mb-6 border border-green-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Brain className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            1. 3분 '멍 때리기' (마이크로 브레이크)
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            뇌도 휴식이 필요합니다. 1시간 집중했다면 3분은 창밖을 보거나 눈을 감고 아무 생각도 하지 마세요.
                                            이 짧은 휴식이 뇌의 과부하를 막고 다시 집중할 힘을 줍니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border border-teal-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-100 p-3 rounded-full">
                                        <Heart className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            2. 박스 호흡법 (Box Breathing)
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            화가 나거나 긴장될 때 즉효약입니다.
                                            4초간 숨을 들이마시고, 4초간 참고, 4초간 내뱉고, 4초간 참습니다.
                                            이 과정을 4번 반복하면 부교감 신경이 활성화되어 즉시 안정을 찾을 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border border-amber-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full">
                                        <Coffee className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            3. '퇴근 의식' 만들기
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            회사 문을 나서는 순간 업무 모드를 끄는 스위치가 필요합니다.
                                            이어폰 꽂기, 특정 향수 뿌리기, 신발 갈아신기 등 나만의 의식을 만들어보세요.
                                            "오늘 업무는 끝났다"라고 뇌에게 신호를 주는 것입니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-blue-100">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        4. 거절의 기술 연습하기
                                    </h3>
                                    <p className="text-base text-gray-800 leading-relaxed">
                                        모든 부탁을 들어줄 수는 없습니다. 정중하지만 단호하게 "지금은 어렵습니다"라고 말하는 연습이 필요합니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border border-purple-100">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        5. 감정 일기 쓰기
                                    </h3>
                                    <p className="text-base text-gray-800 leading-relaxed">
                                        퇴근 후 오늘 느낀 감정을 짧게라도 적어보세요. 감정을 객관화하면 스트레스가 해소됩니다.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="burnout" className="bg-green-50 border border-green-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-900 mb-3">
                            🌱 번아웃 증후군 체크리스트
                        </h3>
                        <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
                            <li>• 아침에 일어나면 출근할 생각에 끔찍하다.</li>
                            <li>• 업무에 대한 성취감이 전혀 없다.</li>
                            <li>• 동료나 고객에게 자꾸 짜증을 내게 된다.</li>
                            <li>• 두통, 소화불량 등 원인 모를 통증이 지속된다.</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600">
                            * 위 항목 중 3개 이상 해당된다면 전문가의 도움이 필요할 수 있습니다.
                        </p>
                    </section>

                    <section id="selfcheck" className="bg-white border border-green-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-green-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>카페인·알림 컷오프를 지키지 못한다</li>
                            <li>회신 시점을 알리지 않아 업무·메시지에 끌려다닌다</li>
                            <li>회복일/휴식 블록이 없다</li>
                        </ul>
                        <p className="text-sm text-green-700">2점 이상이면 알림 요약 모드, 회신 시점 선언, 주 1회 회복일을 먼저 적용하세요.</p>
                    </section>
                    </div>
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        나의 스트레스 지수는?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        현재 스트레스 수준과 번아웃 위험도를 측정하고
                        <br />
                        마음 건강을 위한 처방을 받아보세요.
                    </p>
                    <Link href="/tools/stress">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            스트레스·번아웃 테스트하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Posts */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        관련 글
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/guide/stress" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-green-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                                        스트레스 관리 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        마음챙김과 회복 탄력성 기르기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/blog/sleep-quality-improvement" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-green-600 font-medium mb-2">블로그</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                                        숙면을 위한 7가지 방법
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        잘 자야 스트레스도 풀립니다
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/stress" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-green-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                                        스트레스·번아웃 테스트
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        내 마음 상태 점검하기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-green-600 hover:text-green-700 font-medium">
                        ← 블로그 목록으로
                    </Link>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <Share2 className="w-5 h-5" />
                        <span>공유하기</span>
                    </button>
                </div>
            </article>
        </div>
    );
}
