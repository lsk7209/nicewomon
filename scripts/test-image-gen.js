
const API_KEY = process.env.GEMINI_API_KEY;
// 사용자가 지정한 모델 ID
const MODEL_NAME = 'gemini-2.5-flash-image';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

async function testGen() {
    console.log(`🧪 모델 테스트 중: ${MODEL_NAME}`);

    // 단순 텍스트 프롬프트로 이미지 생성 요청
    const prompt = "A cute cat sitting on a windowsill, detailed illustration";

    const requestBody = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        // 이미지 생성을 강제하기 위한 설정 (확인 필요)
        // 일부 모델은 responseMimeType을 설정하거나, 프롬프트에서 요청해야 함
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        console.log('📡 응답 상태:', response.status);

        if (data.error) {
            console.error('❌ API 에러:', JSON.stringify(data.error, null, 2));
            return;
        }

        // 응답 구조 확인
        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
            const parts = data.candidates[0].content.parts;
            console.log('📦 응답 파트 수:', parts.length);

            parts.forEach((part, index) => {
                if (part.text) {
                    console.log(`[Part ${index}] 텍스트 (길이 ${part.text.length}):`, part.text.substring(0, 100) + '...');
                } else if (part.inlineData) {
                    console.log(`[Part ${index}] 이미지 데이터 발견! MIME: ${part.inlineData.mimeType}, 용량: ${part.inlineData.data.length}`);
                } else if (part.executableCode) {
                    console.log(`[Part ${index}] 실행 코드 발견`);
                } else {
                    console.log(`[Part ${index}] 기타 데이터:`, Object.keys(part));
                }
            });
        } else {
            console.log('⚠️ 예상치 못한 응답 구조:', JSON.stringify(data, null, 2));
        }

    } catch (e) {
        console.error('❌ 요청 실패:', e.message);
    }
}

testGen();
