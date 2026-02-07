import { Metadata } from "next";
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { References, getReferencesForCategory } from "@/components/blog/References";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { getAuthorByCategory } from "@/lib/authors";

import { SITE_CONFIG } from "@/lib/config";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPost(params.slug);

    if (!post) {
        return {};
    }

    const ogImages = post.image ? [post.image] : [SITE_CONFIG.ogImage];

    return {
        title: `${post.title} | 나이스우먼 블로그`,
        description: post.description,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
            url: `https://nicewomen.kr/blog/${params.slug}`,
            images: ogImages,
        },
        alternates: {
            canonical: `https://nicewomen.kr/blog/${params.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: ogImages,
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    // 카테고리 기반 저자 및 참고문헌 가져오기
    const author = getAuthorByCategory(post.category);
    const references = getReferencesForCategory(post.category);
    const relatedPosts = getRelatedPosts(params.slug, post.category);

    return (
        <>
            {/* SEO: Article JSON-LD */}
            <ArticleJsonLd
                headline={post.title}
                description={post.description}
                author={author}
                datePublished={post.date}
                dateModified={post.date} // MDX에 수정일이 없으면 발행일 사용
                url={`https://nicewomen.kr/blog/${params.slug}`}
                image={post.image}
            />

            <div className="bg-gradient-to-b from-rose-50 via-white to-rose-50 min-h-screen">
                <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl relative">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { name: "블로그", href: "/blog" },
                            { name: post.category, href: `/blog/category/${post.category}` }, // 카테고리 페이지가 있다면
                            { name: post.title, href: `/blog/${params.slug}` },
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span>블로그 목록으로</span>
                    </Link>

                    <header className="mb-12 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                            <span>{post.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-600">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {post.description && (
                            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-rose-400 pl-4 py-2 bg-rose-50/50">
                                {post.description}
                            </p>
                        )}

                        {/* Author Byline */}
                        <AuthorByline
                            author={author}
                            publishedDate={post.date}
                            readTime={post.readTime}
                        />
                    </header>

                    {/* Table of Contents */}
                    <TableOfContents toc={post.toc} />

                    <div className="prose prose-lg prose-rose max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-rose-100">
                        {/* MDX Content Rendering */}
                        <MDXRemote source={post.content} />
                    </div>

                    {/* References Section */}
                    <References references={references} />

                    {/* Related Posts Section */}
                    <RelatedPosts posts={relatedPosts} />

                    <section className="mt-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">나의 갱년기 증상, 정확히 알고 관리하기</h2>
                        <p className="text-lg mb-8 opacity-90">나는 갱년기 증상 중 어떤 부분이 가장 힘든지, 혹시 놓치고 있는 부분은 없는지 자가 진단을 통해 정확히 파악하고 맞춤 관리 계획을 세워보세요.</p>
                        <Link href="/tools/hormone">
                            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                                지금 진단하기 →
                            </Button>
                        </Link>
                    </section>

                    <div className="mt-12 pt-8 border-t flex items-center justify-between">
                        <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                            ← 블로그 목록으로
                        </Link>
                        {/* 공유하기 버튼은 클라이언트 컴포넌트로 분리하거나 임시로 비활성화 */}
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed" disabled title="준비 중입니다">
                            <Share2 className="w-5 h-5" />
                            <span>공유하기</span>
                        </button>
                    </div>
                </article>
            </div>
        </>
    );
}
