import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "문의 | 나이스우먼",
    description: "나이스우먼에 대한 문의사항을 보내주세요. 영업일 기준 2-3일 내 답변드립니다.",
};

export default function ContactPage() {
    return (
        <LegalLayout title="문의하기" lastUpdated="2024년 11월 26일">
            <section className="mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                    나이스우먼 서비스에 대한 문의사항, 제안, 또는 피드백이 있으시면 언제든지 연락 주세요.
                    여러분의 소중한 의견은 더 나은 서비스를 만드는 데 큰 도움이 됩니다.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">연락 방법</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-rose-50 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="w-6 h-6 text-rose-600" />
                            <h3 className="font-bold text-lg text-gray-900">이메일 문의</h3>
                        </div>
                        <p className="text-gray-700 mb-2">일반 문의 및 서비스 관련 질문</p>
                        <a
                            href="mailto:contact@nicewoman.kr"
                            className="text-rose-600 font-medium hover:underline"
                        >
                            contact@nicewoman.kr
                        </a>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <Clock className="w-6 h-6 text-blue-600" />
                            <h3 className="font-bold text-lg text-gray-900">응답 시간</h3>
                        </div>
                        <p className="text-gray-700 mb-2">영업일 기준 2-3일 내 답변</p>
                        <p className="text-sm text-gray-600">
                            주말 및 공휴일 제외
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 유형별 안내</h2>

                <div className="space-y-4">
                    <div className="border-l-4 border-rose-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">서비스 이용 문의</h3>
                        <p className="text-sm text-gray-600">
                            도구 사용 방법, 결과 해석, 기능 설명 등
                        </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">기술적 문제</h3>
                        <p className="text-sm text-gray-600">
                            오류 발생, 페이지 로딩 문제, 데이터 저장 이슈 등
                        </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">제휴 및 협력</h3>
                        <p className="text-sm text-gray-600">
                            비즈니스 제안, 파트너십, 콘텐츠 협업 등
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">개인정보 관련</h3>
                        <p className="text-sm text-gray-600">
                            데이터 삭제 요청, 개인정보 처리 문의 등
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">
                            Q. 진단 결과에 대해 의학적 상담을 받을 수 있나요?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            A. 나이스우먼은 의료 기관이 아니므로 의학적 상담을 제공할 수 없습니다.
                            증상이 심하거나 지속되는 경우 반드시 전문의 상담을 받으시기 바랍니다.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">
                            Q. 데이터가 삭제되었는데 복구할 수 있나요?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            A. 현재 서비스는 브라우저 localStorage에만 데이터를 저장하므로,
                            삭제된 데이터는 복구할 수 없습니다. 정기적으로 데이터를 내보내기하여 백업하시는 것을 권장합니다.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">
                            Q. 서비스 이용료가 있나요?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            A. 모든 진단 도구와 가이드는 무료로 제공됩니다.
                            광고를 통해 서비스를 운영하며, 사용자에게 비용을 청구하지 않습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">문의 시 포함해 주세요</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>문의 유형 (서비스 이용, 기술 문제, 제휴 등)</li>
                            <li>사용 중인 브라우저 및 기기 정보 (기술 문제의 경우)</li>
                            <li>발생한 문제에 대한 구체적인 설명</li>
                            <li>스크린샷 (해당하는 경우)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                    더 자세한 정보가 필요하신가요?
                </p>
                <a
                    href="/about"
                    className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors"
                >
                    서비스 소개 보기
                </a>
            </section>
        </LegalLayout>
    );
}
