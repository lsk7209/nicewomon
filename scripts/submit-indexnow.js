import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; // node-fetch 필요

// 블로그 포스트 디렉토리
const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
const BASE_URL = 'https://nicewomen.kr';

async function submitToIndexNow() {
    // 디렉토리가 없으면 에러 방지
    if (!fs.existsSync(BLOG_DIR)) {
        console.error(`Directory not found: ${BLOG_DIR}`);
        return;
    }

    const files = fs.readdirSync(BLOG_DIR);

    // 블로그 포스트 URL 목록 생성
    const urls = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => `${BASE_URL}/blog/${file.replace('.mdx', '')}`);

    // 메인 페이지 및 기타 주요 페이지 추가
    urls.push(`${BASE_URL}/`);
    urls.push(`${BASE_URL}/blog`);
    urls.push(`${BASE_URL}/tools/hormone`);

    console.log(`Submitting ${urls.length} URLs to IndexNow...`);

    const INDEXNOW_HOST = 'api.indexnow.org';
    const KEY = 'e037c8c8d8b9487c9360c78486f05928';
    const KEY_LOCATION = `https://nicewomen.kr/${KEY}.txt`;

    const indexNowPayload = {
        host: 'nicewomen.kr',
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
    };

    try {
        const response = await fetch(`https://${INDEXNOW_HOST}/indexnow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(indexNowPayload),
        });

        if (response.ok) {
            console.log('✅ Successfully submitted to IndexNow');
        } else {
            console.error(`❌ Failed to submit to IndexNow: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('❌ Error submitting to IndexNow:', error);
    }
}

submitToIndexNow();
