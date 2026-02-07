import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const QUEUE_FILE = path.join(DATA_DIR, 'post-queue.json');

// Helper to read queue
function getQueueData() {
    if (!fs.existsSync(QUEUE_FILE)) {
        return {
            posts: [],
            topics: { queue: [], generated: [] },
            lastGenerated: null,
            lastPublished: null
        };
    }
    const content = fs.readFileSync(QUEUE_FILE, 'utf-8');
    return JSON.parse(content);
}

// Helper to write queue
function saveQueueData(data: any) {
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(data, null, 4));
}

export async function GET() {
    try {
        const data = getQueueData();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch queue' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { action, topic, topics } = body;
        const data = getQueueData();

        if (action === 'add') {
            if (topic) {
                data.topics.queue.push(topic);
            }
        } else if (action === 'remove') {
            if (topic) {
                data.topics.queue = data.topics.queue.filter((t: string) => t !== topic);
            }
        } else if (action === 'update_all') {
            if (topics && Array.isArray(topics)) {
                data.topics.queue = topics;
            }
        } else if (action === 'move_to_generated') {
            // Manual move if needed, though mostly handled by generator
            if (topic) {
                data.topics.queue = data.topics.queue.filter((t: string) => t !== topic);
                data.topics.generated.push(topic);
            }
        }

        saveQueueData(data);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update queue' }, { status: 500 });
    }
}
