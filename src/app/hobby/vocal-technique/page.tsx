import type { Metadata } from "next";

export const metadata: Metadata = { title: "Vocal Technique" };

export default function VocalTechniquePage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Vocal Technique</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        発声技術に関するスペクトログラム分析や論文調査の記録です。
      </p>
      <p className="text-zinc-500">記事を掲載予定です。</p>
    </div>
  );
}
