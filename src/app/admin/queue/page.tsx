'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function QueuePage() {
    const [loading, setLoading] = useState(true);
    const [queue, setQueue] = useState<string[]>([]);
    const [newTopic, setNewTopic] = useState('');
    const [generated, setGenerated] = useState<string[]>([]);

    const fetchQueue = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/admin/queue');
            const data = await res.json();
            setQueue(data?.topics?.queue || []);
            setGenerated(data?.topics?.generated || []);
        } catch (error) {
            toast.error('대기열을 불러오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQueue();
    }, []);

    const handleAddTopic = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTopic.trim()) return;

        try {
            const res = await fetch('/api/admin/queue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'add', topic: newTopic }),
            });

            if (res.ok) {
                toast.success('토픽이 추가되었습니다.');
                setNewTopic('');
                fetchQueue();
            } else {
                throw new Error();
            }
        } catch {
            toast.error('토픽 추가 실패');
        }
    };

    const handleRemoveTopic = async (topic: string) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        try {
            const res = await fetch('/api/admin/queue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'remove', topic }),
            });

            if (res.ok) {
                toast.success('토픽이 삭제되었습니다.');
                fetchQueue();
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
                <h2 className="text-3xl font-bold tracking-tight">토픽 대기열 (Queue)</h2>
                <Button variant="outline" onClick={fetchQueue} disabled={loading}>
                    <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    새로고침
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* 대기열 관리 */}
                <Card>
                    <CardHeader>
                        <CardTitle>생성 대기중 ({queue.length})</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleAddTopic} className="flex gap-2">
                            <Input
                                placeholder="새로운 주제를 입력하세요..."
                                value={newTopic}
                                onChange={(e) => setNewTopic(e.target.value)}
                            />
                            <Button type="submit">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </form>

                        <div className="space-y-2 mt-4 max-h-[500px] overflow-y-auto">
                            {queue.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">대기중인 토픽이 없습니다.</p>
                            ) : (
                                queue.map((topic, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                                        <span className="text-sm font-medium line-clamp-1">{topic}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => handleRemoveTopic(topic)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* 생성 완료 목록 */}
                <Card>
                    <CardHeader>
                        <CardTitle>최근 생성됨 ({generated.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 max-h-[600px] overflow-y-auto">
                            {generated.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">생성된 토픽이 없습니다.</p>
                            ) : (
                                generated.slice().reverse().map((topic, idx) => (
                                    <div key={idx} className="p-3 bg-green-50/50 rounded-lg border border-green-100">
                                        <span className="text-sm text-gray-700">{topic}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
