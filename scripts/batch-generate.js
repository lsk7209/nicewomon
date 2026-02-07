/**
 * 대량 콘텐츠 생성 스크립트
 * CONTENT_PLAN_200.md에서 주제를 읽어 자동으로 블로그 콘텐츠를 생성합니다.
 * 
 * 사용법:
 * GEMINI_API_KEY=your-key node scripts/batch-generate.js --count 10
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
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

// 블로그 주제 큐 (CONTENT_PLAN_200.md 기반으로 우선순위가 높은 주제들)
const BLOG_TOPICS_QUEUE = [
    // 갱년기 & 호르몬 (높은 검색 볼륨)
    "갱년기 안면 홍조, 병원 가야 할 때 vs 집에서 관리할 때",
    "40대 생리 불순, 조기 폐경일까요? 자가 진단법",
    "갱년기 불면증, 수면제 없이 잠드는 5가지 습관",
    "갱년기 뱃살이 안 빠지는 이유와 해결책 (호르몬 다이어트)",
    "폐경 후 골다공증 예방을 위한 운동과 식단",

    // 수면 & 스트레스
    "잠이 안 올 때 '양 세기'보다 효과적인 4-7-8 호흡법",
    "꿈을 많이 꾸면 잠을 못 잔 걸까? (수면의 질)",
    "화병(火病)은 한국에만 있다? 가슴 답답함 푸는 법",
    "명상 초보자를 위한 하루 5분 호흡 가이드",

    // 영양 & 라이프스타일
    "비타민 D 주사 vs 영양제, 무엇이 더 효율적일까?",
    "마그네슘, 눈 떨림 말고 불면증에도 효과적일까?",
    "유산균(프로바이오틱스) 먹는 시간과 제품 고르는 기준",
    "매일 마시는 커피, 뼈 건강에 괜찮을까? (칼슘 도둑)",

    // 다이어트 & 뷰티
    "나잇살 빼는 법: 20대와 다이어트 방법이 달라야 한다",
    "간헐적 단식, 40대 여성에게도 효과적일까? (주의사항)",
    "기미와 검버섯 없애는 홈케어 vs 피부과 시술 비교",

    // 여성 질환
    "질염이 자꾸 재발한다면? 생활 습관 점검 리스트",
    "40대 이후 꼭 받아야 할 여성 건강 검진 항목 리스트",
    "편두통이 생리 주기에 심해지는 이유와 대처법",

    // 정신 건강
    "완벽주의 성향 내려놓기: '이만하면 충분해' 연습",
    "행복 호르몬 '세로토닌'을 늘리는 생활 습관 5가지",
];

// 이미 생성된 블로그 확인
function getExistingBlogSlugs() {
    const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
}

// 진행 상태 저장
function saveProgress(generatedTopics) {
    const progressPath = path.join(__dirname, 'generation-progress.json');
    fs.writeFileSync(progressPath, JSON.stringify({
        lastRun: new Date().toISOString(),
        generated: generatedTopics
    }, null, 2));
}

// 진행 상태 로드
function loadProgress() {
    const progressPath = path.join(__dirname, 'generation-progress.json');
    if (fs.existsSync(progressPath)) {
        return JSON.parse(fs.readFileSync(progressPath, 'utf8'));
    }
    return { generated: [] };
}

// API 속도 제한을 위한 대기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 블로그 생성 프롬프트
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

## 주제
{TOPIC}

## 출력 형식 (JSON)
{
  "slug": "영문-url-slug-형태",
  "title": "SEO 최적화 제목",
  "excerpt": "메타 설명 (155자 이내)",
  "category": "갱년기 | 수면 | 스트레스 | 영양 | 호르몬 | 운동 | PMS | 장 건강 | 뼈 건강 | 심혈관 | 다이어트 | 정신건강",
  "readTime": "X분",
  "date": "{DATE}",
  "content": {
    "intro": "<p>도입부 내용</p>",
    "sections": [
      { "h2": "섹션 제목", "body": "<p>섹션 내용</p><ul><li>항목</li></ul>" }
    ],
    "conclusion": "<p>결론 내용</p>",
    "cta": {
      "title": "CTA 제목",
      "description": "CTA 설명",
      "toolSlug": "hormone 또는 sleep 또는 stress 또는 body-age 또는 nutrients"
    }
  },
  "keywords": ["키워드1", "키워드2", "키워드3"]
}
`;

// 카테고리별 이모지
const CATEGORY_EMOJI = {
    '갱년기': '🌸', '수면': '😴', '스트레스': '🧘', '영양': '🥗',
    '호르몬': '⚖️', '운동': '🏃‍♀️', 'PMS': '🌙', '장 건강': '🦠',
    '뼈 건강': '🦴', '심혈관': '❤️', '다이어트': '🥗', '정신건강': '🧠',
};

// 콘텐츠 생성
async function generateBlogContent(topic) {
    const today = new Date().toISOString().split('T')[0];
    const prompt = BLOG_PROMPT_TEMPLATE
        .replace('{TOPIC}', topic)
        .replace('{DATE}', today);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/) || text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error('JSON 형식을 찾을 수 없습니다.');
    }

    return JSON.parse(jsonMatch[1] || jsonMatch[0]);
}

// TSX 파일 생성
function generateTsxFile(content) {
    const emoji = CATEGORY_EMOJI[content.category] || '📝';

    const sectionsHtml = content.content.sections.map(section => `
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ${section.h2}
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: \`${section.body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>`).join('\n');

    return `import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export const metadata: Metadata = {
    title: "${content.title} | 나이스우먼 블로그",
    description: "${content.excerpt}",
    keywords: ${JSON.stringify(content.keywords)},
    alternates: { canonical: "https://nicewomen.kr/blog/${content.slug}" },
};

export default function BlogPost() {
    return (
        <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록으로</span>
                </Link>

                <header className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                        <span>${content.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        ${content.title}
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>${content.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>${content.readTime} 읽기</span>
                        </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        ${content.excerpt}
                    </p>
                </header>

                <div className="mb-12 h-64 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl">${emoji}</span>
                </div>

                <div className="prose prose-lg max-w-none space-y-8">
                    <section>
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.intro.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>
                    ${sectionsHtml}
                    <section className="bg-rose-50 p-6 rounded-xl">
                        <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.content.conclusion.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
                    </section>
                </div>

                <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">${content.content.cta.title}</h2>
                    <p className="text-lg mb-8 opacity-90">${content.content.cta.description}</p>
                    <Link href="/tools/${content.content.cta.toolSlug}">
                        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                            지금 진단하기 →
                        </Button>
                    </Link>
                </section>

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
}

// 파일 저장
function saveBlogPost(content, tsx) {
    const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog', content.slug);
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }
    fs.writeFileSync(path.join(blogDir, 'page.tsx'), tsx, 'utf8');
    return blogDir;
}

// 블로그 목록 업데이트
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

    blogListContent = blogListContent.replace(
        /const blogPosts = \[\n/,
        `const blogPosts = [\n${newPost}\n`
    );

    fs.writeFileSync(blogListPath, blogListContent, 'utf8');
}

// 메인 실행
async function main() {
    const args = process.argv.slice(2);
    const countIndex = args.indexOf('--count');
    const count = countIndex !== -1 ? parseInt(args[countIndex + 1]) || 5 : 5;

    console.log('🚀 나이스우먼 대량 콘텐츠 생성기');
    console.log(`===================================`);
    console.log(`   생성할 콘텐츠 수: ${count}개`);

    const progress = loadProgress();
    const existingSlugs = getExistingBlogSlugs();
    const generatedTopics = [...progress.generated];

    // 아직 생성되지 않은 주제 필터링
    const pendingTopics = BLOG_TOPICS_QUEUE.filter(
        topic => !generatedTopics.includes(topic)
    );

    console.log(`   대기 중인 주제: ${pendingTopics.length}개\n`);

    let successCount = 0;

    for (let i = 0; i < Math.min(count, pendingTopics.length); i++) {
        const topic = pendingTopics[i];
        console.log(`\n[${i + 1}/${count}] 📝 "${topic}"`);

        try {
            // 콘텐츠 생성
            const content = await generateBlogContent(topic);

            // 이미 존재하는 slug 체크
            if (existingSlugs.includes(content.slug)) {
                console.log(`   ⏭️ 이미 존재: ${content.slug}`);
                generatedTopics.push(topic);
                continue;
            }

            // TSX 생성 및 저장
            const tsx = generateTsxFile(content);
            saveBlogPost(content, tsx);
            updateBlogList(content);

            generatedTopics.push(topic);
            existingSlugs.push(content.slug);
            successCount++;

            console.log(`   ✅ 완료: ${content.slug}`);

            // API 속도 제한 (분당 요청 제한 대응)
            if (i < count - 1) {
                console.log(`   ⏳ 다음 생성까지 10초 대기...`);
                await sleep(10000);
            }

        } catch (error) {
            console.error(`   ❌ 실패: ${error.message}`);
        }

        // 진행 상태 저장
        saveProgress(generatedTopics);
    }

    console.log(`\n===================================`);
    console.log(`✨ 생성 완료: ${successCount}/${count}개`);
    console.log(`📊 총 생성된 블로그: ${existingSlugs.length}개`);
}

main();
