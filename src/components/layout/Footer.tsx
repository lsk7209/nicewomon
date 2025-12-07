import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">나이스우먼</h4>
                        <p className="text-sm text-gray-600">
                            여성 건강 데이터 플랫폼
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">진단 도구</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/tools/hormone" className="hover:text-rose-600 transition-colors">호르몬 밸런스</Link></li>
                            <li><Link href="/tools/sleep" className="hover:text-rose-600 transition-colors">수면 질</Link></li>
                            <li><Link href="/tools/stress" className="hover:text-rose-600 transition-colors">스트레스</Link></li>
                            <li><Link href="/tools/body-age" className="hover:text-rose-600 transition-colors">체형 나이</Link></li>
                            <li><Link href="/tools/nutrients" className="hover:text-rose-600 transition-colors">영양소 결핍</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">가이드</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/guide/hormone-basics" className="hover:text-rose-600 transition-colors">호르몬 기초</Link></li>
                            <li><Link href="/guide/30s-health" className="hover:text-rose-600 transition-colors">30대 건강</Link></li>
                            <li><Link href="/guide/40s-health" className="hover:text-rose-600 transition-colors">40대 건강</Link></li>
                            <li><Link href="/guide/50s-health" className="hover:text-rose-600 transition-colors">50대 건강</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">정보</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-rose-600 transition-colors">소개</Link></li>
                            <li><Link href="/blog" className="hover:text-rose-600 transition-colors">블로그</Link></li>
                            <li><Link href="/faq" className="hover:text-rose-600 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-rose-600 transition-colors">문의</Link></li>
                            <li><Link href="/privacy" className="hover:text-rose-600 transition-colors">개인정보처리방침</Link></li>
                            <li><Link href="/terms" className="hover:text-rose-600 transition-colors">이용약관</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto mt-8 pt-8 border-t text-center text-sm text-gray-500">
                    <p className="mb-2">
                        본 서비스는 의학적 진단 또는 치료를 대신할 수 없습니다.
                    </p>
                    <p className="mb-4">
                        Source: Adapted from WHO/NIH, 보건복지부 자료 기반. Health Lab Research Team 재구성.
                    </p>
                    <p>© 2024 나이스우먼. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
