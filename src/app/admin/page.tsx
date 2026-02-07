import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ListOrdered, Clock } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
                <p className="text-muted-foreground">
                    블로그 현황과 대기열을 한눈에 확인하세요
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            전체 게시글
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-muted-foreground">
                            +0 (지난달 대비)
                        </p>
                        <Link href="/admin/posts" className="text-xs text-rose-600 hover:underline mt-2 inline-block">
                            관리하기 &rarr;
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            대기중인 토픽
                        </CardTitle>
                        <ListOrdered className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-muted-foreground">
                            자동 생성 예정
                        </p>
                        <Link href="/admin/queue" className="text-xs text-rose-600 hover:underline mt-2 inline-block">
                            관리하기 &rarr;
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            마지막 발행
                        </CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">-</div>
                        <p className="text-xs text-muted-foreground">
                            -
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
