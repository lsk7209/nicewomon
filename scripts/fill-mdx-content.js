/**
 * MDX 파일 콘텐츠 자동 생성 스크립트
 * 기존 MDX 파일의 frontmatter를 읽고 AI로 본문을 생성하여 업데이트합니다.
 * 
 * 사용법:
 * node scripts/fill-mdx-content.js
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
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

const BLOG_DIR = path.join(__dirname, '..', 'src', 'content', 'blog');

// 블로그 생성 프롬프트
const CONTENT_PROMPT_TEMPLATE = `
당신은 30~55세 여성 건강 전문 콘텐츠 작가입니다.
"나이스우먼" 플랫폼의 브랜드 톤을 유지하면서 SEO 최적화된 블로그 본문을 작성해주세요.

## 작성 가이드라인
1. **글자 수**: 2000자 이상
2. **구조**: 
   - 도입부: 독자의 공감을 이끌어내는 일상적 시나리오 (300자)
   - 본문: 3-4개 섹션, 각 섹션에 실용적 팁과 근거 (1500자)
   - 결론: 요약 및 행동 유도 (200자)
3. **톤 앤 매너**: 
   - 친근하지만 신뢰감 있는 전문가 어조
   - "~해보세요", "~하시면 좋아요" 등 부드러운 권유
   - 불안감 조성 금지, 정보 제공 중심
4. **출처**: WHO, NIH, 보건복지부 등 권위 있는 기관 언급
5. **금지사항**: 
   - 의학적 진단/처방 금지
   - 특정 제품 추천 금지
   - 공포 마케팅 금지

## 주제 정보
제목: {TITLE}
설명: {DESCRIPTION}
카테고리: {CATEGORY}

## 출력 형식 (마크다운)
도입부 단락 (p 태그 없이 일반 텍스트)

## 섹션 1 제목
섹션 1 내용 (리스트, 강조 등 마크다운 사용 가능)

## 섹션 2 제목
섹션 2 내용

## 섹션 3 제목
섹션 3 내용

## 마무리
결론 내용

> **Tip**: 추가 팁이나 주의사항
`;

// API 속도 제한을 위한 대기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 콘텐츠 생성
async function generateContent(title, description, category) {
    const prompt = CONTENT_PROMPT_TEMPLATE
        .replace('{TITLE}', title)
        .replace('{DESCRIPTION}', description)
        .replace('{CATEGORY}', category);

    console.log(`   🤖 AI 콘텐츠 생성 중...`);

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text.trim();
    } catch (error) {
        console.error(`   ❌ AI 생성 실패:`, error.message);
        throw error;
    }
}

// MDX 파일 처리
async function processMdxFile(filename) {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    // 이미 콘텐츠가 있는지 확인 (100자 이상)
    if (content.trim().length > 100) {
        console.log(`   ⏭️ 이미 콘텐츠 존재 (${content.trim().length}자)`);
        return false;
    }

    // AI로 콘텐츠 생성
    const newContent = await generateContent(
        frontmatter.title,
        frontmatter.description,
        frontmatter.tags?.[0] || '건강'
    );

    // MDX 파일 업데이트
    const updatedFileContent = matter.stringify(newContent, frontmatter);
    fs.writeFileSync(filePath, updatedFileContent, 'utf-8');

    console.log(`   ✅ 콘텐츠 생성 완료 (${newContent.length}자)`);
    return true;
}

// 메인 실행
async function main() {
    console.log('🚀 MDX 블로그 콘텐츠 일괄 생성');
    console.log('===================================');

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
    console.log(`📁 총 ${files.length}개 MDX 파일 발견\n`);

    let successCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`\n[${i + 1}/${files.length}] 📝 ${file}`);

        try {
            const wasGenerated = await processMdxFile(file);
            if (wasGenerated) {
                successCount++;
                // API 속도 제한 대응
                if (i < files.length - 1) {
                    console.log(`   ⏳ 다음 생성까지 12초 대기...`);
                    await sleep(12000);
                }
            } else {
                skippedCount++;
            }
        } catch (error) {
            console.error(`   ❌ 처리 실패:`, error.message);
            errorCount++;
            // 에러 후에도 계속 진행
            await sleep(5000);
        }
    }

    console.log(`\n===================================`);
    console.log(`✨ 작업 완료`);
    console.log(`   - 생성: ${successCount}개`);
    console.log(`   - 건너뜀: ${skippedCount}개`);
    console.log(`   - 실패: ${errorCount}개`);
}

main();
