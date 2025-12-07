import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { SITE_CONFIG, LEGAL_DISCLAIMER, DATA_SOURCE } from "@/lib/config";

export const metadata: Metadata = {
    title: "소개 | 나이스우먼",
    description: "30~55세 여성의 건강 변화를 데이터 기반으로 안내하는 자가진단 플랫폼입니다.",
};

export default function AboutPage() {
    return (
        <LegalLayout title="나이스우먼 소개" lastUpdated="2024년 11월 26일">
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">우리의 미션</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    나이스우먼은 30~55세 여성이 겪는 신체 변화를 <strong>불안 대신 데이터로, 막연함 대신 루틴으로</strong> 이해하고 관리할 수 있도록 돕는 건강 정보 플랫폼입니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    우리는 의학적 진단을 제공하지 않습니다. 대신, 과학적 데이터에 기반한 자가진단 도구와 맞춤형 정보를 통해 여성 스스로 건강 상태를 이해하고, 필요한 경우 전문의 상담을 받을 수 있도록 안내합니다.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">핵심 가치</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-rose-50 p-6 rounded-xl">
                        <h3 className="font-bold text-lg text-rose-900 mb-2">데이터 기반</h3>
                        <p className="text-sm text-gray-700">
                            WHO, NIH, 보건복지부 등 신뢰할 수 있는 기관의 연구 데이터를 기반으로 합니다.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">비의료적 정보</h3>
                        <p className="text-sm text-gray-700">
                            의학적 진단이나 치료를 대신하지 않으며, 정보 제공 목적으로만 운영됩니다.
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-bold text-lg text-green-900 mb-2">개인화된 인사이트</h3>
                        <p className="text-sm text-gray-700">
                            4가지 페르소나 분류를 통해 개인의 상태에 맞는 맞춤형 정보를 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제공 서비스</h2>
                <div className="space-y-4">
                    <div className="border-l-4 border-rose-500 pl-4">
                        <h3 className="font-bold text-gray-900 mb-1">Big-5 건강 평가 도구</h3>
                        <p className="text-sm text-gray-600">
                            호르몬 밸런스, 수면 질, 스트레스·번아웃, 체형 나이, 영양소 결핍 분석
                        </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-bold text-gray-900 mb-1">페르소나 기반 분류</h3>
                        <p className="text-sm text-gray-600">
                            슈퍼 밸런서, 센서티브 캐치, 딥 리커버러, 레이트 블루머 4가지 유형
                        </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-bold text-gray-900 mb-1">성분 기반 가이드</h3>
                        <p className="text-sm text-gray-600">
                            증상별 필요 영양소와 성분 정보 제공 (제품 추천 아님)
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">연구팀 소개</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Health Lab Research Team</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        여성 건강 데이터 분석 및 정보 제공을 전문으로 하는 연구팀입니다.
                        국내외 의학 연구 자료를 분석하여 한국 여성에게 적합한 건강 정보를 제공합니다.
                    </p>
                    <p className="text-sm text-gray-600">
                        {DATA_SOURCE}
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">데이터 출처</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>WHO (World Health Organization) - 여성 건강 가이드라인</li>
                    <li>NIH (National Institutes of Health) - 호르몬 및 영양 연구</li>
                    <li>보건복지부 - 한국 여성 건강 통계</li>
                    <li>대한폐경학회 - 갱년기 증상 및 관리 지침</li>
                </ul>
            </section>

            <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-3">⚠️ 중요 안내</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    {LEGAL_DISCLAIMER}
                </p>
                <p className="text-gray-700 leading-relaxed">
                    본 플랫폼은 <strong>정보 제공 목적</strong>으로만 운영되며,
                    의료 기관이나 의료인이 제공하는 진단, 치료, 처방을 대체할 수 없습니다.
                </p>
            </section>

            <section className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                    더 궁금한 사항이 있으신가요?
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors"
                >
                    문의하기
                </a>
            </section>
        </LegalLayout>
    );
}
