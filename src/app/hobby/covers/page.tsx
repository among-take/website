import type { Metadata } from "next";

export const metadata: Metadata = { title: "Covers" };

export default function CoversPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Covers</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        歌唱カバー動画と歌唱技術の解説です。
      </p>
      <p className="text-zinc-500">動画を掲載予定です。</p>
    </div>
  );
}
