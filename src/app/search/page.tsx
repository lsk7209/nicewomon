"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

// 검색 가능한 모든 콘텐츠
const searchableContent = [
    // 도구
    {
        type: "도구",
        title: "호르몬 밸런스 파인더",
        description: "8가지 증상으로 호르몬 밸런스 상태를 확인하고, 맞춤 페르소나와 개선 가이드를 받아보세요.",
        url: "/tools/hormone",
        keywords: ["호르몬", "밸런스", "갱년기", "폐경", "에스트로겐", "프로게스테론"],
    },
    {
        type: "도구",
        title: "수면 질 테스트",
        description: "수면 패턴을 분석하고 수면 질을 개선할 수 있는 맞춤 솔루션을 제공합니다.",
        url: "/tools/sleep",
        keywords: ["수면", "불면증", "수면장애", "숙면", "잠"],
    },
    {
        type: "도구",
        title: "스트레스·번아웃 테스트",
        description: "스트레스 수준과 번아웃 정도를 측정하고, 회복을 위한 실질적인 가이드를 받아보세요.",
        url: "/tools/stress",
        keywords: ["스트레스", "번아웃", "우울", "불안", "정서적소진"],
    },
    {
        type: "도구",
        title: "체형 나이 측정기",
        description: "복부둘레와 신체 데이터로 체형 나이를 계산하고, 연령대 비교 분석을 제공합니다.",
        url: "/tools/body-age",
        keywords: ["체형", "나이", "BMI", "복부비만", "건강나이"],
    },
    {
        type: "도구",
        title: "영양소 결핍 분석기",
        description: "증상 기반으로 결핍 가능성이 높은 영양소를 분석하고, 성분 가이드를 제공합니다.",
        url: "/tools/nutrients",
        keywords: ["영양소", "비타민", "미네랄", "결핍", "철분", "칼슘"],
    },
    // 가이드
    {
        type: "가이드",
        title: "호르몬 기초 지식",
        description: "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화를 알아보세요.",
        url: "/guide/hormone-basics",
        keywords: ["호르몬", "에스트로겐", "프로게스테론", "여성호르몬"],
    },
    {
        type: "가이드",
        title: "30대 여성 건강 가이드",
        description: "30대 여성의 주요 건강 변화와 예방, 관리 방법을 안내합니다.",
        url: "/guide/30s-health",
        keywords: ["30대", "건강", "관리", "예방"],
    },
    {
        type: "가이드",
        title: "40대 여성 건강 가이드",
        description: "40대 여성의 호르몬 변화와 건강 관리 방법을 상세히 안내합니다.",
        url: "/guide/40s-health",
        keywords: ["40대", "갱년기", "호르몬변화"],
    },
    {
        type: "가이드",
        title: "50대 여성 건강 가이드",
        description: "50대 여성의 폐경기 관리와 건강 유지 방법을 안내합니다.",
        url: "/guide/50s-health",
        keywords: ["50대", "폐경", "골다공증", "심혈관"],
    },
    {
        type: "가이드",
        title: "수면 가이드",
        description: "수면 질을 개선하는 과학적 방법과 실천 가능한 팁을 제공합니다.",
        url: "/guide/sleep",
        keywords: ["수면", "불면증", "수면위생", "숙면"],
    },
    {
        type: "가이드",
        title: "스트레스 관리 가이드",
        description: "스트레스를 효과적으로 관리하고 회복하는 방법을 안내합니다.",
        url: "/guide/stress",
        keywords: ["스트레스", "번아웃", "마음챙김", "명상"],
    },
    {
        type: "가이드",
        title: "영양 가이드",
        description: "여성 건강에 필수적인 영양소와 올바른 섭취 방법을 안내합니다.",
        url: "/guide/nutrition",
        keywords: ["영양", "비타민", "미네랄", "식단"],
    },
    // 블로그
    {
        type: "블로그",
        title: "갱년기 증상, 이것만은 꼭 알아두세요",
        description: "갱년기 증상을 조기에 인지하고 대처하는 방법을 알아봅니다. 안면 홍조, 수면 장애, 감정 변화 등 주요 증상과 관리법을 소개합니다.",
        url: "/blog/menopause-symptoms-guide",
        keywords: ["갱년기", "폐경", "안면홍조", "호르몬변화"],
    },
    {
        type: "블로그",
        title: "숙면을 위한 7가지 과학적 방법",
        description: "수면 전문가가 추천하는 수면 질 개선 방법입니다. 수면 위생부터 이완 기법까지, 오늘 밤부터 바로 실천할 수 있는 팁을 공유합니다.",
        url: "/blog/sleep-quality-improvement",
        keywords: ["수면", "불면증", "수면위생", "숙면"],
    },
    {
        type: "블로그",
        title: "직장인 여성을 위한 스트레스 관리법",
        description: "바쁜 일상 속에서도 실천 가능한 스트레스 관리 기법을 소개합니다. 5분 명상, 호흡법, 업무 경계 설정 등 실용적인 방법들을 알아봅니다.",
        url: "/blog/stress-management-techniques",
        keywords: ["스트레스", "번아웃", "명상", "직장인"],
    },
    {
        type: "블로그",
        title: "여성의 철분 부족, 왜 중요한가요?",
        description: "생리로 인한 철분 손실과 빈혈 예방법을 알아봅니다. 철분이 풍부한 음식과 효과적인 섭취 방법, 보충제 선택 가이드를 제공합니다.",
        url: "/blog/iron-deficiency-women",
        keywords: ["철분", "빈혈", "영양", "생리"],
    },
    {
        type: "블로그",
        title: "호르몬 밸런스를 위한 식단 가이드",
        description: "호르몬 균형에 도움이 되는 음식과 피해야 할 음식을 소개합니다. 이소플라본, 오메가-3, 비타민 B군 등 핵심 영양소를 알아봅니다.",
        url: "/blog/hormone-balance-foods",
        keywords: ["호르몬", "식단", "이소플라본", "영양"],
    },
    {
        type: "블로그",
        title: "40대 여성을 위한 운동 루틴",
        description: "40대부터 시작해야 할 운동과 피해야 할 운동을 알아봅니다. 근력 운동, 유산소 운동, 유연성 운동의 황금 비율을 소개합니다.",
        url: "/blog/exercise-for-40s-women",
        keywords: ["운동", "40대", "근력운동", "건강"],
    },
];

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<typeof searchableContent>([]);

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);

        if (searchQuery.trim() === "") {
            setResults([]);
            return;
        }

        const lowercaseQuery = searchQuery.toLowerCase();
        const filtered = searchableContent.filter((item) => {
            return (
                item.title.toLowerCase().includes(lowercaseQuery) ||
                item.description.toLowerCase().includes(lowercaseQuery) ||
                item.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery))
            );
        });

        setResults(filtered);
    };

    const clearSearch = () => {
        setQuery("");
        setResults([]);
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Header */}
                <header className="text-center mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Search className="w-5 h-5" />
                        <span>검색</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        무엇을 찾고 계신가요?
                    </h1>

                    <p className="text-lg text-gray-600">
                        도구, 가이드, 블로그 등 모든 콘텐츠를 검색할 수 있습니다
                    </p>
                </header>

                {/* Search Input */}
                <div className="mb-12">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="검색어를 입력하세요 (예: 호르몬, 수면, 스트레스)"
                            value={query}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="pl-12 pr-12 py-6 text-lg"
                        />
                        {query && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Results */}
                {query && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                검색 결과 {results.length}개
                            </h2>
                        </div>

                        {results.length > 0 ? (
                            <div className="space-y-4">
                                {results.map((item, index) => (
                                    <Link key={index} href={item.url} className="block">
                                        <Card className="hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm font-medium text-blue-600">
                                                        {item.type}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription>{item.description}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <Card>
                                <CardContent className="py-12 text-center">
                                    <p className="text-gray-600 mb-4">
                                        "{query}"에 대한 검색 결과가 없습니다.
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        다른 검색어를 시도해보세요.
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}

                {/* Popular Searches */}
                {!query && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            인기 검색어
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {["호르몬", "수면", "스트레스", "갱년기", "영양소", "40대"].map((keyword) => (
                                <Button
                                    key={keyword}
                                    variant="outline"
                                    onClick={() => handleSearch(keyword)}
                                    className="rounded-full"
                                >
                                    {keyword}
                                </Button>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                추천 콘텐츠
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {searchableContent.slice(0, 4).map((item, index) => (
                                    <Link key={index} href={item.url}>
                                        <Card className="h-full hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <div className="text-sm font-medium text-blue-600 mb-2">
                                                    {item.type}
                                                </div>
                                                <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription className="line-clamp-2">
                                                    {item.description}
                                                </CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
