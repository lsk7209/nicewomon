'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

const postSchema = z.object({
    slug: z.string().min(1, '슬러그는 필수입니다'),
    title: z.string().min(1, '제목은 필수입니다'),
    category: z.string().min(1, '카테고리는 필수입니다'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식이 올바르지 않습니다 (YYYY-MM-DD)'),
    description: z.string().optional(),
    tags: z.string().optional(), // Comma separated
    content: z.string().min(1, '본문 내용은 필수입니다'),
});

type FormData = z.infer<typeof postSchema>;

function PostEditorContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const editSlug = searchParams.get('slug');
    const isEditing = !!editSlug;

    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(isEditing);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            date: new Date().toISOString().split('T')[0],
            category: '기타',
        },
    });

    // Auto-generate slug from title if creating new
    const title = watch('title');
    useEffect(() => {
        if (!isEditing && title && !watch('slug')) {
            setValue('slug', slugify(title));
        }
    }, [title, isEditing, setValue, watch]);

    // Fetch data if editing
    useEffect(() => {
        if (isEditing) {
            const fetchPost = async () => {
                try {
                    const res = await fetch(`/api/admin/posts/${editSlug}`);
                    if (!res.ok) throw new Error('Post not found');
                    const data = await res.json();

                    setValue('slug', data.slug);
                    setValue('title', data.title);
                    setValue('category', data.category);
                    setValue('date', data.date);
                    setValue('description', data.description);
                    setValue('content', data.content);
                    setValue('tags', data.tags?.join(', '));
                } catch (error) {
                    toast.error('게시글 정보를 불러오는데 실패했습니다.');
                    router.push('/admin/posts');
                } finally {
                    setInitializing(false);
                }
            };
            fetchPost();
        }
    }, [editSlug, isEditing, setValue, router]);

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            const payload = {
                ...data,
                tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
            };

            const url = isEditing ? `/api/admin/posts/${editSlug}` : '/api/admin/posts';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Save failed');

            toast.success(isEditing ? '게시글이 수정되었습니다.' : '게시글이 생성되었습니다.');
            router.push('/admin/posts');
        } catch (error) {
            toast.error('저장에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    if (initializing) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-rose-600" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/posts">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight">
                        {isEditing ? '게시글 수정' : '새 게시글 작성'}
                    </h2>
                </div>
                <Button onClick={handleSubmit(onSubmit)} disabled={loading} className="bg-rose-600 hover:bg-rose-700">
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    <Save className="mr-2 h-4 w-4" />
                    저장하기
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>기본 정보</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">제목</label>
                                <Input {...register('title')} placeholder="제목을 입력하세요" />
                                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">설명 (Meta Description)</label>
                                <Textarea {...register('description')} placeholder="검색 결과에 표시될 설명을 입력하세요" className="h-20" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-0">
                            <Textarea
                                {...register('content')}
                                placeholder="마크다운 내용을 입력하세요 (이미지는 URL로 입력)..."
                                className="min-h-[500px] border-none focus-visible:ring-0 p-6 text-lg font-mono leading-relaxed resize-none"
                            />
                            {errors.content && <p className="text-xs text-red-500 p-4">{errors.content.message}</p>}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>설정</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">URL 슬러그</label>
                                <Input {...register('slug')} placeholder="url-slug" />
                                {errors.slug && <p className="text-xs text-red-500 mt-1">{errors.slug.message}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">카테고리</label>
                                <Input {...register('category')} placeholder="예: 갱년기" />
                                {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">작성일</label>
                                <Input type="date" {...register('date')} />
                                {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">태그 (쉼표로 구분)</label>
                                <Input {...register('tags')} placeholder="건강, 운동, 식단" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default function PostEditorPage() {
    return (
        <Suspense fallback={<div className="flex justify-center p-8"><Loader2 className="animate-spin text-rose-600" /></div>}>
            <PostEditorContent />
        </Suspense>
    );
}
