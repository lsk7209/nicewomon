import { ReactNode } from "react";

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Content */}
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <header className="mb-8 pb-8 border-b">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-500">
                            최종 업데이트: {lastUpdated}
                        </p>
                    </header>

                    <div className="prose prose-gray max-w-none">
                        {children}
                    </div>
                </article>
            </main>
        </div>
    );
}
