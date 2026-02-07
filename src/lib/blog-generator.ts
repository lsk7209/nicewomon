import { GoogleGenerativeAI } from "@google/generative-ai";

// 카테고리별 이모지 매핑
const CATEGORY_EMOJI: Record<string, string> = {
    '갱년기': '🌸',
    '수면': '😴',
    '스트레스': '🧘',
    '영양': '🥗',
    '호르몬': '⚖️',
    '운동': '🏃‍♀️',
    'PMS': '🌙',
    '장 건강': '🦠',
    '뼈 건강': '🦴',
    '심혈관': '❤️',
    '식습관': '🍽️',
    '다이어트': '🥗',
    '정신건강': '🧠',
};

// 블로그 생성 프롬프트 템플릿
const BLOG_PROMPT_TEMPLATE = `
당신은 30~55세 여성 건강 전문 콘텐츠 작가입니다.
"나이스우먼" 플랫폼의 브랜드 톤을 유지하면서 SEO 최적화된 블로그 글을 작성해주세요.

## 작성 가이드라인
1. **글자 수**: 2000자 이상 (본문만)
2. **구조**: 
   - 도입부: 독자의 공감을 이끌어내는 일상적 시나리오
   - 본문: H2 3-4개, 각 섹션에 실용적 팁과 근거
   - 결론: 행동 유도(CTA) - 관련 진단 도구 추천
3. **톤 앤 매너**: 
   - 친근하지만 신뢰감 있는 전문가 어조
   - "~해보세요", "~하시면 좋아요" 등 부드러운 권유
   - 불안감 조성 금지, 정보 제공 중심
4. **SEO 요소**:
   - 제목: 클릭 유발 + 키워드 포함 (50자 이내)
   - 메타 설명: 155자 이내
   - 본문 내 키워드 자연스럽게 3-5회 사용
5. **출처**: WHO, NIH, 보건복지부 등 권위 있는 기관 언급
6. **금지사항**: 
   - 의학적 진단/처방 금지
   - 특정 제품 추천 금지
   - 공포 마케팅 금지

## 주제
{TOPIC}

## 출력 형식 (JSON)
{
  "slug": "영문-url-slug-형태",
  "title": "SEO 최적화 제목",
  "excerpt": "메타 설명 (155자 이내)",
  "category": "갱년기 | 수면 | 스트레스 | 영양 | 호르몬 | 운동 | PMS | 장 건강 | 뼈 건강 | 심혈관 | 식습관 | 다이어트 | 정신건강",
  "readTime": "X분",
  "date": "{DATE}",
  "content": {
    "intro": "<p>도입부 HTML</p>",
    "sections": [
      { "h2": "섹션 제목", "body": "<p>섹션 내용 HTML</p>" }
    ],
    "conclusion": "<p>결론 HTML</p>",
    "cta": {
      "title": "CTA 제목",
      "description": "CTA 설명",
      "toolSlug": "관련 도구 slug (hormone/sleep/stress/body-age/nutrients)"
    }
  },
  "relatedPosts": ["관련-블로그-slug-1", "관련-블로그-slug-2"],
  "keywords": ["키워드1", "키워드2", "키워드3"]
}
`;

// 블로그 TSX 템플릿
const BLOG_TSX_TEMPLATE = `import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "{TITLE} | 나이스우먼 블로그",
    description: "{EXCERPT}",
    keywords: {KEYWORDS},
    alternates: { canonical: "https://nicewomen.kr/blog/{SLUG}" },
};

export default function BlogPost() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>{CATEGORY}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {TITLE}
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{DATE}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>{READ_TIME} 읽기</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        {EXCERPT}
                    </p>
                </header>

                {/* Featured Image */}
                <div className="mb-12 h-96 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">{EMOJI}</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none space-y-8">
                    {INTRO_SECTION}
                    
                    {CONTENT_SECTIONS}
                    
                    {CONCLUSION_SECTION}
                </div>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        {CTA_TITLE}
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        {CTA_DESCRIPTION}
                    </p>
                    <Link href="/tools/{CTA_TOOL}">
                        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            지금 진단하기 →
                        </Button>
                    </Link>
                </section>

                {/* Share */}
                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                    <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
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
`;

export interface BlogContent {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    content: {
        intro: string;
        sections: { h2: string; body: string }[];
        conclusion: string;
        cta: {
            title: string;
            description: string;
            toolSlug: string;
        };
    };
    relatedPosts: string[];
    keywords: string[];
}

export class BlogGenerator {
    private model: any;

    constructor(apiKey: string) {
        const genAI = new GoogleGenerativeAI(apiKey);
        this.model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    }

    async generateContent(topic: string): Promise<BlogContent> {
        const today = new Date().toISOString().split('T')[0];
        const prompt = BLOG_PROMPT_TEMPLATE
            .replace('{TOPIC}', topic)
            .replace('{DATE}', today);

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/) || text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('JSON 형식을 찾을 수 없습니다.');
            }

            return JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } catch (error: any) {
            console.error('콘텐츠 생성 실패:', error.message);
            throw error;
        }
    }

    generateTsx(content: BlogContent): string {
        const emoji = CATEGORY_EMOJI[content.category] || '📝';

        const sectionsHtml = content.content.sections.map(section => `
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ${section.h2}
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: \`${section.body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>`).join('\n');

        return BLOG_TSX_TEMPLATE
            .replace(/{TITLE}/g, content.title)
            .replace(/{EXCERPT}/g, content.excerpt)
            .replace(/{SLUG}/g, content.slug)
            .replace('{KEYWORDS}', JSON.stringify(content.keywords))
            .replace('{CATEGORY}', content.category)
            .replace('{DATE}', content.date)
            .replace('{READ_TIME}', content.readTime)
            .replace('{EMOJI}', emoji)
            .replace('{CTA_TITLE}', content.content.cta.title)
            .replace('{CTA_DESCRIPTION}', content.content.cta.description)
            .replace('{CTA_TOOL}', content.content.cta.toolSlug)
            .replace('{INTRO_SECTION}', `
                    <section>
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.intro.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>`)
            .replace('{CONTENT_SECTIONS}', sectionsHtml)
            .replace('{CONCLUSION_SECTION}', `
                    <section className="bg-rose-50 p-6 rounded-xl">
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.conclusion.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>`);
    }
}
