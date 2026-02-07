import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const BACKUP_DIR = path.join(__dirname, '../src/app/blog_backup');

if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

function backup() {
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

    for (const entry of entries) {
        // [slug] 폴더는 건너뜀 (이미 생성된 경우)
        if (entry.name === '[slug]') continue;

        const srcPath = path.join(BLOG_DIR, entry.name);
        const destPath = path.join(BACKUP_DIR, entry.name);

        try {
            fs.renameSync(srcPath, destPath);
            console.log(`Moved ${entry.name} to backup`);
        } catch (error) {
            console.error(`Failed to move ${entry.name}:`, error);
        }
    }
    console.log('Backup completed!');
}

backup();
