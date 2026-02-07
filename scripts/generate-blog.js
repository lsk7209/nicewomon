/**
 * 자동 콘텐츠 생성 시스템
 * Gemini 2.5 Flash-Lite를 사용하여 블로그 콘텐츠를 자동 생성합니다.
 * 
 * 사용법:
 * GEMINI_API_KEY=your-key node scripts/generate-blog.js --topic "갱년기 관리"
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gemini API 설정
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error('❌ GEMINI_API_KEY 환경변수가 필요합니다.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

// 콘텐츠 생성 모델 (사용자 규칙 준수: gemini-2.5-flash-lite)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

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
  "category": "갱년기 | 수면 | 스트레스 | 영양 | 호르몬 | 운동 | PMS | 장 건강 | 뼈 건강 | 심혈관",
  "readTime": "X분",
  "date": "{DATE}",
  "content": {
    "intro": "도입부 HTML",
    "sections": [
      { "h2": "섹션 제목", "body": "섹션 내용 HTML" }
    ],
    "conclusion": "결론 HTML",
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
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

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

// 카테고리별 이모지 매핑
const CATEGORY_EMOJI = {
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
};

/**
 * 블로그 콘텐츠 생성
 */
async function generateBlogContent(topic) {
    const today = new Date().toISOString().split('T')[0];
    const prompt = BLOG_PROMPT_TEMPLATE
        .replace('{TOPIC}', topic)
        .replace('{DATE}', today);

    console.log(`\n📝 콘텐츠 생성 중: "${topic}"...`);

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // JSON 파싱 (마크다운 코드 블록 제거)
        const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/) || text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('JSON 형식을 찾을 수 없습니다.');
        }

        const content = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        console.log(`✅ 콘텐츠 생성 완료: ${content.title}`);

        return content;
    } catch (error) {
        console.error('❌ 콘텐츠 생성 실패:', error.message);
        throw error;
    }
}

/**
 * TSX 파일 생성
 */
function generateTsxFile(content) {
    const emoji = CATEGORY_EMOJI[content.category] || '📝';

    // 섹션 HTML 생성
    const sectionsHtml = content.content.sections.map(section => `
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ${section.h2}
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: \`${section.body.replace(/`/g, '\\`')}\` }} />
                    </section>`).join('\n');

    let tsx = BLOG_TSX_TEMPLATE
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
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.intro.replace(/`/g, '\\`')}\` }} />
                    </section>`)
        .replace('{CONTENT_SECTIONS}', sectionsHtml)
        .replace('{CONCLUSION_SECTION}', `
                    <section className="bg-rose-50 p-6 rounded-xl">
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.conclusion.replace(/`/g, '\\`')}\` }} />
                    </section>`);

    return tsx;
}

/**
 * 블로그 파일 저장
 */
function saveBlogPost(content, tsx) {
    const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog', content.slug);

    // 디렉토리 생성
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }

    // TSX 파일 저장
    const filePath = path.join(blogDir, 'page.tsx');
    fs.writeFileSync(filePath, tsx, 'utf8');

    console.log(`📄 파일 저장 완료: ${filePath}`);

    return filePath;
}

/**
 * 블로그 목록 업데이트 (page.tsx의 blogPosts 배열에 추가)
 */
function updateBlogList(content) {
    const blogListPath = path.join(__dirname, '..', 'src', 'app', 'blog', 'page.tsx');
    let blogListContent = fs.readFileSync(blogListPath, 'utf8');

    const newPost = `    {
        slug: "${content.slug}",
        title: "${content.title}",
        excerpt: "${content.excerpt}",
        category: "${content.category}",
        date: "${content.date}",
        readTime: "${content.readTime}",
        image: "/blog/${content.slug}.jpg",
    },`;

    // blogPosts 배열의 시작 부분에 새 포스트 추가
    blogListContent = blogListContent.replace(
        /const blogPosts = \[\n/,
        `const blogPosts = [\n${newPost}\n`
    );

    fs.writeFileSync(blogListPath, blogListContent, 'utf8');
    console.log(`📋 블로그 목록 업데이트 완료`);
}

/**
 * 메인 실행 함수
 */
async function main() {
    const args = process.argv.slice(2);
    const topicIndex = args.indexOf('--topic');

    if (topicIndex === -1 || !args[topicIndex + 1]) {
        console.log('사용법: node generate-blog.js --topic "주제"');
        console.log('예시: node generate-blog.js --topic "갱년기 안면 홍조 관리법"');
        process.exit(1);
    }

    const topic = args[topicIndex + 1];

    console.log('🚀 나이스우먼 블로그 콘텐츠 생성기');
    console.log('===================================');

    try {
        // 1. 콘텐츠 생성
        const content = await generateBlogContent(topic);

        // 2. TSX 파일 생성
        const tsx = generateTsxFile(content);

        // 3. 파일 저장
        saveBlogPost(content, tsx);

        // 4. 블로그 목록 업데이트
        updateBlogList(content);

        console.log('\n✨ 블로그 생성 완료!');
        console.log(`   - Slug: ${content.slug}`);
        console.log(`   - 제목: ${content.title}`);
        console.log(`   - 카테고리: ${content.category}`);
        console.log(`   - URL: https://nicewomen.kr/blog/${content.slug}`);

    } catch (error) {
        console.error('\n❌ 오류 발생:', error.message);
        process.exit(1);
    }
}

main();
