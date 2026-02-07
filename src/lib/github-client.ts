import { Octokit } from '@octokit/rest';

if (!process.env.GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN is not defined');
}

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

const OWNER = process.env.GITHUB_OWNER || 'nicewomen'; // 기본값 설정 필요
const REPO = process.env.GITHUB_REPO || 'nicewomon';   // 기본값 설정 필요
const BRANCH = 'main';

export async function getFileContent(path: string) {
    try {
        const response = await octokit.repos.getContent({
            owner: OWNER,
            repo: REPO,
            path,
            ref: BRANCH,
        });

        if (Array.isArray(response.data)) {
            throw new Error('Path is a directory');
        }

        if (!('content' in response.data)) {
            throw new Error('No content found');
        }

        return Buffer.from(response.data.content, 'base64').toString('utf8');
    } catch (error: any) {
        if (error.status === 404) return null;
        throw error;
    }
}

export async function createOrUpdateFile(path: string, content: string, message: string) {
    try {
        // 기존 파일 확인 (SHA 가져오기)
        let sha: string | undefined;
        try {
            const { data } = await octokit.repos.getContent({
                owner: OWNER,
                repo: REPO,
                path,
                ref: BRANCH,
            });

            if (!Array.isArray(data) && 'sha' in data) {
                sha = data.sha;
            }
        } catch (e: any) {
            if (e.status !== 404) throw e;
        }

        // 파일 생성/업데이트
        await octokit.repos.createOrUpdateFileContents({
            owner: OWNER,
            repo: REPO,
            path,
            message,
            content: Buffer.from(content).toString('base64'),
            sha,
            branch: BRANCH,
        });

        return true;
    } catch (error) {
        console.error(`Failed to create/update file ${path}:`, error);
        throw error;
    }
}
