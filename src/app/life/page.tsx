import type { Metadata } from "next";

export const metadata: Metadata = { title: "Life" };

export default function LifePage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Life</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        生活に関する知見・Tipsをまとめています。
      </p>
      <p className="text-zinc-500">コンテンツを掲載予定です。</p>
    </div>
  );
}
