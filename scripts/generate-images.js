/**
 * 대량 이미지 생성 스크립트
 * Google Imagen 3 모델을 사용하여 블로그 이미지를 생성합니다.
 * 
 * 사용법:
 * GEMINI_API_KEY=your-key node scripts/generate-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API 설정
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error('❌ GEMINI_API_KEY 환경변수가 필요합니다.');
    process.exit(1);
}

// REST API 엔드포인트 (Gemini 2.5 Flash Image)
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

// 대상 블로그 슬러그 및 프롬프트
// src/content/blog 디렉토리의 모든 MDX 파일을 자동으로 읽어옵니다
import matter from 'gray-matter';

function getMdxFiles() {
    const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

    return files.map(file => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        const slug = file.replace('.mdx', '');
        // AI 프롬프트 생성: 제목과 설명 기반
        const prompt = `Professional illustration for blog post about "${data.title}". ${data.description}. Soft pastel colors, minimalist modern style, healthcare and wellness concept, clean composition, no text`;

        return { slug, prompt };
    });
}

const TARGET_BLOGS = getMdxFiles();

// 이미지 저장 경로
const PUBLIC_BLOG_DIR = path.join(__dirname, '..', 'public', 'blog');
if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
    fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true });
}

async function generateImage(slug, prompt) {
    console.log(`🖼️ 이미지 생성 중 (${slug})...`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt + ", high quality, 4k, no text" }]
                }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();

        // Gemini 2.5 Flash Image 응답 파싱 (inlineData)
        if (!data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts) {
            console.error('응답 데이터:', JSON.stringify(data, null, 2));
            throw new Error('유효한 응답 구조가 아닙니다.');
        }

        const part = data.candidates[0].content.parts.find(p => p.inlineData);
        if (!part) {
            throw new Error('이미지 데이터가 없습니다 (inlineData not found).');
        }

        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const filePath = path.join(PUBLIC_BLOG_DIR, `${slug}.jpg`);

        fs.writeFileSync(filePath, buffer);
        console.log(`✅ 이미지 저장 완료: ${filePath}`);
        return true;

    } catch (error) {
        console.error(`❌ 실패 (${slug}):`, error.message);
        return false;
    }
}

async function main() {
    console.log('🚀 블로그 이미지 대량 생성 시작 (Gemini 2.5 Flash Image)');
    console.log(`===================================`);

    let successCount = 0;

    for (const item of TARGET_BLOGS) {
        // 이미 존재하는 이미지 건너뛰기
        const filePath = path.join(PUBLIC_BLOG_DIR, `${item.slug}.jpg`);
        if (fs.existsSync(filePath)) {
            console.log(`⏭️ 이미 존재: ${item.slug}.jpg`);
            continue;
        }

        const success = await generateImage(item.slug, item.prompt);
        if (success) successCount++;

        // Rate Limit 대기
        if (success) await new Promise(r => setTimeout(r, 5000));
    }

    console.log(`\n===================================`);
    console.log(`✨ 완료: ${successCount}/${TARGET_BLOGS.length}개 이미지 생성됨`);
}

main();
