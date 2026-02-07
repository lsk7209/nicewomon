import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Heart, Moon, Pill, ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  // 구조화된 데이터 (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "나이스우먼",
    alternateName: "Nice Woman",
    url: "https://nicewomen.kr",
    logo: "https://nicewomen.kr/logo.png",
    description: "30~55세 여성의 신체 변화를 데이터 기반 자가진단, 성분 기반 정보, 연령별 루틴으로 안내하는 건강 플랫폼",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "나이스우먼",
    url: "https://nicewomen.kr",
    description: "30~55세 여성의 신체 변화를 데이터 기반 자가진단, 성분 기반 정보, 연령별 루틴으로 안내하는 건강 플랫폼",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nicewomen.kr/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const tools = [
    {
      id: "hormone",
      title: "호르몬 밸런스 파인더",
      description: "\"요즘 감정 기복이 심해졌어요\" - 호르몬 변화 신호를 확인하세요",
      emoji: "🌸",
      icon: Heart,
      color: "text-rose-600 bg-rose-50",
      badge: "가장 인기",
      href: "/tools/hormone",
    },
    {
      id: "sleep",
      title: "수면 질 테스트",
      description: "\"밤새 뒤척이다 아침이 왔어요\" - 수면 패턴을 분석해드려요",
      emoji: "😴",
      icon: Moon,
      color: "text-blue-600 bg-blue-50",
      badge: "",
      href: "/tools/sleep",
    },
    {
      id: "stress",
      title: "스트레스·번아웃 테스트",
      description: "\"아무것도 하기 싫어요\" - 지금 당신의 마음 상태를 체크하세요",
      emoji: "💆‍♀️",
      icon: Brain,
      color: "text-purple-600 bg-purple-50",
      badge: "",
      href: "/tools/stress",
    },
    {
      id: "body-age",
      title: "체형 나이 측정기",
      description: "\"실제 나이보다 몸이 더 늙은 것 같아요\" - 체형 나이를 확인하세요",
      emoji: "⚖️",
      icon: Activity,
      color: "text-green-600 bg-green-50",
      badge: "",
      href: "/tools/body-age",
    },
    {
      id: "nutrients",
      title: "영양소 결핍 분석기",
      description: "\"피곤하고 머리카락이 많이 빠져요\" - 부족한 영양소를 찾아드려요",
      emoji: "🥗",
      icon: Pill,
      color: "text-orange-600 bg-orange-50",
      badge: "",
      href: "/tools/nutrients",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white">
      {/* 구조화된 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Emotional Hook */}
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="text-lg">💝</span>
            <span>30~55세 여성을 위한 건강 파트너</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-rose-600">나의 몸이 보내는 신호</span>,
            <br />
            이제 정확히 알 수 있어요
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            "요즘 왜 이럴까?" 하는 막연한 불안 대신,
            <br />
            <strong className="text-gray-800">데이터로 확인하고 루틴으로 관리</strong>하세요
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>WHO/NIH 데이터 기반</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>30일 무료 데이터 저장</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>3분이면 완료</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="#tools"
              className="group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-rose-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                지금 바로 시작하기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-gray-500 pt-4">
            <span className="inline-flex items-center gap-1">
              <span className="text-base">👥</span>
              이미 많은 분들이 자신의 건강 패턴을 발견했어요
            </span>
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 rounded-full">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-medium text-gray-700">나에게 맞는 진단 선택하기</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              어떤 고민이 있으신가요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              증상에 맞는 진단을 선택하면 3분 안에 결과를 확인할 수 있어요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.id}
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-rose-200 relative overflow-hidden"
                >
                  {tool.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {tool.badge}
                    </div>
                  )}
                  <Link href={tool.href}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                          <span className="text-3xl">{tool.emoji}</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-rose-600 transition-colors">
                            {tool.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-gray-600 min-h-[3rem]">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <span>⏱️</span>
                          <span>3분 소요</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📊</span>
                          <span>즉시 결과</span>
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-rose-600 group-hover:text-white transition-all font-medium"
                      >
                        <span className="flex items-center justify-center gap-2">
                          지금 시작하기
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">
              최신 건강 정보
            </h2>
            <Link href="/blog" className="text-rose-600 font-medium hover:text-rose-700 flex items-center gap-1">
              전체 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {getBlogPosts().slice(0, 3).map((post) => {
              // 카테고리별 이모지 매핑
              const categoryEmoji: Record<string, string> = {
                '갱년기': '🌸',
                '수면': '😴',
                '스트레스': '🧘',
                '호르몬': '💗',
                '영양': '🥗',
                '운동': '🏃‍♀️',
                '기타': '📝',
              };
              const emoji = categoryEmoji[post.category] || '📝';

              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-purple-100">
                    <div className="h-40 bg-gradient-to-br from-purple-50 to-rose-50 flex items-center justify-center">
                      <span className="text-5xl">{emoji}</span>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">{post.category}</span>
                        <span className="text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-purple-600 font-medium group-hover:gap-3 transition-all">
                        <span>읽어보기</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-rose-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 나이스우먼일까요?
            </h2>
            <p className="text-lg text-gray-600">
              혼자 고민하지 마세요. 데이터가 답을 알려드려요
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                과학적 데이터 기반
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                WHO, NIH 등 신뢰할 수 있는 기관의 연구를 바탕으로 만들어졌어요.
                <strong className="block mt-2 text-gray-800">막연한 추측이 아닌 근거 있는 정보</strong>를 제공합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                내 정보는 내 것
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                모든 데이터는 회원님의 기기에만 저장돼요.
                <strong className="block mt-2 text-gray-800">서버에 전송되지 않아 100% 안전</strong>합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                맞춤형 솔루션
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                나이와 증상에 따라 개인화된 분석 결과를 받아보세요.
                <strong className="block mt-2 text-gray-800">나에게 딱 맞는 건강 관리법</strong>을 찾을 수 있어요
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="inline-block bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 mb-4">
                <span className="text-2xl">✨</span> 지금 바로 시작하면 <strong className="text-rose-600">3분 후</strong> 결과를 확인할 수 있어요
              </p>
              <Link
                href="#tools"
                className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                무료로 진단 시작하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
