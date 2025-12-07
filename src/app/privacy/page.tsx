import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { Shield, Lock, Eye, Trash2, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "개인정보처리방침 | 나이스우먼",
    description: "나이스우먼의 개인정보 수집, 이용, 보관 및 보호 정책을 안내합니다.",
};

export default function PrivacyPage() {
    return (
        <LegalLayout title="개인정보처리방침" lastUpdated="2024년 11월 26일">
            <section className="mb-12">
                <p className="text-gray-700 leading-relaxed mb-4">
                    나이스우먼(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
                    이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">1. 수집하는 개인정보 항목</h2>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-4">
                    <h3 className="font-bold text-gray-900 mb-3">현재 수집하는 정보 (비회원 서비스)</h3>
                    <p className="text-gray-700 mb-3">
                        회사는 현재 서버에 개인정보를 저장하지 않으며, 모든 데이터는 사용자의 브라우저 localStorage에만 저장됩니다.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>진단 결과 데이터</strong>: 도구별 점수, 페르소나 유형, 응답 내용</li>
                        <li><strong>저장 위치</strong>: 사용자 브라우저의 localStorage (서버 전송 없음)</li>
                        <li><strong>보관 기간</strong>: 30일 (자동 삭제)</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-3">향후 회원 서비스 제공 시 수집 예정 정보</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>필수 항목</strong>: 이메일 주소, 이름</li>
                        <li><strong>선택 항목</strong>: 생년월일, 연령대</li>
                        <li><strong>자동 수집</strong>: 접속 IP, 쿠키, 서비스 이용 기록</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">2. 개인정보의 수집 및 이용 목적</h2>
                </div>

                <div className="space-y-3">
                    <div className="border-l-4 border-rose-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">서비스 제공</h3>
                        <p className="text-sm text-gray-600">
                            건강 자가진단 도구 제공, 맞춤형 결과 분석, 페르소나 분류
                        </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">서비스 개선</h3>
                        <p className="text-sm text-gray-600">
                            통계 분석, 사용자 경험 개선, 신규 기능 개발
                        </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h3 className="font-bold text-gray-900 mb-1">고객 지원</h3>
                        <p className="text-sm text-gray-600">
                            문의 응대, 공지사항 전달, 서비스 관련 안내
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">3. 개인정보의 보유 및 이용 기간</h2>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">•</span>
                            <div>
                                <strong>비회원 데이터 (localStorage)</strong>: 저장 후 30일 경과 시 자동 삭제
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">•</span>
                            <div>
                                <strong>회원 정보</strong>: 회원 탈퇴 시 즉시 삭제 (단, 관련 법령에 따라 보존 필요 시 별도 보관)
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold">•</span>
                            <div>
                                <strong>법령 보존 의무</strong>:
                                <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                                    <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                                    <li>소비자 불만 또는 분쟁처리 기록: 3년 (전자상거래법)</li>
                                    <li>접속 로그 기록: 3개월 (통신비밀보호법)</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">4. 개인정보의 제3자 제공</h2>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <p className="text-gray-700 leading-relaxed">
                        <strong>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</strong>
                        <br />
                        다만, 다음의 경우에는 예외로 합니다:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                        <li>이용자가 사전에 동의한 경우</li>
                        <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 개인정보 처리 위탁</h2>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 mb-4">
                        회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다:
                    </p>
                    <table className="w-full text-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 text-left">수탁업체</th>
                                <th className="p-3 text-left">위탁 업무 내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">Cloudflare, Inc.</td>
                                <td className="p-3">웹사이트 호스팅 및 CDN 서비스</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Google LLC (선택)</td>
                                <td className="p-3">웹사이트 분석 (Google Analytics)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Trash2 className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-bold text-gray-900">6. 정보주체의 권리·의무 및 행사 방법</h2>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-700">
                        정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
                    </p>
                    <ul className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        <li>개인정보 열람 요구</li>
                        <li>오류 등이 있을 경우 정정 요구</li>
                        <li>삭제 요구</li>
                        <li>처리 정지 요구</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                            <strong>권리 행사 방법</strong>: contact@nicewoman.kr로 이메일 발송
                            <br />
                            <strong>처리 기간</strong>: 요청 접수 후 10일 이내 조치
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 개인정보의 파기</h2>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-3">파기 절차</h3>
                    <p className="text-gray-700 mb-4">
                        이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류)
                        내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                    </p>

                    <h3 className="font-bold text-gray-900 mb-3">파기 방법</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>전자적 파일</strong>: 기록을 재생할 수 없도록 로우레벨 포맷 등의 방법으로 파기</li>
                        <li><strong>종이 문서</strong>: 분쇄기로 분쇄하거나 소각</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 개인정보 보호책임자</h2>

                <div className="bg-rose-50 p-6 rounded-xl">
                    <p className="text-gray-700 mb-4">
                        회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                        개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-gray-700">
                            <strong>개인정보 보호책임자</strong>
                            <br />
                            이메일: contact@nicewoman.kr
                            <br />
                            <span className="text-sm text-gray-600">
                                ※ 개인정보 보호 담당부서로 연결됩니다.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 개인정보 처리방침 변경</h2>

                <p className="text-gray-700 leading-relaxed">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                    변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
            </section>

            <section className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600">
                    <strong>시행일자</strong>: 2024년 11월 26일
                    <br />
                    <strong>최종 수정일</strong>: 2024년 11월 26일
                </p>
            </section>
        </LegalLayout>
    );
}
