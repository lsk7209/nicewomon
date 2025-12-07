import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, Droplet, Utensils, AlertCircle, Pill, Coffee } from "lucide-react";

export const metadata: Metadata = {
    title: "여성의 철분 부족, 왜 중요한가요? | 나이스우먼 블로그",
    description: "생리로 인한 철분 손실과 빈혈 예방법을 알아봅니다. 철분이 풍부한 음식과 효과적인 섭취 방법, 보충제 선택 가이드를 제공합니다.",
    keywords: ["철분", "빈혈", "여성건강", "생리", "영양소"],
    alternates: { canonical: "https://nicewomen.kr/blog/iron-deficiency-women" },
};

export default function IronDeficiencyBlogPost() {
    return (
        <div className="bg-gradient-to-b from-red-50 via-white to-red-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>영양 관리</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        여성의 철분 부족, 왜 중요한가요?
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>2024.11.23</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>4분 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        이유 없이 피곤하고 어지럽다면 '철분 부족'을 의심해보세요.
                        가임기 여성의 20%가 겪는 철분 결핍,
                        방치하면 만성 피로와 탈모의 원인이 됩니다.
                    </p>
                </header>

                {/* Featured Image Placeholder */}
                <div className="mb-12 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">🩸</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            여성에게 철분이 더 필요한 이유
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            철분은 우리 몸 곳곳에 산소를 운반하는 헤모글로빈의 핵심 성분입니다.
                            여성은 매달 생리로 인해 혈액 손실이 발생하므로 남성보다 더 많은 철분이 필요합니다.
                            하지만 다이어트나 불규칙한 식사로 인해 권장 섭취량을 채우지 못하는 경우가 많습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            철분 부족이 보내는 5가지 신호
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <Card className="border-l-4 border-red-500">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <h3 className="text-lg font-bold text-gray-900">1. 극심한 피로감</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        충분히 잤는데도 몸이 무겁고 피곤합니다. 산소 공급이 원활하지 않기 때문입니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-red-500">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <h3 className="text-lg font-bold text-gray-900">2. 어지러움과 두통</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        뇌로 가는 산소가 부족해져 앉았다 일어날 때 핑 도는 증상이 나타납니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-red-500">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <h3 className="text-lg font-bold text-gray-900">3. 창백한 피부</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        혈색이 사라지고 입술 안쪽이나 눈꺼풀 안쪽이 하얗게 보입니다.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-red-500">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <h3 className="text-lg font-bold text-gray-900">4. 손발 차가움</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        혈액 순환이 잘 되지 않아 손발이 차가워집니다.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            철분, 어떻게 채워야 할까요?
                        </h2>

                        <Card className="mb-6 border-l-4 border-orange-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <Utensils className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            1. 철분이 풍부한 음식 섭취
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>붉은 살코기:</strong> 소고기, 돼지고기 (흡수율이 가장 높음)</li>
                                            <li><strong>해산물:</strong> 굴, 조개, 생선</li>
                                            <li><strong>채소:</strong> 시금치, 깻잎, 브로콜리</li>
                                            <li><strong>견과류:</strong> 아몬드, 호두</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-yellow-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-100 p-3 rounded-full">
                                        <Droplet className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            2. 비타민 C와 함께 드세요
                                        </h3>
                                        <p className="text-gray-700">
                                            비타민 C는 철분의 흡수를 돕습니다. 고기를 먹을 때 쌈 채소나 과일을 곁들이거나,
                                            철분제를 오렌지 주스와 함께 복용하면 효과가 배가 됩니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-gray-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gray-100 p-3 rounded-full">
                                        <Coffee className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            3. 식후 커피/녹차는 피하세요
                                        </h3>
                                        <p className="text-gray-700">
                                            커피와 녹차의 타닌 성분은 철분 흡수를 방해합니다.
                                            식사 후 최소 1시간이 지난 뒤에 마시는 것이 좋습니다.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6 border-l-4 border-blue-500">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Pill className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            4. 철분제 복용 시 주의사항
                                        </h3>
                                        <p className="text-gray-700">
                                            음식만으로 부족하다면 보충제가 필요합니다.
                                            단, 철분제는 변비를 유발할 수 있으므로 물과 식이섬유를 충분히 섭취해야 합니다.
                                            공복에 먹는 것이 흡수율이 좋지만, 위장 장애가 있다면 식후에 드세요.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        내 몸에 부족한 영양소는?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        증상으로 알아보는 영양소 결핍 분석기로
                        <br />
                        나에게 꼭 필요한 영양 성분을 확인해보세요.
                    </p>
                    <Link href="/tools/nutrients">
                        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            영양소 결핍 분석하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Posts */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        관련 글
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/guide/nutrition" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-red-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                        영양 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        여성 필수 영양소 총정리
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/guide/30s-health" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-red-600 font-medium mb-2">가이드</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                        30대 여성 건강 가이드
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        임신, 출산, 그리고 영양 관리
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/tools/nutrients" className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <p className="text-sm text-red-600 font-medium mb-2">진단 도구</p>
                                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                        영양소 결핍 분석기
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        증상으로 부족한 영양소 찾기
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-red-600 hover:text-red-700 font-medium">
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
