import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQS } from "@/lib/config";
import { createFAQPageSchema } from "@/lib/schema";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { HelpCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "자주 묻는 질문 (FAQ) | 나이스우먼",
    description: "나이스우먼 서비스 이용에 대한 자주 묻는 질문과 답변을 확인하세요.",
    keywords: ["FAQ", "자주 묻는 질문", "고객센터", "이용 안내"],
};

export default function FAQPage() {
    // FAQ 스키마 생성
    const faqSchema = createFAQPageSchema(FAQS);

    return (
        <LegalLayout title="자주 묻는 질문" lastUpdated="2024년 11월 26일">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <header className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <HelpCircle className="w-5 h-5" />
                        <span>고객센터</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        자주 묻는 질문
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        나이스우먼 서비스 이용에 대한
                        <br />
                        <strong className="text-gray-800">궁금한 점을 해결</strong>해드립니다
                    </p>
                </header>

                {/* FAQ List */}
                <div className="space-y-6">
                    {FAQS.map((faq, index) => (
                        <Card key={index} className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                                        Q
                                    </span>
                                    <span className="flex-1">{faq.question}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pl-14">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Help */}
                <section className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        더 궁금한 점이 있으신가요?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        언제든지 문의해주세요. 빠르게 답변드리겠습니다.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            문의하기 →
                        </Button>
                    </Link>
                </section>

                {/* Related Links */}
                <section className="mt-12 grid md:grid-cols-3 gap-6">
                    <Link href="/about" className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                    서비스 소개
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    나이스우먼이 제공하는 서비스를 알아보세요
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/privacy" className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                    개인정보 처리방침
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    개인정보 보호 정책을 확인하세요
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/terms" className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                    이용약관
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    서비스 이용약관을 확인하세요
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                </section>
            </article>
        </LegalLayout>
    );
}
