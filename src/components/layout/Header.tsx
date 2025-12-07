"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/tools", label: "자가진단" },
        { href: "/guide", label: "가이드" },
        { href: "/blog", label: "블로그" },
        { href: "/about", label: "소개" },
        { href: "/contact", label: "문의" },
    ];

    return (
        <>
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition-colors">
                        나이스우먼
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-rose-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden text-gray-600 hover:text-rose-600"
                        aria-label="메뉴 열기"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-50 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 md:hidden shadow-xl">
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <span className="text-lg font-bold text-rose-600">메뉴</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-600 hover:text-rose-600"
                                    aria-label="메뉴 닫기"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 overflow-y-auto py-4">
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    홈
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="border-t my-4" />
                                <Link
                                    href="/privacy"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    개인정보처리방침
                                </Link>
                                <Link
                                    href="/terms"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    이용약관
                                </Link>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
