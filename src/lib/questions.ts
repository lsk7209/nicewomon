/**
 * 호르몬 밸런스 파인더 설정
 */

export interface Question {
    id: string;
    text: string;
    description?: string;
    labels: [string, string, string, string]; // 0, 1, 2, 3점 레이블
}

export const HORMONE_QUESTIONS: Question[] = [
    {
        id: "sleep",
        text: "수면 난이도",
        description: "잠들기 어렵거나 자주 깨는 정도",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "fatigue",
        text: "피로도",
        description: "일상적인 피로감과 무기력함",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "mood",
        text: "감정 변화",
        description: "기분 변화, 우울감, 불안감",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "hotFlash",
        text: "안면 홍조",
        description: "갑작스러운 열감과 땀",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "dryness",
        text: "질 건조",
        description: "질 건조감 또는 불편함",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "jointPain",
        text: "관절/근육 통증",
        description: "관절이나 근육의 통증 또는 뻣뻣함",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "concentration",
        text: "집중력/불안",
        description: "집중력 저하, 기억력 감퇴, 불안감",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "menstrual",
        text: "생리 변화",
        description: "생리 주기 불규칙, 양 변화",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
];

export const QUESTION_NAMES: Record<string, string> = {
    sleep: "수면",
    fatigue: "피로",
    mood: "감정",
    hotFlash: "홍조",
    dryness: "질 건조",
    jointPain: "관절",
    concentration: "집중력",
    menstrual: "생리",
};

/**
 * 수면 질 테스트 설정
 */
export const SLEEP_QUESTIONS: Question[] = [
    {
        id: "fallAsleep",
        text: "잠들기까지 걸리는 시간",
        description: "침대에 누운 후 잠들 때까지",
        labels: ["15분 이내", "15-30분", "30-60분", "60분 이상"],
    },
    {
        id: "wakeUp",
        text: "중간 각성 횟수",
        description: "밤중에 깨는 횟수",
        labels: ["없음", "1-2회", "3-4회", "5회 이상"],
    },
    {
        id: "duration",
        text: "총 수면 시간",
        description: "실제로 잔 시간",
        labels: ["7시간 이상", "6-7시간", "5-6시간", "5시간 미만"],
    },
    {
        id: "quality",
        text: "기상 시 피로도",
        description: "아침에 일어났을 때 느낌",
        labels: ["상쾌함", "보통", "피곤함", "매우 피곤함"],
    },
    {
        id: "daytime",
        text: "낮 졸음",
        description: "낮 시간 동안의 졸음",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
];

/**
 * 스트레스·번아웃 테스트 설정
 */
export const STRESS_QUESTIONS: Question[] = [
    {
        id: "exhaustion",
        text: "정서적 소진",
        description: "감정적으로 지치고 소진된 느낌",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "cynicism",
        text: "냉소주의",
        description: "일이나 사람에 대한 무관심, 냉소적 태도",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "efficacy",
        text: "성취감 저하",
        description: "일의 의미나 성취감을 느끼지 못함",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "physical",
        text: "신체 증상",
        description: "두통, 소화불량, 근육 긴장 등",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "irritability",
        text: "짜증과 분노",
        description: "쉽게 짜증나고 화가 남",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
];

/**
 * 영양소 결핍 분석기 설정
 */
export const NUTRIENT_QUESTIONS: Question[] = [
    {
        id: "hairSkin",
        text: "모발/피부 건강",
        description: "탈모, 건조한 피부, 갈라진 손톱",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "energy",
        text: "에너지 수준",
        description: "만성 피로, 무기력",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "immunity",
        text: "면역력",
        description: "잦은 감기, 감염",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "bone",
        text: "뼈/근육 건강",
        description: "근육 경련, 뼈 통증",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
    {
        id: "cognitive",
        text: "인지 기능",
        description: "집중력 저하, 기억력 감퇴",
        labels: ["전혀 없음", "가끔", "자주", "매우 심함"],
    },
];
