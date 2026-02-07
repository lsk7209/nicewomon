'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    FileText,
    ListOrdered,
    Settings,
    LogOut,
    ExternalLink
} from 'lucide-react';

const navItems = [
    {
        title: '대시보드',
        href: '/admin',
        icon: LayoutDashboard // lucide-react icon
    },
    {
        title: '블로그 관리',
        href: '/admin/posts',
        icon: FileText
    },
    {
        title: '토픽 대기열',
        href: '/admin/queue',
        icon: ListOrdered
    },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-white border-r h-full flex flex-col">
            <div className="p-6 border-b">
                <h1 className="text-xl font-bold text-rose-600">Admin</h1>
                <p className="text-xs text-gray-500">나이스우먼 관리자</p>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-rose-50 text-rose-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Icon size={18} />
                            {item.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t space-y-2">
                <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    <ExternalLink size={18} />
                    사이트 바로가기
                </Link>
            </div>
        </div>
    );
}
