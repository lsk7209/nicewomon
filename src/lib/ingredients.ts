/**
 * 성분 가이드 데이터
 * 우회 제휴 전략: 성분 기준 제공, 직접 제품 추천 X
 */

export interface Ingredient {
    id: string;
    name: string;
    nameEn: string;
    category: "hormone" | "sleep" | "stress" | "bone" | "energy" | "immunity";
    description: string;
    benefits: string[];
    recommendedDosage: string;
    bestForm: string;
    timing: string;
    cautions: string[];
    relatedSymptoms: string[];
    searchKeyword: string; // 쿠팡/아이허브 검색용
}

export const INGREDIENTS: Ingredient[] = [
    {
        id: "isoflavone",
        name: "이소플라본",
        nameEn: "Isoflavone",
        category: "hormone",
        description:
            "식물성 에스트로겐으로, 여성 호르몬과 유사한 구조를 가진 성분입니다. 대두, 레드클로버 등에 함유되어 있습니다.",
        benefits: [
            "안면 홍조 완화",
            "뼈 건강 지원",
            "심혈관 건강 개선",
            "피부 탄력 유지",
        ],
        recommendedDosage: "하루 40-80mg",
        bestForm: "대두 이소플라본 또는 레드클로버 추출물",
        timing: "식사와 함께 섭취",
        cautions: [
            "유방암 가족력이 있는 경우 전문의 상담 필요",
            "과다 섭취 시 소화불량 가능",
        ],
        relatedSymptoms: ["안면 홍조", "뼈 건강", "피부 건조"],
        searchKeyword: "이소플라본 40mg",
    },
    {
        id: "vitamin-d",
        name: "비타민 D",
        nameEn: "Vitamin D",
        category: "bone",
        description:
            "칼슘 흡수를 돕고 뼈 건강을 유지하는 필수 영양소입니다. 햇빛 노출로 합성되지만, 실내 생활이 많으면 부족하기 쉽습니다.",
        benefits: [
            "뼈 건강 유지",
            "면역력 강화",
            "기분 개선",
            "근육 기능 지원",
        ],
        recommendedDosage: "하루 1000-2000 IU (25-50mcg)",
        bestForm: "비타민 D3 (콜레칼시페롤)",
        timing: "지방이 포함된 식사와 함께",
        cautions: [
            "과다 섭취 시 고칼슘혈증 위험",
            "신장 질환자는 전문의 상담 필요",
        ],
        relatedSymptoms: ["뼈 통증", "피로", "우울감", "면역력 저하"],
        searchKeyword: "비타민 D3 2000IU",
    },
    {
        id: "omega-3",
        name: "오메가3",
        nameEn: "Omega-3",
        category: "hormone",
        description:
            "EPA와 DHA를 포함한 필수 지방산으로, 항염 작용과 호르몬 균형에 도움을 줍니다.",
        benefits: [
            "심혈관 건강 개선",
            "염증 감소",
            "뇌 건강 지원",
            "질 건조 완화",
        ],
        recommendedDosage: "하루 1000-2000mg (EPA+DHA 기준)",
        bestForm: "rTG 형태 또는 고농도 EPA/DHA",
        timing: "식사와 함께 섭취",
        cautions: [
            "혈액 응고 저하제 복용 시 주의",
            "비린내가 적은 제품 선택 권장",
        ],
        relatedSymptoms: ["질 건조", "관절 통증", "집중력 저하"],
        searchKeyword: "오메가3 rTG 고농도",
    },
    {
        id: "magnesium",
        name: "마그네슘",
        nameEn: "Magnesium",
        category: "sleep",
        description:
            "300가지 이상의 효소 반응에 관여하는 필수 미네랄로, 근육 이완과 수면에 도움을 줍니다.",
        benefits: [
            "수면 질 개선",
            "근육 이완",
            "스트레스 완화",
            "심장 건강 지원",
        ],
        recommendedDosage: "하루 300-400mg",
        bestForm: "마그네슘 글리시네이트 또는 시트레이트 (흡수율 높음)",
        timing: "저녁 식사 후 또는 취침 전",
        cautions: [
            "과다 섭취 시 설사 가능",
            "신장 질환자는 전문의 상담 필요",
        ],
        relatedSymptoms: ["수면 장애", "근육 경련", "불안", "피로"],
        searchKeyword: "마그네슘 글리시네이트 400mg",
    },
    {
        id: "vitamin-b",
        name: "비타민 B군",
        nameEn: "Vitamin B Complex",
        category: "energy",
        description:
            "에너지 대사와 신경 기능에 필수적인 8가지 비타민의 복합체입니다.",
        benefits: [
            "에너지 생성 지원",
            "피로 회복",
            "신경 건강 유지",
            "기분 개선",
        ],
        recommendedDosage: "B군 복합제 (각 비타민별 권장량 포함)",
        bestForm: "활성형 비타민 B (메틸코발라민 등)",
        timing: "아침 식사와 함께",
        cautions: [
            "과다 섭취 시 소변 색 변화 (정상)",
            "공복 섭취 시 속쓰림 가능",
        ],
        relatedSymptoms: ["피로", "집중력 저하", "우울감"],
        searchKeyword: "비타민 B 복합제 활성형",
    },
    {
        id: "iron",
        name: "철분",
        nameEn: "Iron",
        category: "energy",
        description:
            "헤모글로빈 생성에 필수적인 미네랄로, 산소 운반과 에너지 생성에 중요합니다.",
        benefits: [
            "빈혈 예방",
            "에너지 증진",
            "면역력 강화",
            "인지 기능 개선",
        ],
        recommendedDosage: "하루 18mg (폐경 전 여성 기준)",
        bestForm: "철분 비스글리시네이트 (흡수율 높고 속쓰림 적음)",
        timing: "공복 또는 비타민 C와 함께",
        cautions: [
            "변비 가능성",
            "과다 섭취 시 철분 과부하 위험",
            "혈액 검사 후 복용 권장",
        ],
        relatedSymptoms: ["피로", "창백함", "어지러움", "탈모"],
        searchKeyword: "철분 비스글리시네이트 18mg",
    },
    {
        id: "calcium",
        name: "칼슘",
        nameEn: "Calcium",
        category: "bone",
        description:
            "뼈와 치아의 주요 구성 성분이며, 근육 수축과 신경 전달에도 관여합니다.",
        benefits: [
            "뼈 건강 유지",
            "골다공증 예방",
            "근육 기능 지원",
            "신경 전달 개선",
        ],
        recommendedDosage: "하루 1000-1200mg",
        bestForm: "칼슘 시트레이트 (공복 흡수 가능) 또는 탄산칼슘",
        timing: "하루 2-3회 나누어 섭취 (한 번에 500mg 이하)",
        cautions: [
            "비타민 D와 함께 섭취 권장",
            "과다 섭취 시 신장 결석 위험",
        ],
        relatedSymptoms: ["뼈 통증", "근육 경련", "골밀도 저하"],
        searchKeyword: "칼슘 시트레이트 500mg",
    },
    {
        id: "probiotics",
        name: "프로바이오틱스",
        nameEn: "Probiotics",
        category: "immunity",
        description:
            "장 건강을 개선하는 유익균으로, 면역력과 전반적인 건강에 도움을 줍니다.",
        benefits: [
            "장 건강 개선",
            "면역력 강화",
            "질 건강 유지",
            "기분 개선",
        ],
        recommendedDosage: "하루 100억-500억 CFU",
        bestForm: "다균주 복합 제품, 장용성 캡슐",
        timing: "공복 또는 식사 30분 전",
        cautions: [
            "냉장 보관 필요한 제품 주의",
            "면역 저하자는 전문의 상담",
        ],
        relatedSymptoms: ["소화불량", "면역력 저하", "질 건조"],
        searchKeyword: "프로바이오틱스 100억 다균주",
    },
];

/**
 * 증상별 추천 성분
 */
export const SYMPTOM_INGREDIENTS: Record<string, string[]> = {
    "안면 홍조": ["isoflavone", "vitamin-d"],
    "수면 장애": ["magnesium", "vitamin-b"],
    "질 건조": ["omega-3", "probiotics", "vitamin-d"],
    피로: ["iron", "vitamin-b", "magnesium"],
    "관절 통증": ["omega-3", "calcium", "vitamin-d"],
    "집중력 저하": ["omega-3", "vitamin-b", "iron"],
    우울감: ["vitamin-d", "omega-3", "vitamin-b"],
    "뼈 건강": ["calcium", "vitamin-d", "isoflavone"],
    // 수면 관련 매핑
    "잠들기까지 걸리는 시간": ["magnesium", "vitamin-b"],
    "중간 각성 횟수": ["magnesium", "vitamin-b"],
    "총 수면 시간": ["magnesium", "vitamin-b"],
    "기상 시 피로도": ["vitamin-b", "iron", "magnesium"],
    "낮 졸음": ["vitamin-b", "iron"],
    // 스트레스 관련 매핑
    "정서적 소진": ["magnesium", "vitamin-b", "vitamin-d"],
    "냉소주의": ["vitamin-d", "omega-3"],
    "성취감 저하": ["vitamin-b", "omega-3"],
    "신체 증상": ["magnesium", "vitamin-b"],
    "짜증과 분노": ["magnesium", "vitamin-d", "omega-3"],
    // 영양소 결핍 관련 매핑
    "모발/피부 건강": ["isoflavone", "vitamin-d", "iron"],
    "에너지 수준": ["vitamin-b", "iron", "magnesium"],
    "면역력": ["vitamin-d", "probiotics", "iron"],
    "뼈/근육 건강": ["calcium", "vitamin-d", "magnesium"],
    "인지 기능": ["omega-3", "vitamin-b", "iron"],
};

/**
 * 성분 검색
 */
export function getIngredient(id: string): Ingredient | undefined {
    return INGREDIENTS.find((ing) => ing.id === id);
}

/**
 * 증상별 추천 성분 가져오기
 */
export function getIngredientsForSymptom(symptom: string): Ingredient[] {
    const ingredientIds = SYMPTOM_INGREDIENTS[symptom] || [];
    return ingredientIds
        .map((id) => getIngredient(id))
        .filter((ing): ing is Ingredient => ing !== undefined);
}

/**
 * 카테고리별 성분 가져오기
 */
export function getIngredientsByCategory(
    category: Ingredient["category"]
): Ingredient[] {
    return INGREDIENTS.filter((ing) => ing.category === category);
}

/**
 * 쿠팡 파트너스 링크 생성
 */
export function getCoupangLink(keyword: string): string {
    // 실제 파트너스 ID로 교체 필요
    const partnerId = "YOUR_COUPANG_PARTNER_ID";
    const encodedKeyword = encodeURIComponent(keyword);
    return `https://www.coupang.com/np/search?q=${encodedKeyword}&channel=user&component=&eventCategory=SRP&trcid=&traid=&sorter=scoreDesc&minPrice=&maxPrice=&priceRange=&filterType=&listSize=36&filter=&isPriceRange=false&brand=&offerCondition=&rating=0&page=1&rocketAll=false&searchIndexingToken=&backgroundColor=`;
}

/**
 * 아이허브 링크 생성
 */
export function getIherbLink(keyword: string): string {
    const encodedKeyword = encodeURIComponent(keyword);
    return `https://kr.iherb.com/search?kw=${encodedKeyword}`;
}
