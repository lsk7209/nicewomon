import { AdminSidebar } from '@/components/admin/Sidebar';
import { Toaster } from 'sonner';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50/50">
            <div className="fixed inset-y-0 z-50">
                <AdminSidebar />
            </div>
            <main className="flex-1 pl-64 overflow-y-auto w-full">
                <div className="container mx-auto p-8 max-w-7xl">
                    {children}
                </div>
            </main>
            <Toaster position="top-right" />
        </div>
    );
}
