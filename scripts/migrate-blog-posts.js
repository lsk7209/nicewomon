import fs from 'fs';
import path from 'path';

// 하드코딩된 블로그 데이터
const blogPosts = [
    {
        slug: "pms-cravings-control",
        title: "PMS 과식·당 당기는 날, 갈망 다루기",
        excerpt: "PMS 시기 당·짠 음식 갈망을 줄이는 식사 순서, 단백질·섬유 전략, 카페인·알코올 컷오프를 안내합니다.",
        category: "PMS",
        date: "2024-12-02",
        image: "/blog/pms-cravings.jpg",
    },
    {
        slug: "digital-burnout-detox",
        title: "디지털 번아웃 디톡스: 7일 알림 다이어트 플랜",
        excerpt: "스크린타임·알림을 줄이고 수면과 집중력을 회복하는 7일 플랜을 제안합니다.",
        category: "스트레스",
        date: "2024-12-02",
        image: "/blog/digital-burnout.jpg",
    },
    {
        slug: "hot-flash-7day-plan",
        title: "홍조가 밤에 심한 이유? 7일 루틴으로 줄이기",
        excerpt: "실내 온도·습도, 식단, 호흡을 조합해 홍조와 야간 각성을 줄이는 7일 계획을 소개합니다.",
        category: "갱년기",
        date: "2024-12-01",
        image: "/blog/hot-flash.jpg",
    },
    {
        slug: "sleep-habit-fixes",
        title: "수면을 망치는 5가지 습관과 교정법",
        excerpt: "야근, 늦은 카페인, 스크린타임을 줄이고 바로 적용할 수 있는 밤 루틴을 안내합니다.",
        category: "수면",
        date: "2024-12-01",
        image: "/blog/sleep-habits.jpg",
    },
    {
        slug: "iron-deficiency-checklist",
        title: "철분 부족 체크리스트: 피로·탈모·어지럼이 반복될 때",
        excerpt: "가임기 여성에게 흔한 철 결핍을 자가 체크하고 식단·보충제 타이밍을 정리합니다.",
        category: "영양",
        date: "2024-12-01",
        image: "/blog/iron-check.jpg",
    },
    {
        slug: "caffeine-cutoff-guide",
        title: "카페인 컷오프: 오후 몇 시에 끊어야 할까?",
        excerpt: "카페인 반감기, 개인 민감도, 수면 위생에 맞춘 시간대별 대체 음료를 제안합니다.",
        category: "수면",
        date: "2024-12-01",
        image: "/blog/caffeine.jpg",
    },
    {
        slug: "blood-sugar-eating-out",
        title: "야근·회식 많은 날, 혈당 스파이크 줄이는 외식 주문법",
        excerpt: "국물·탄수 위주 식사에서 혈당 급등을 줄이는 순서, 양, 사이드 선택 팁을 정리합니다.",
        category: "영양",
        date: "2024-12-01",
        image: "/blog/blood-sugar.jpg",
    },
    {
        slug: "menopause-weight-gain",
        title: "갱년기 체중 증가: 호르몬·수면·식단 연쇄 풀어보기",
        excerpt: "중년 이후 체중 변화의 주요 원인과 수면·근력·단백질 전략을 제안합니다.",
        category: "갱년기",
        date: "2024-12-01",
        image: "/blog/menopause-weight.jpg",
    },
    {
        slug: "circadian-sleep-hygiene",
        title: "서카디언 리듬을 맞추는 수면 위생",
        excerpt: "아침 빛·저녁 어둠·식사·카페인 타이밍으로 숙면을 돕는 방법을 안내합니다.",
        category: "수면",
        date: "2024-12-03",
        image: "/blog/circadian.jpg",
    },
    {
        slug: "menopause-anxiety-coping",
        title: "갱년기 불안 다루기: 호흡·수면·루틴",
        excerpt: "호흡·수면·카페인 관리로 갱년기 불안을 줄이는 방법을 안내합니다.",
        category: "갱년기",
        date: "2024-12-03",
        image: "/blog/menopause-anxiety.jpg",
    },
    {
        slug: "osteoporosis-prevention-over50",
        title: "50대 이후 골다공증 예방 루틴",
        excerpt: "칼슘·비타민D·단백질, 저강도 근력·햇빛 루틴으로 뼈 건강 지키기",
        category: "뼈 건강",
        date: "2024-12-04",
        image: "/blog/osteoporosis-over50.jpg",
    },
    {
        slug: "brain-fog-10min-recovery",
        title: "브레인 포그 날, 10분 회복 루틴",
        excerpt: "호흡·스트레칭·저당 스낵으로 10분 안에 집중력을 회복하는 방법을 안내합니다.",
        category: "스트레스",
        date: "2024-12-01",
        image: "/blog/brain-fog.jpg",
    },
    {
        slug: "edema-low-salt",
        title: "부종 잡는 저염·칼륨 전략",
        excerpt: "국물 많은 식단에서 염분을 줄이고 칼륨 섭취를 늘리는 실천 팁을 제공합니다.",
        category: "영양",
        date: "2024-12-01",
        image: "/blog/edema.jpg",
    },
    {
        slug: "magnesium-forms-guide",
        title: "마그네슘 형태별 효능과 복용 타이밍",
        excerpt: "글리시네이트·시트레이트 등 형태별 차이와 수면·근육·PMS 목적별 복용법을 정리합니다.",
        category: "영양",
        date: "2024-12-01",
        image: "/blog/magnesium.jpg",
    },
    {
        slug: "fine-dust-sleep-care",
        title: "미세먼지 많은 날 호흡기·수면 관리 체크리스트",
        excerpt: "공기질 관리, 취침 전 세정, 가습·온도 설정까지 하루 체크리스트를 제공합니다.",
        category: "수면",
        date: "2024-12-01",
        image: "/blog/fine-dust.jpg",
    },
    {
        slug: "iron-supplement-timing",
        title: "철분제 언제 먹어야 할까? 흡수 높이는 타이밍",
        excerpt: "철분제 복용 시간, 비타민C 병용, 피해야 할 음식·음료를 정리합니다.",
        category: "영양",
        date: "2024-12-04",
        image: "/blog/iron-supplement.jpg",
    },
    {
        slug: "menstrual-cycle-training",
        title: "생리 주기별 운동 강도 조절법",
        excerpt: "난포기·배란기·황체기별 운동 강도를 조정해 퍼포먼스와 회복을 높이세요.",
        category: "운동",
        date: "2024-12-05",
        image: "/blog/cycle-training.jpg",
    },
    {
        slug: "luteal-sleep-strategy",
        title: "황체기 수면 전략: 체온·카페인·식사 관리",
        excerpt: "체온 상승 시기, 침실 환경·카페인 컷오프·식사 타이밍으로 수면을 지키는 방법.",
        category: "수면",
        date: "2024-12-05",
        image: "/blog/luteal-sleep.jpg",
    },
    {
        slug: "low-impact-hiit-menopause",
        title: "갱년기 맞춤 저충격 HIIT 10분 루틴",
        excerpt: "관절 부담을 줄이고 심박을 올리는 10분 저충격 HIIT 루틴.",
        category: "운동",
        date: "2024-12-05",
        image: "/blog/low-impact-hiit.jpg",
    },
    {
        slug: "hydrotherapy-electrolyte-guide",
        title: "수분·전해질 밸런스 가이드",
        excerpt: "활동량·계절에 맞춘 수분·전해질 섭취법과 부종 관리 팁.",
        category: "영양",
        date: "2024-12-05",
        image: "/blog/hydration.jpg",
    },
    {
        slug: "fiber-gut-health",
        title: "식이섬유로 장 건강 챙기기: 프리·프로바이오틱스",
        excerpt: "프리/프로바이오틱스 식품과 섬유질 섭취, 복부팽만 줄이는 팁.",
        category: "장 건강",
        date: "2024-12-05",
        image: "/blog/fiber-gut.jpg",
    },
    {
        slug: "mindful-eating-5steps",
        title: "마음챙김 식사 5단계: 폭식 줄이고 포만감 높이기",
        excerpt: "식사 속도를 늦추고 포만 신호를 인식하는 5단계 마음챙김 식사법.",
        category: "식습관",
        date: "2024-12-05",
        image: "/blog/mindful-eating.jpg",
    },
    {
        slug: "low-fodmap-intro",
        title: "저 FODMAP 식단 입문: 가스·복부팽만 완화",
        excerpt: "저 FODMAP 식품 선택과 단계적 재도입으로 복부팽만을 줄이는 법.",
        category: "장 건강",
        date: "2024-12-05",
        image: "/blog/low-fodmap.jpg",
    },
    {
        slug: "morning-sunlight-sleep",
        title: "아침 햇빛 노출로 수면 질 올리는 법",
        excerpt: "기상 후 30분 내 햇빛 노출, 점심 산책, 저녁 조도 관리로 서카디언 리듬을 안정시키는 방법.",
        category: "수면",
        date: "2024-12-06",
        image: "/blog/morning-sunlight.jpg",
    },
    {
        slug: "shift-work-sleep-guide",
        title: "교대근무자를 위한 수면 스케줄 가이드",
        excerpt: "주간→야간 전환 시 3단계 빛·카페인·수면 스케줄로 졸림과 각성을 조절하는 방법.",
        category: "수면",
        date: "2024-12-06",
        image: "/blog/shift-work.jpg",
    },
    {
        slug: "caffeine-sensitivity-check",
        title: "카페인 감수성 자가 체크: 컷오프 시간 찾기",
        excerpt: "입면 지연, 야간 각성, 심박 변화로 카페인 민감도를 추정하고 컷오프 시간을 정하는 방법.",
        category: "수면",
        date: "2024-12-06",
        image: "/blog/caffeine-sensitivity.jpg",
    },
    {
        slug: "pms-emotion-waves",
        title: "PMS 감정 파동 다루기: 3단계 루틴",
        excerpt: "황체기 감정 기복을 낮추는 수면·영양·인지 루틴과 당일 대처 스크립트를 제공합니다.",
        category: "PMS",
        date: "2024-12-06",
        image: "/blog/pms-emotion.jpg",
    },
    {
        slug: "protein-powder-choice",
        title: "단백질 파우더 선택법: 여성 맞춤 가이드",
        excerpt: "유청·식물성·아이솔레이트 차이, 위장 민감도와 목표별 선택법, 섭취 타이밍을 정리했습니다.",
        category: "영양",
        date: "2024-12-06",
        image: "/blog/protein-powder.jpg",
    },
    {
        slug: "iron-supplement-stomach",
        title: "철분제 복용 시 위 불편 줄이는 법",
        excerpt: "복용 타이밍, 식사 조합, 상호작용 주의 식품·약물로 위 불편을 줄이는 방법.",
        category: "영양",
        date: "2024-12-06",
        image: "/blog/iron-stomach.jpg",
    },
    {
        slug: "office-neck-shoulder-relief",
        title: "사무직 목·어깨 통증 줄이는 10분 루틴",
        excerpt: "책상 세팅, 10분 스트레칭, 1시간 주기 마이크로 브레이크로 통증을 낮추는 법.",
        category: "운동",
        date: "2024-12-06",
        image: "/blog/office-neck.jpg",
    },
    {
        slug: "jetlag-minimize-plan",
        title: "시차 최소화 3일 플랜: 빛·식사·수면 조정",
        excerpt: "출발 전/도착 후 3일 동안 빛·식사·수면 시간을 조정해 시차를 최소화하는 방법.",
        category: "수면",
        date: "2024-12-06",
        image: "/blog/jetlag-plan.jpg",
    },
    {
        slug: "burnout-recovery-steps",
        title: "번아웃 회복 3단계: 에너지·경계·리듬",
        excerpt: "과로·무기력에서 회복하기 위한 에너지·경계·리듬 3단계 플랜.",
        category: "스트레스",
        date: "2024-12-06",
        image: "/blog/burnout-recovery.jpg",
    },
    {
        slug: "heart-health-women-signs",
        title: "여성 심혈관 경고 신호 놓치지 않기",
        excerpt: "여성에게 흔한 비전형적 심혈관 증상과 생활 관리 포인트를 정리했습니다.",
        category: "심혈관",
        date: "2024-12-06",
        image: "/blog/heart-health.jpg",
    },
    {
        slug: "night-awakening-fix",
        title: "새벽 각성 줄이는 저녁 루틴",
        excerpt: "조도·카페인·수분·체온을 정리해 새벽 각성을 줄이는 4단계 저녁 루틴.",
        category: "수면",
        date: "2024-12-07",
        image: "/blog/night-awakening.jpg",
    },
    {
        slug: "period-pain-diet-stretch",
        title: "생리통 완화 식단 + 10분 스트레칭",
        excerpt: "항염 식단과 10분 스트레칭으로 생리통을 완화하는 실천 가이드.",
        category: "PMS",
        date: "2024-12-07",
        image: "/blog/period-pain.jpg",
    },
    {
        slug: "postpartum-sleep-nutrition",
        title: "출산 후 회복기 수면·영양 루틴",
        excerpt: "단편 수면을 보완하는 낮잠 전략과 철·단백질 중심 식사 팁을 정리했습니다.",
        category: "수면",
        date: "2024-12-07",
        image: "/blog/postpartum-sleep.jpg",
    },
    {
        slug: "cold-extremities-care",
        title: "손발 냉증 줄이는 생활 루틴",
        excerpt: "보온, 수분·전해질, 저강도 순환 운동으로 손발 냉증을 완화하는 루틴.",
        category: "영양",
        date: "2024-12-07",
        image: "/blog/cold-extremities.jpg",
    },
    {
        slug: "chronic-fatigue-vs-burnout",
        title: "만성 피로 vs 번아웃 구분법",
        excerpt: "수면·에너지·감정 소진 패턴으로 만성 피로와 번아웃을 구분하고 회복 우선순위 잡기.",
        category: "스트레스",
        date: "2024-12-07",
        image: "/blog/chronic-fatigue.jpg",
    },
];

const outputDir = path.join(process.cwd(), 'src/content/blog');

// 디렉토리 확인
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 각 포스트를 MDX 파일로 생성
blogPosts.forEach(post => {
    const fileName = `${post.slug}.mdx`;
    const filePath = path.join(outputDir, fileName);

    // MDX 내용 (Frontmatter + Dummy Content)
    const fileContent = `---
title: "${post.title}"
description: "${post.excerpt}"
date: "${post.date}"
tags: ["${post.category}"]
---

# ${post.title}

${post.excerpt}

## 1. 서론
이 글에서는 **${post.title}**에 대해 다룹니다. 여성 건강에서 중요한 주제이며, 일상 생활에서 쉽게 실천할 수 있는 팁들을 정리했습니다.

## 2. 주요 내용
(여기에 실제 콘텐츠가 들어갑니다. 현재는 마이그레이션된 placeholder입니다.)

### 실천 포인트
- 포인트 1
- 포인트 2
- 포인트 3

## 3. 결론
지금 바로 시작해 보세요! 작은 변화가 큰 차이를 만듭니다.

> **Tip**: 더 자세한 정보가 필요하면 전문가와 상담하세요.
`;

    fs.writeFileSync(filePath, fileContent);
    console.log(`Created: ${fileName}`);
});

console.log(`\n✅ Successfully created ${blogPosts.length} MDX files in ${outputDir}`);
