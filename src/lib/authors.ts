/**
 * 저자 데이터 및 타입 정의
 * E-E-A-T 신호 강화를 위한 저자 정보
 */

export interface Author {
    id: string;
    name: string;
    nameEn: string;
    role: string;
    credentials: string[];
    bio: string;
    image?: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

/**
 * 저자 목록
 */
export const AUTHORS: Record<string, Author> = {
    "health-lab": {
        id: "health-lab",
        name: "Health Lab Research Team",
        nameEn: "Health Lab Research Team",
        role: "여성 건강 연구팀",
        credentials: ["여성 건강 데이터 분석", "의학 문헌 리뷰"],
        bio: "Health Lab Research Team은 국내외 의학 연구 자료를 분석하여 한국 여성에게 적합한 건강 정보를 제공하는 전문 연구팀입니다. WHO, NIH, 보건복지부 등 신뢰할 수 있는 기관의 데이터를 기반으로 콘텐츠를 제작합니다.",
        image: "/images/authors/health-lab-team.png",
    },
    "kim-jihye": {
        id: "kim-jihye",
        name: "김지혜",
        nameEn: "Jihye Kim",
        role: "영양학 전문 에디터",
        credentials: ["영양학 석사", "임상영양사 자격증"],
        bio: "10년 이상의 영양 상담 경력을 보유한 임상영양사입니다. 여성 건강과 호르몬 균형을 위한 영양 관리를 전문으로 연구하고 있습니다.",
        image: "/images/authors/kim-jihye.png",
    },
    "park-sumin": {
        id: "park-sumin",
        name: "박수민",
        nameEn: "Sumin Park",
        role: "수면 건강 전문가",
        credentials: ["수면다원검사기사", "건강관리학 석사"],
        bio: "수면 장애 및 생체리듬 연구를 전문으로 하며, 갱년기 여성의 수면 건강 개선을 위한 콘텐츠를 담당하고 있습니다.",
        image: "/images/authors/park-sumin.png",
    },
    "lee-eunji": {
        id: "lee-eunji",
        name: "이은지",
        nameEn: "Eunji Lee",
        role: "호르몬 건강 에디터",
        credentials: ["보건학 석사", "여성건강관리사"],
        bio: "여성 호르몬 변화와 갱년기 건강에 대한 심층 리서치를 담당합니다. 복잡한 의학 정보를 이해하기 쉽게 전달하는 것을 목표로 합니다.",
        image: "/images/authors/lee-eunji.png",
    },
};

/**
 * 기본 저자 (팀)
 */
export const DEFAULT_AUTHOR = AUTHORS["health-lab"];

/**
 * 저자 ID로 저자 정보 조회
 */
export function getAuthorById(id: string): Author {
    return AUTHORS[id] || DEFAULT_AUTHOR;
}

/**
 * 카테고리별 기본 저자 매핑
 */
export const CATEGORY_AUTHORS: Record<string, string> = {
    "갱년기": "lee-eunji",
    "호르몬": "lee-eunji",
    "수면": "park-sumin",
    "영양": "kim-jihye",
    "스트레스": "health-lab",
    "default": "health-lab",
};

/**
 * 카테고리로 저자 조회
 */
export function getAuthorByCategory(category: string): Author {
    const authorId = CATEGORY_AUTHORS[category] || CATEGORY_AUTHORS["default"];
    return getAuthorById(authorId);
}
