import { ExternalLink, BookOpen } from "lucide-react";

interface Reference {
    title: string;
    source: string;
    url?: string;
    year?: string;
}

interface ReferencesProps {
    references: Reference[];
    title?: string;
}

/**
 * 기본 참고문헌 목록 (공통)
 */
export const DEFAULT_REFERENCES: Reference[] = [
    {
        title: "Women's Health Guidelines",
        source: "World Health Organization (WHO)",
        url: "https://www.who.int/health-topics/women-s-health",
        year: "2024",
    },
    {
        title: "Menopause: Overview",
        source: "National Institutes of Health (NIH)",
        url: "https://www.nia.nih.gov/health/menopause",
        year: "2024",
    },
    {
        title: "여성 건강 통계",
        source: "보건복지부",
        url: "https://www.mohw.go.kr",
        year: "2024",
    },
    {
        title: "갱년기 증상 및 관리 지침",
        source: "대한폐경학회",
        url: "https://www.menopause.or.kr",
        year: "2024",
    },
];

/**
 * 카테고리별 추가 참고문헌
 */
export const CATEGORY_REFERENCES: Record<string, Reference[]> = {
    "갱년기": [
        {
            title: "The Menopause Society Guidelines",
            source: "The Menopause Society (NAMS)",
            url: "https://www.menopause.org",
            year: "2024",
        },
    ],
    "수면": [
        {
            title: "Sleep Health Recommendations",
            source: "National Sleep Foundation",
            url: "https://www.sleepfoundation.org",
            year: "2024",
        },
    ],
    "영양": [
        {
            title: "Dietary Guidelines",
            source: "식품의약품안전처",
            url: "https://www.mfds.go.kr",
            year: "2024",
        },
    ],
};

/**
 * 참고문헌 섹션 컴포넌트
 * 블로그 하단에 신뢰성 강화를 위한 출처 표시
 */
export function References({
    references,
    title = "참고 자료 및 출처",
}: ReferencesProps) {
    return (
        <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
                본 콘텐츠는 아래 신뢰할 수 있는 기관의 자료를 참고하여 작성되었습니다.
            </p>
            <ul className="space-y-2">
                {references.map((ref, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                    >
                        <span className="text-gray-400 font-mono text-xs mt-0.5">
                            [{index + 1}]
                        </span>
                        <div>
                            <span className="font-medium">{ref.title}</span>
                            <span className="text-gray-500"> — {ref.source}</span>
                            {ref.year && (
                                <span className="text-gray-400"> ({ref.year})</span>
                            )}
                            {ref.url && (
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 ml-2 text-rose-600 hover:text-rose-700 hover:underline"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>출처 확인</span>
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                ⚠️ 본 정보는 의학적 조언을 대체하지 않습니다.
                건강 관련 결정을 내리기 전에 반드시 의료 전문가와 상담하시기 바랍니다.
            </p>
        </section>
    );
}

/**
 * 카테고리에 맞는 참고문헌 목록 생성 유틸
 */
export function getReferencesForCategory(category: string): Reference[] {
    const categoryRefs = CATEGORY_REFERENCES[category] || [];
    return [...DEFAULT_REFERENCES, ...categoryRefs];
}
