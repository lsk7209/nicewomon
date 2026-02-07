'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, ExternalLink, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/lib/blog';

export default function PostsPage() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<BlogPost[]>([]);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/admin/posts');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            toast.error('게시글 목록을 불러오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (slug: string) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        try {
            const res = await fetch(`/api/admin/posts/${slug}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                toast.success('게시글이 삭제되었습니다.');
                fetchPosts();
            } else {
                throw new Error();
            }
        } catch {
            toast.error('삭제 실패');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">블로그 관리</h2>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={fetchPosts} disabled={loading}>
                        <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                        새로고침
                    </Button>
                    <Link href="/admin/posts/editor">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            새 게시글
                        </Button>
                    </Link>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>게시글 목록 ({posts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-700 font-medium">
                                <tr>
                                    <th className="p-3">제목</th>
                                    <th className="p-3">카테고리</th>
                                    <th className="p-3">작성일</th>
                                    <th className="p-3 text-right">관리</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {posts.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-4 text-center text-gray-500">
                                            게시글이 없습니다.
                                        </td>
                                    </tr>
                                ) : (
                                    posts.map((post) => (
                                        <tr key={post.slug} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-3 font-medium text-gray-900">
                                                {post.title}
                                                <div className="text-xs text-gray-500 mt-1 line-clamp-1">{post.description}</div>
                                            </td>
                                            <td className="p-3">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
                                                    {post.category}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-500">{formatDate(post.date)}</td>
                                            <td className="p-3 text-right space-x-2">
                                                <Link href={`/blog/${post.slug}`} target="_blank">
                                                    <Button variant="ghost" size="icon" title="보기">
                                                        <ExternalLink className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                                    </Button>
                                                </Link>
                                                <Link href={`/admin/posts/editor?slug=${post.slug}`}>
                                                    <Button variant="ghost" size="icon" title="수정">
                                                        <Edit className="h-4 w-4 text-blue-500 hover:text-blue-700" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="삭제"
                                                    onClick={() => handleDelete(post.slug)}
                                                >
                                                    <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
