import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_HOST = 'api.indexnow.org';
const KEY = 'e037c8c8d8b9487c9360c78486f05928';
const KEY_LOCATION = `https://nicewomen.kr/${KEY}.txt`;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { urls } = body;

        if (!urls || !Array.isArray(urls)) {
            return NextResponse.json({ error: 'Invalid URLs' }, { status: 400 });
        }

        const payload = {
            host: 'nicewomen.kr',
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urls,
        };

        const response = await fetch(`https://${INDEXNOW_HOST}/indexnow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'IndexNow submission failed', status: response.status }, { status: 502 });
        }

        return NextResponse.json({ success: true, message: 'Submitted to IndexNow' });

    } catch (error) {
        console.error('IndexNow Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
