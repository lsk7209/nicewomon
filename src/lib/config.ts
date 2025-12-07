/**
 * 사이트 메타데이터 및 SEO 설정
 */

export const SITE_CONFIG = {
    name: "나이스우먼",
    nameEn: "Nice Woman",
    description:
        "30~55세 여성의 신체 변화를 데이터 기반 자가진단, 성분 기반 정보, 연령별 루틴으로 안내하는 건강 플랫폼",
    tagline: "불안 대신 데이터로, 막연함 대신 루틴으로",
    url: "https://nicewomen.kr", // 실제 도메인
    ogImage: "/og-image.png",
    keywords: [
        "여성 건강",
        "호르몬 밸런스",
        "갱년기",
        "폐경기",
        "건강 진단",
        "수면 개선",
        "스트레스 관리",
        "영양소",
        "건강 루틴",
        "30대 여성",
        "40대 여성",
        "50대 여성",
    ],
    author: "Health Lab Research Team",
    email: "contact@nicewomen.kr",
    social: {
        instagram: "",
        youtube: "",
        blog: "",
    },
    analytics: {
        googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "", // GA4 측정 ID (G-XXXXXXXXXX)
    },
    adsense: {
        publisherId: "", // AdSense Publisher ID
        adSlots: {
            resultTop: "",
            resultMiddle: "",
            resultBottom: "",
            guideBottom: "",
        },
    },
};

/**
 * 도구별 메타데이터
 */
export const TOOL_METADATA = {
    hormone: {
        title: "호르몬 밸런스 파인더 | 나이스우먼",
        description:
            "8가지 증상으로 호르몬 밸런스 상태를 확인하고, 맞춤 페르소나와 개선 가이드를 받아보세요. 무료 자가진단 도구.",
        keywords: [
            "호르몬 밸런스",
            "호르몬 검사",
            "갱년기 증상",
            "폐경기 증상",
            "여성 호르몬",
        ],
        ogImage: "/og-hormone.png",
    },
    sleep: {
        title: "수면 질 테스트 | 나이스우먼",
        description:
            "수면 패턴을 분석하고 수면 질을 개선할 수 있는 맞춤 솔루션을 제공합니다. 무료 수면 진단 도구.",
        keywords: [
            "수면 질",
            "불면증",
            "수면 장애",
            "수면 개선",
            "수면 패턴",
        ],
        ogImage: "/og-sleep.png",
    },
    stress: {
        title: "스트레스·번아웃 테스트 | 나이스우먼",
        description:
            "스트레스 수준과 번아웃 정도를 측정하고, 회복을 위한 실질적인 가이드를 받아보세요.",
        keywords: [
            "스트레스 테스트",
            "번아웃",
            "정서적 소진",
            "스트레스 관리",
            "멘탈 헬스",
        ],
        ogImage: "/og-stress.png",
    },
    "body-age": {
        title: "체형 나이 측정기 | 나이스우먼",
        description:
            "복부둘레와 신체 데이터로 체형 나이를 계산하고, 연령대 비교 분석을 제공합니다.",
        keywords: [
            "체형 나이",
            "복부 비만",
            "BMI",
            "건강 나이",
            "체형 분석",
        ],
        ogImage: "/og-body-age.png",
    },
    nutrients: {
        title: "영양소 결핍 분석기 | 나이스우먼",
        description:
            "증상 기반으로 결핍 가능성이 높은 영양소를 분석하고, 성분 가이드를 제공합니다.",
        keywords: [
            "영양소 결핍",
            "비타민 부족",
            "미네랄",
            "영양 분석",
            "건강 보조제",
        ],
        ogImage: "/og-nutrients.png",
    },
};

/**
 * 가이드 페이지 메타데이터
 */
export const GUIDE_METADATA = {
    symptoms: {
        title: "증상별 가이드 | 나이스우먼",
        description:
            "여성 건강 증상별 원인, 대처법, 관련 성분 정보를 제공합니다.",
        keywords: ["여성 건강 증상", "갱년기 증상", "건강 가이드"],
    },
    "hormone-basics": {
        title: "호르몬 기초 지식 | 나이스우먼",
        description:
            "에스트로겐, 프로게스테론 등 여성 호르몬의 역할과 연령별 변화를 알아보세요.",
        keywords: ["여성 호르몬", "에스트로겐", "프로게스테론", "호르몬 변화"],
    },
    "30s-health": {
        title: "30대 여성 건강 가이드 | 나이스우먼",
        description:
            "30대 여성의 주요 건강 변화와 예방, 관리 방법을 안내합니다.",
        keywords: ["30대 여성", "건강 관리", "예방", "생활 습관"],
    },
    "40s-health": {
        title: "40대 여성 건강 가이드 | 나이스우먼",
        description:
            "40대 여성의 호르몬 변화와 건강 관리 방법을 상세히 안내합니다.",
        keywords: ["40대 여성", "갱년기 전기", "호르몬 변화", "건강 관리"],
    },
    "50s-health": {
        title: "50대 여성 건강 가이드 | 나이스우먼",
        description:
            "50대 여성의 폐경기 관리와 건강 유지 방법을 안내합니다.",
        keywords: ["50대 여성", "폐경기", "갱년기", "건강 관리"],
    },
    sleep: {
        title: "수면 가이드 | 나이스우먼",
        description:
            "수면 질을 개선하는 과학적 방법과 실천 가능한 팁을 제공합니다.",
        keywords: ["수면 개선", "불면증 해결", "수면 위생", "수면 루틴"],
    },
    stress: {
        title: "스트레스 관리 가이드 | 나이스우먼",
        description:
            "스트레스를 효과적으로 관리하고 회복하는 방법을 안내합니다.",
        keywords: ["스트레스 관리", "번아웃 회복", "마음챙김", "이완 기법"],
    },
    nutrition: {
        title: "영양 가이드 | 나이스우먼",
        description:
            "여성 건강에 필수적인 영양소와 올바른 섭취 방법을 안내합니다.",
        keywords: ["여성 영양", "건강 보조제", "비타민", "미네랄"],
    },
};

/**
 * FAQ 데이터
 */
export const FAQS = [
    {
        question: "나이스우먼은 의학적 진단 도구인가요?",
        answer:
            "아니요. 나이스우먼은 자가진단 및 건강 정보 제공 플랫폼으로, 의학적 진단이나 치료를 대신할 수 없습니다. 증상이 심하거나 지속되는 경우 반드시 전문의 상담을 받으시기 바랍니다.",
    },
    {
        question: "진단 결과는 얼마나 정확한가요?",
        answer:
            "진단 결과는 WHO, NIH, 보건복지부 자료를 기반으로 한 통계적 분석이며, 개인의 주관적 응답에 따라 달라질 수 있습니다. 참고 자료로 활용하시고, 정확한 건강 상태는 의료기관에서 확인하세요.",
    },
    {
        question: "개인정보는 어떻게 관리되나요?",
        answer:
            "초기 30일간은 브라우저의 localStorage에만 저장되며, 서버로 전송되지 않습니다. 가입 후에도 최소한의 정보만 수집하며, 개인정보 처리방침을 준수합니다.",
    },
    {
        question: "성분 가이드의 제품 링크는 무엇인가요?",
        answer:
            "성분 기준 정보를 제공하며, 특정 제품을 직접 추천하지 않습니다. 링크는 해당 성분을 검색할 수 있는 쇼핑 사이트로 연결되며, 제품 선택은 사용자의 판단에 따릅니다.",
    },
    {
        question: "무료로 이용할 수 있나요?",
        answer:
            "네, 모든 진단 도구와 가이드는 무료로 제공됩니다. 광고를 통해 서비스를 운영하며, 사용자에게 비용을 청구하지 않습니다.",
    },
];

/**
 * 법적 문구
 */
export const LEGAL_DISCLAIMER =
    "본 서비스는 의학적 진단 또는 치료를 대신할 수 없습니다. 증상이 심하거나 지속되는 경우 반드시 전문의 상담을 받으시기 바랍니다.";

export const DATA_SOURCE =
    "Source: Adapted from WHO/NIH, 보건복지부 자료 기반. Health Lab Research Team 재구성.";
