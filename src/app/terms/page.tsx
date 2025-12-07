import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { Scale, AlertTriangle, FileCheck, Ban } from "lucide-react";

export const metadata: Metadata = {
    title: "이용약관 | 나이스우먼",
    description: "나이스우먼 서비스 이용약관을 안내합니다.",
};

export default function TermsPage() {
    return (
        <LegalLayout title="이용약관" lastUpdated="2024년 11월 26일">
            <section className="mb-12">
                <p className="text-gray-700 leading-relaxed">
                    본 약관은 나이스우먼(이하 "회사")이 제공하는 건강 자가진단 서비스(이하 "서비스")의 이용과 관련하여
                    회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">제1조 (목적)</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                    본 약관은 회사가 제공하는 온라인 건강 자가진단 플랫폼 서비스의 이용조건 및 절차,
                    회사와 이용자 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (정의)</h2>

                <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                            <strong>1. "서비스"</strong>란 회사가 제공하는 호르몬 밸런스, 수면 질, 스트레스·번아웃, 체형 나이, 영양소 결핍 분석 등의
                            건강 자가진단 도구 및 관련 정보 제공 서비스를 의미합니다.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                            <strong>2. "이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                            <strong>3. "페르소나"</strong>란 진단 결과에 따라 분류되는 건강 상태 유형을 의미합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (약관의 효력 및 변경)</h2>

                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                        본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
                    </li>
                    <li>
                        회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며,
                        약관이 변경되는 경우 변경사항을 시행일자 7일 전부터 공지합니다.
                    </li>
                    <li>
                        이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.
                    </li>
                </ol>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (서비스의 제공)</h2>

                <div className="space-y-4">
                    <div className="border-l-4 border-rose-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-2">1. 제공 서비스</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>호르몬 밸런스 파인더</li>
                            <li>수면 질 테스트</li>
                            <li>스트레스·번아웃 테스트</li>
                            <li>체형 나이 측정기</li>
                            <li>영양소 결핍 분석기</li>
                            <li>건강 정보 및 가이드 제공</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                            <strong>2. 서비스 제공 시간</strong>
                            <br />
                            서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다.
                            다만, 시스템 점검, 서버 증설 등 운영상 필요한 경우 서비스의 전부 또는 일부를 일시 중단할 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Ban className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">제5조 (이용자의 의무)</h2>
                </div>

                <div className="space-y-3">
                    <p className="text-gray-700">이용자는 다음 행위를 하여서는 안 됩니다:</p>
                    <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        <li>허위 정보 입력 또는 타인의 정보 도용</li>
                        <li>회사가 게시한 정보의 무단 변경</li>
                        <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 송신 또는 게시</li>
                        <li>회사 및 제3자의 저작권 등 지적재산권 침해</li>
                        <li>회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                        <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                        <li>서비스를 영리 목적으로 이용하는 행위</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">제6조 (면책 조항)</h2>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl space-y-4">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">1. 의료 진단 아님</h3>
                        <p className="text-gray-700">
                            본 서비스는 <strong>의학적 진단, 치료, 처방을 제공하지 않습니다.</strong>
                            모든 진단 결과는 참고 자료로만 활용되어야 하며, 증상이 심하거나 지속되는 경우 반드시 전문의 상담을 받으시기 바랍니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">2. 결과의 정확성</h3>
                        <p className="text-gray-700">
                            진단 결과는 통계적 분석에 기반하며, 개인의 주관적 응답에 따라 달라질 수 있습니다.
                            회사는 결과의 정확성을 보장하지 않습니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">3. 이용자 책임</h3>
                        <p className="text-gray-700">
                            서비스 이용으로 인한 건강 관련 결정은 전적으로 이용자의 책임입니다.
                            회사는 이용자의 건강 관련 결정으로 인해 발생한 손해에 대해 책임지지 않습니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">4. 제휴 링크</h3>
                        <p className="text-gray-700">
                            서비스 내 제공되는 제휴 쇼핑몰 링크는 정보 제공 목적이며,
                            회사는 해당 쇼핑몰에서 구매한 제품에 대해 책임지지 않습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제7조 (서비스 이용 제한)</h2>

                <p className="text-gray-700 mb-4">
                    회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우,
                    경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">제8조 (지적 재산권)</h2>
                </div>

                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                        서비스 내 모든 콘텐츠(텍스트, 이미지, 디자인, 로고, 알고리즘 등)의 저작권 및 지적재산권은 회사에 귀속됩니다.
                    </li>
                    <li>
                        이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등
                        기타 방법으로 이용하거나 제3자에게 이용하게 할 수 없습니다.
                    </li>
                </ol>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제9조 (분쟁 해결)</h2>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>
                            <strong>준거법</strong>: 본 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 대한민국 법률을 적용합니다.
                        </li>
                        <li>
                            <strong>관할법원</strong>: 서비스 이용으로 발생한 분쟁에 대한 소송은 민사소송법상의 관할법원에 제기합니다.
                        </li>
                    </ol>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제10조 (기타)</h2>

                <p className="text-gray-700 leading-relaxed">
                    본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
                </p>
            </section>

            <section className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">
                    <strong>시행일자</strong>: 2024년 11월 26일
                    <br />
                    <strong>최종 수정일</strong>: 2024년 11월 26일
                </p>
            </section>

            <section className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-red-900 mb-3">⚠️ 중요 안내</h3>
                <p className="text-gray-700 leading-relaxed">
                    본 서비스는 <strong>의료 기관이 아니며</strong>, 제공되는 모든 정보는 <strong>참고 자료</strong>로만 활용되어야 합니다.
                    건강에 이상이 있거나 증상이 지속되는 경우 반드시 의료 전문가의 진료를 받으시기 바랍니다.
                </p>
            </section>
        </LegalLayout>
    );
}
