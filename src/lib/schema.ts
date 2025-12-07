/**
 * 구조화 데이터 (Structured Data) 생성
 * SEO 및 YMYL 준수
 */

export interface MedicalWebPageSchema {
    "@context": "https://schema.org";
    "@type": "MedicalWebPage";
    name: string;
    description: string;
    url: string;
    lastReviewed: string;
    reviewedBy: {
        "@type": "Organization";
        name: string;
    };
    mainEntity?: {
        "@type": "MedicalCondition";
        name: string;
        description: string;
    };
}

export interface SoftwareApplicationSchema {
    "@context": "https://schema.org";
    "@type": "SoftwareApplication";
    name: string;
    description: string;
    applicationCategory: string;
    operatingSystem: string;
    offers: {
        "@type": "Offer";
        price: string;
        priceCurrency: string;
    };
}

export interface FAQPageSchema {
    "@context": "https://schema.org";
    "@type": "FAQPage";
    mainEntity: Array<{
        "@type": "Question";
        name: string;
        acceptedAnswer: {
            "@type": "Answer";
            text: string;
        };
    }>;
}

export interface BreadcrumbListSchema {
    "@context": "https://schema.org";
    "@type": "BreadcrumbList";
    itemListElement: Array<{
        "@type": "ListItem";
        position: number;
        name: string;
        item: string;
    }>;
}

/**
 * MedicalWebPage 스키마 생성
 */
export function createMedicalWebPageSchema(
    name: string,
    description: string,
    url: string,
    conditionName?: string,
    conditionDescription?: string
): MedicalWebPageSchema {
    const schema: MedicalWebPageSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name,
        description,
        url,
        lastReviewed: new Date().toISOString().split("T")[0],
        reviewedBy: {
            "@type": "Organization",
            name: "Health Lab Research Team",
        },
    };

    if (conditionName && conditionDescription) {
        schema.mainEntity = {
            "@type": "MedicalCondition",
            name: conditionName,
            description: conditionDescription,
        };
    }

    return schema;
}

/**
 * SoftwareApplication 스키마 생성
 */
export function createSoftwareApplicationSchema(
    name: string,
    description: string
): SoftwareApplicationSchema {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        description,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "KRW",
        },
    };
}

/**
 * FAQPage 스키마 생성
 */
export function createFAQPageSchema(
    faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/**
 * BreadcrumbList 스키마 생성
 */
export function createBreadcrumbListSchema(
    items: Array<{ name: string; url: string }>
): BreadcrumbListSchema {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * 스키마를 JSON-LD 스크립트 태그로 변환
 */
export function schemaToScript(schema: object): string {
    return JSON.stringify(schema);
}
