/**
 * localStorage 기반 데이터 저장 시스템
 * 30일 유효기간, 타입 안전성 보장
 */

export type PersonaType =
    | "super-balancer"
    | "sensitive-catch"
    | "deep-recoverer"
    | "late-bloomer"
    | "body-age";

export type ToolId =
    | "hormone"
    | "sleep"
    | "stress"
    | "body-age"
    | "nutrients";

export interface StoredResult {
    toolId: ToolId;
    score: number;
    persona: PersonaType;
    timestamp: number;
    answers: Record<string, number>;
    age?: number;
}

export interface WeeklyData {
    date: string;
    sleep: number;
    stress: number;
    fatigue: number;
}

const STORAGE_PREFIX = "nicewoman_";
const EXPIRY_DAYS = 30;

/**
 * 결과 저장
 */
export function saveResult(result: Omit<StoredResult, "timestamp">): void {
    const data: StoredResult = {
        ...result,
        timestamp: Date.now(),
    };

    const key = `${STORAGE_PREFIX}result_${result.toolId}`;
    localStorage.setItem(key, JSON.stringify(data));

    // 주간 데이터 수집 (호르몬, 수면, 스트레스만)
    if (["hormone", "sleep", "stress"].includes(result.toolId)) {
        saveWeeklyData(result.toolId, result.score);
    }
}

/**
 * 결과 불러오기
 */
export function getResult(toolId: ToolId): StoredResult | null {
    const key = `${STORAGE_PREFIX}result_${toolId}`;
    const data = localStorage.getItem(key);

    if (!data) return null;

    try {
        const result: StoredResult = JSON.parse(data);

        // 만료 확인 (30일)
        const expiryTime = result.timestamp + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        if (Date.now() > expiryTime) {
            localStorage.removeItem(key);
            return null;
        }

        return result;
    } catch {
        return null;
    }
}

/**
 * 모든 결과 불러오기
 */
export function getAllResults(): StoredResult[] {
    const results: StoredResult[] = [];
    const tools: ToolId[] = ["hormone", "sleep", "stress", "body-age", "nutrients"];

    for (const toolId of tools) {
        const result = getResult(toolId);
        if (result) {
            results.push(result);
        }
    }

    return results.sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * 주간 데이터 저장
 */
function saveWeeklyData(toolId: ToolId, score: number): void {
    const key = `${STORAGE_PREFIX}weekly`;
    const today = new Date().toISOString().split("T")[0];

    let weeklyData: WeeklyData[] = [];
    const stored = localStorage.getItem(key);

    if (stored) {
        try {
            weeklyData = JSON.parse(stored);
        } catch {
            weeklyData = [];
        }
    }

    // 오늘 데이터 찾기 또는 생성
    let todayData = weeklyData.find((d) => d.date === today);
    if (!todayData) {
        todayData = { date: today, sleep: 0, stress: 0, fatigue: 0 };
        weeklyData.push(todayData);
    }

    // 점수 업데이트
    if (toolId === "sleep") todayData.sleep = score;
    if (toolId === "stress") todayData.stress = score;
    if (toolId === "hormone") todayData.fatigue = score;

    // 최근 30일만 유지
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    weeklyData = weeklyData.filter(
        (d) => new Date(d.date) >= thirtyDaysAgo
    );

    localStorage.setItem(key, JSON.stringify(weeklyData));
}

/**
 * 주간 데이터 불러오기
 */
export function getWeeklyData(days: number = 7): WeeklyData[] {
    const key = `${STORAGE_PREFIX}weekly`;
    const stored = localStorage.getItem(key);

    if (!stored) return [];

    try {
        const weeklyData: WeeklyData[] = JSON.parse(stored);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        return weeklyData
            .filter((d) => new Date(d.date) >= cutoffDate)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } catch {
        return [];
    }
}

/**
 * 데이터 존재 여부 확인
 */
export function hasData(): boolean {
    return getAllResults().length > 0;
}

/**
 * 데이터 저장 기간 확인 (일)
 */
export function getDataAge(): number | null {
    const results = getAllResults();
    if (results.length === 0) return null;

    const oldestTimestamp = Math.min(...results.map((r) => r.timestamp));
    const ageInDays = Math.floor((Date.now() - oldestTimestamp) / (24 * 60 * 60 * 1000));

    return ageInDays;
}

/**
 * 백업 필요 여부 (30일 경과 시)
 */
export function needsBackup(): boolean {
    const age = getDataAge();
    return age !== null && age >= 28; // 30일 전에 미리 알림
}

/**
 * 모든 데이터 삭제
 */
export function clearAllData(): void {
    const keys = Object.keys(localStorage).filter((key) =>
        key.startsWith(STORAGE_PREFIX)
    );
    keys.forEach((key) => localStorage.removeItem(key));
}

/**
 * 데이터 내보내기 (JSON)
 */
export function exportData(): string {
    const data = {
        results: getAllResults(),
        weekly: getWeeklyData(30),
        exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(data, null, 2);
}

/**
 * 데이터 가져오기 (JSON)
 */
export function importData(jsonString: string): boolean {
    try {
        const data = JSON.parse(jsonString);

        if (data.results && Array.isArray(data.results)) {
            data.results.forEach((result: StoredResult) => {
                const key = `${STORAGE_PREFIX}result_${result.toolId}`;
                localStorage.setItem(key, JSON.stringify(result));
            });
        }

        if (data.weekly && Array.isArray(data.weekly)) {
            const key = `${STORAGE_PREFIX}weekly`;
            localStorage.setItem(key, JSON.stringify(data.weekly));
        }

        return true;
    } catch {
        return false;
    }
}
