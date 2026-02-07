import { getBlogPosts } from "@/lib/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "건강 블로그 | 나이스우먼",
    description: "여성 건강을 위한 갱년기, 수면, 스트레스, 영양, 운동 정보 모음.",
    alternates: { canonical: "https://nicewomen.kr/blog" },
};

export default function BlogPage() {
    const posts = getBlogPosts();
    // 모든 태그 수집 후 중복 제거하여 카테고리 목록 생성
    const allCategories = new Set(posts.map(p => p.category));
    const categories = ["전체", ...Array.from(allCategories)];

    return <BlogListClient posts={posts} categories={categories} />;
}
