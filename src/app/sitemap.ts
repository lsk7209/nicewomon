import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nicewomen.kr";
    const currentDate = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: currentDate, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: currentDate, priority: 0.7 },
        { url: `${baseUrl}/privacy`, lastModified: currentDate, priority: 0.6 },
        { url: `${baseUrl}/terms`, lastModified: currentDate, priority: 0.6 },
        { url: `${baseUrl}/faq`, lastModified: currentDate, priority: 0.7 },
        { url: `${baseUrl}/search`, lastModified: currentDate, priority: 0.6 },
        { url: `${baseUrl}/bookmarks`, lastModified: currentDate, priority: 0.5 },
    ];

    const blogSlugs = [
        "hot-flash-7day-plan",
        "sleep-habit-fixes",
        "iron-deficiency-checklist",
        "caffeine-cutoff-guide",
        "blood-sugar-eating-out",
        "menopause-weight-gain",
        "brain-fog-10min-recovery",
        "edema-low-salt",
        "magnesium-forms-guide",
        "fine-dust-sleep-care",
        "exercise-for-40s-women",
        "hormone-balance-foods",
        "iron-deficiency-women",
        "menopause-symptoms-guide",
        "sleep-quality-improvement",
        "stress-management-techniques",
        "pms-cravings-control",
        "digital-burnout-detox",
        "circadian-sleep-hygiene",
        "menopause-anxiety-coping",
        "iron-supplement-timing",
        "osteoporosis-prevention-over50",
        "menstrual-cycle-training",
        "luteal-sleep-strategy",
        "low-impact-hiit-menopause",
        "hydrotherapy-electrolyte-guide",
        "fiber-gut-health",
        "mindful-eating-5steps",
        "low-fodmap-intro",
        "morning-sunlight-sleep",
        "shift-work-sleep-guide",
        "caffeine-sensitivity-check",
        "pms-emotion-waves",
        "protein-powder-choice",
        "iron-supplement-stomach",
        "office-neck-shoulder-relief",
        "jetlag-minimize-plan",
        "burnout-recovery-steps",
        "heart-health-women-signs",
        "night-awakening-fix",
        "period-pain-diet-stretch",
        "postpartum-sleep-nutrition",
        "cold-extremities-care",
        "chronic-fatigue-vs-burnout",
    ];

    const guideSlugs = [
        "hormone-basics",
        "30s-health",
        "40s-health",
        "50s-health",
        "sleep",
        "stress",
        "nutrition",
        "symptoms",
        "blood-sugar",
        "pms",
        "cbti-basics",
        "trf-fasting-women",
        "thyroid-hypo-lifestyle",
        "food-label-reading",
        "pelvic-floor-care",
        "hrv-monitoring-guide",
        "migraine-trigger-guide",
        "reflux-gerd-lifestyle",
        "air-quality-sleep",
        "morning-evening-routine",
    ];

    const toolSlugs = [
        "hormone",
        "sleep",
        "stress",
        "body-age",
        "nutrients",
        "blood-sugar",
        "pms",
        "anemia",
        "digital-burnout",
        "edema",
        "caffeine-cutoff-calculator",
        "alcohol-sleep-impact",
        "water-electrolyte-planner",
        "hrv-rest-day-advisor",
        "burnout-risk-screener",
        "light-exposure-planner",
        "sodium-intake-score",
        "protein-tracker-basic",
        "pelvic-floor-reminder",
        "jetlag-adjust-planner",
    ];

    const blogPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/blog`, lastModified: currentDate, priority: 0.9 },
        ...blogSlugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: currentDate,
            priority: 0.8,
        })),
    ];

    const guidePages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/guide`, lastModified: currentDate, priority: 0.9 },
        ...guideSlugs.map((slug) => ({
            url: `${baseUrl}/guide/${slug}`,
            lastModified: currentDate,
            priority: 0.8,
        })),
    ];

    const toolPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/tools`, lastModified: currentDate, priority: 0.9 },
        ...toolSlugs.map((slug) => ({
            url: `${baseUrl}/tools/${slug}`,
            lastModified: currentDate,
            priority: 0.9,
        })),
        // 테스트/결과 페이지는 우선순위를 낮춰 포함
        ...toolSlugs.map((slug) => ({
            url: `${baseUrl}/tools/${slug}/test`,
            lastModified: currentDate,
            priority: 0.6,
        })),
        ...["hormone", "sleep", "stress", "nutrients", "body-age"].map((slug) => ({
            url: `${baseUrl}/tools/${slug}/result`,
            lastModified: currentDate,
            priority: 0.5,
        })),
    ];

    return [...staticPages, ...blogPages, ...guidePages, ...toolPages];
}
