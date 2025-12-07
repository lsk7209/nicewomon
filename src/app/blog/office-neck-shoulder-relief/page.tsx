import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, StretchHorizontal, Laptop2, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentWithToc } from "@/components/layout/ContentWithToc";

export const metadata: Metadata = {
    title: "사무직 목·어깨 통증 줄이는 10분 루틴 | 나이스우먼 블로그",
    description: "책상 높이·모니터 세팅, 10분 스트레칭 루틴, 1시간 주기 마이크로 브레이크로 목·어깨 통증을 낮추는 방법.",
    keywords: ["목 통증", "어깨 통증", "사무직", "스트레칭", "자세 교정"],
    alternates: { canonical: "https://nicewomen.kr/blog/office-neck-shoulder-relief" },
};

export default function OfficeNeckShoulderReliefPost() {
    const micro = [
        "1시간마다 2~3분: 목 측굴/회전 스트레칭, 어깨 롤링 10회",
        "10분마다 10초: 시선 멀리 두기(눈 피로 완화)",
        "의자 등받이 100~110도, 발은 바닥에 평평하게",
    ];

    const setup = [
        "모니터 상단이 눈높이와 같거나 살짝 아래",
        "키보드 높이는 팔꿈치 90도, 손목 중립",
        "노트북은 스탠드+외장 키보드/마우스로 거북목 방지",
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-white to-sky-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 mb-8">
                    <span>← 블로그 목록으로</span>
                </Link>

                <header className="mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>운동</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        사무직 목·어깨 통증 줄이는 10분 루틴
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
                    <p className="text-lg text-gray-700">
                        거북목과 어깨 긴장은 자세·장비·쉬는 시간 세 가지만 바꿔도 크게 줄일 수 있습니다.
                        10분 루틴과 책상 세팅 체크리스트를 안내합니다.
                    </p>
                </header>

                <ContentWithToc>
                    <section id="summary" className="bg-white border border-sky-100 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">한눈에 보기</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {setup.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="routine" className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">10분 루틴</h2>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <StretchHorizontal className="w-5 h-5 text-sky-600" />
                                    목·어깨 스트레칭 (5분)
                                </h3>
                                <p className="text-gray-700 text-sm">목 측굴/회전 각 10초×3세트, 어깨 롤링 앞/뒤 10회.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <MoveHorizontal className="w-5 h-5 text-indigo-600" />
                                    가슴/등 열기 (3분)
                                </h3>
                                <p className="text-gray-700 text-sm">문틀 스트레칭, 폼롤러 없으면 수건 말아 등 뒤에 대고 1분 열어주기.</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-sky-100">
                            <CardContent className="pt-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Laptop2 className="w-5 h-5 text-emerald-600" />
                                    마이크로 브레이크 (2분)
                                </h3>
                                <p className="text-gray-700 text-sm">1시간마다 일어나서 2분 걷기, 시선 멀리 두기.</p>
                            </CardContent>
                        </Card>
                    </section>

                    <section id="micro" className="bg-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">마이크로 브레이크 체크</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {micro.map((m) => (
                                <li key={m}>{m}</li>
                            ))}
                        </ul>
                    </section>
                </ContentWithToc>

                <section className="mt-16 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">목·어깨 점수 확인하고 알림 설정</h2>
                    <p className="text-lg mb-8 opacity-90">
                        스트레스 테스트와 목·어깨 리마인더 도구로 통증을 예방하세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/tools/stress">
                            <Button size="lg" className="bg-white text-sky-700 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl">
                                스트레스 테스트 →
                            </Button>
                        </Link>
                        <Link href="/tools/pelvic-floor-reminder">
                            <Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-bold">
                                스트레칭 알림 설정 →
                            </Button>
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}


