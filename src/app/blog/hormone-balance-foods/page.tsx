import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, Utensils, Fish, Apple, Ban, NotebookPen, Activity, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "호르몬 밸런스를 위한 식단 가이드 | 나이스우먼 블로그",
    description: "호르몬 불균형을 바로잡는 최고의 음식과 피해야 할 음식을 소개합니다. 에스트로겐 수치를 조절하고 생리통, 갱년기 증상을 완화하는 식단 팁을 확인하세요.",
    keywords: ["호르몬밸런스", "에스트로겐", "여성호르몬음식", "생리통", "갱년기식단"],
    alternates: { canonical: "https://nicewomen.kr/blog/hormone-balance-foods" },
};

export default function HormoneDietBlogPost() {
    return (
        <div className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>호르몬 건강</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        호르몬 밸런스를 위한 식단 가이드
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.24</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>5분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        우리가 먹는 음식이 호르몬을 만듭니다.
                        생리 불순, 여드름, 감정 기복... 호르몬 불균형으로 고생하고 있다면
                        오늘부터 식탁을 바꿔보세요.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-80 md:h-96 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl md:text-9xl">🥗</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none space-y-10">
                    <section className="bg-white border border-pink-100 rounded-2xl p-6 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">핵심 요약</h2>
                        <div className="grid md:grid-cols-3 gap-3 text-base text-gray-900 leading-relaxed">
                            <Card className="border border-pink-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-pink-700 uppercase">먹을 것</p>
                                    <p>오메가3(주 2회 등푸른 생선), 십자화과, 발효식품을 매끼 소량</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-pink-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-pink-700 uppercase">줄일 것</p>
                                    <p>설탕/정제탄수, 가공육, 과음. 카페인·알코올은 저녁 전에 중단</p>
                                </CardContent>
                            </Card>
                            <Card className="border border-pink-100">
                                <CardContent className="pt-4 space-y-1">
                                    <p className="text-xs font-semibold text-pink-700 uppercase">패턴</p>
                                    <p>단백질 20g+채소 2컵/식, 혈당 스파이크 억제, 물 30~35ml/kg</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            호르몬 친화적 식단이란?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            호르몬은 지방과 단백질을 재료로 만들어집니다.
                            따라서 좋은 지방과 양질의 단백질을 섭취하는 것이 기본입니다.
                            또한 혈당 스파이크는 인슐린 과다 분비를 유발해 성호르몬의 균형을 깨뜨리므로,
                            혈당을 안정시키는 식사가 중요합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            호르몬 균형을 돕는 슈퍼푸드 3가지
                        </h2>

                        <Card className="mb-6 border border-pink-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-pink-100 p-3 rounded-full">
                                        <Fish className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            1. 오메가-3 지방산 (연어, 고등어, 아마씨)
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            세포막을 건강하게 만들어 호르몬이 세포 내로 잘 전달되도록 돕습니다.
                                            생리통 완화와 염증 감소에도 탁월합니다. 주 2회 이상 등푸른 생선을 섭취하세요.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border border-green-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Apple className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            2. 십자화과 채소 (브로콜리, 양배추, 케일)
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            인돌-3-카비놀 성분이 과도한 에스트로겐 대사를 돕습니다. 에스트로겐 우세 증상(PMS, 근종 등)에 특히 유용합니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border border-yellow-100">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-100 p-3 rounded-full">
                                        <Utensils className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            3. 발효 식품 (김치, 된장, 요거트)
                                        </h3>
                                        <p className="text-gray-800 leading-relaxed">
                                            장 건강은 호르몬 대사의 핵심입니다. 장내 유익균은 남은 호르몬을 배출하는 데 도움을 줍니다. 매일 한 끼 발효 식품을 곁들이세요.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            호르몬을 교란시키는 최악의 음식
                        </h2>

                        <Card className="mb-6 border border-red-100 bg-red-50">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Ban className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            피해야 할 3가지
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
                                            <li><strong>설탕과 정제 탄수화물:</strong> 인슐린 저항성을 높여 다낭성 난소 증후군(PCOS)을 악화시킵니다.</li>
                                            <li><strong>가공육:</strong> 보존제와 항생제가 호르몬 시스템을 방해할 수 있습니다.</li>
                                            <li><strong>과도한 알코올:</strong> 간의 해독 기능을 떨어뜨려 에스트로겐 수치를 비정상적으로 높입니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="bg-pink-50 border border-pink-100 p-6 rounded-lg space-y-3">
                        <h3 className="text-xl font-bold text-pink-900 mb-3">
                            🍽️ 호르몬 밸런스 식단 예시 (하루)
                        </h3>
                        <ul className="space-y-2 text-gray-800 text-base leading-relaxed">
                            <li>아침: 그릭 요거트 + 견과류 + 베리류</li>
                            <li>점심: 연어 샐러드 + 현미밥 + 아보카도</li>
                            <li>간식: 삶은 달걀 1개 또는 아몬드 한 줌</li>
                            <li>저녁: 닭가슴살 야채 볶음(브로콜리 듬뿍)</li>
                        </ul>
                        <p className="text-sm text-pink-700">탄수는 정제보다 통곡/채소 위주, 카페인·알코올은 저녁 전에 끊어 수면을 보호하세요.</p>
                    </section>

                    <section className="bg-white border border-pink-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <NotebookPen className="w-5 h-5 text-pink-600" />
                            자가 체크 (0~3점)
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-1">
                            <li>하루 채소/과일/통곡 3회 미만</li>
                            <li>설탕/정제탄수 섭취가 잦거나 야식이 있다</li>
                            <li>카페인·알코올을 저녁에도 섭취한다</li>
                        </ul>
                        <p className="text-sm text-pink-700">2점 이상이면 “슈퍼푸드 3 + 피해야 할 3”을 우선 적용하고, 1주 기록 후 조정하세요.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                        <Card className="border border-pink-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">이소플라본(콩) 섭취가 걱정될 때?</p>
                                <p className="text-gray-800 text-base leading-relaxed">1~2회/일 식품 형태 섭취는 대체로 안전하나, 호르몬 민감 질환이 있으면 의료진과 상의하세요.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-pink-100">
                            <CardContent className="pt-5 space-y-1">
                                <p className="font-semibold text-gray-900 mb-1">보충제는 꼭 필요할까?</p>
                                <p className="text-gray-800 text-base leading-relaxed">식품이 우선입니다. 오메가3·마그네슘은 식사로 충분하지 않을 때 고려하되, 복용 전 의료진 상담을 권장합니다.</p>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        내 호르몬 상태는 괜찮을까요?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        간단한 자가진단으로 현재 호르몬 밸런스를 확인하고
                        <br />
                        맞춤형 관리 팁을 받아보세요.
                    </p>
                    <Link href="/tools/hormone">
                        <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            호르몬 밸런스 체크하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Posts */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        관련 글
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/guide/hormone-basics" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-pink-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                                        호르몬 기초 지식
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        여성 호르몬의 모든 것
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/guide/nutrition" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-pink-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                                        영양 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        건강한 식단 구성하기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/hormone" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-pink-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                                        호르몬 밸런스 파인더
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        8가지 증상으로 상태 확인
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-pink-600 hover:text-pink-700 font-medium">
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
