import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface RelatedPostsProps {
    posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">관련 글 더보기</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                        {post.image && (
                            <div className="aspect-video w-full overflow-hidden bg-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        )}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-rose-600 font-medium mb-3">
                                <span>{post.category}</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                                {post.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-50">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
