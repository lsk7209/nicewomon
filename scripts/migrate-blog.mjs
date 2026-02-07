import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const CONTENT_DIR = path.join(__dirname, '../src/content/blog');

const turndownService = new TurndownService();

// Ensure content directory exists
if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

function extractMetadata(content) {
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descriptionMatch = content.match(/description:\s*"([^"]+)"/);
    const dateMatch = content.match(/<span>(\d{4}-\d{2}-\d{2})<\/span>/); // Calendar icon next to date
    const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/);

    let keywords = [];
    if (keywordsMatch) {
        keywords = keywordsMatch[1].split(',').map(s => s.trim().replace(/"/g, ''));
    }

    return {
        title: titleMatch ? titleMatch[1] : 'Untitled',
        description: descriptionMatch ? descriptionMatch[1] : '',
        date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0],
        tags: keywords
    };
}

function extractContent(content) {
    const regex = /dangerouslySetInnerHTML={{ __html: `([\s\S]*?)` }}/g;
    let match;
    let htmlContent = '';

    while ((match = regex.exec(content)) !== null) {
        htmlContent += match[1] + '\n\n';
    }

    // Remove React specific artifacts if any, though Turndown handles most HTML
    return turndownService.turndown(htmlContent);
}

function migrate() {
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const slug = entry.name;
            const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');

            if (fs.existsSync(pagePath)) {
                const content = fs.readFileSync(pagePath, 'utf-8');
                const metadata = extractMetadata(content);
                const markdownBody = extractContent(content);

                const mdxContent = `---
title: "${metadata.title}"
description: "${metadata.description}"
date: "${metadata.date}"
tags: [${metadata.tags.map(t => `"${t}"`).join(', ')}]
---

${markdownBody}
`;

                const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
                // fs.writeFileSync(mdxPath, mdxContent); // For verify first
                console.log(`Prepared ${slug}.mdx`);

                // 실제 저장
                fs.writeFileSync(mdxPath, mdxContent);
            }
        }
    }
    console.log('Migration completed!');
}

migrate();
