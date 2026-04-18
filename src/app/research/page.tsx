import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Research" };

const subpages = [
  {
    title: "Projects",
    description: "現在取り組んでいる研究プロジェクトの紹介",
    href: "/research/projects",
  },
  {
    title: "Publications",
    description: "論文・学会発表の記録",
    href: "/research/publications",
  },
  {
    title: "Materials",
    description: "教育用ノートブック・教材",
    href: "/research/materials",
  },
  {
    title: "Tools",
    description: "研究用ツール・ソフトウェア・環境構築記事",
    href: "/research/tools",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Research</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          RC造集合住宅の温熱環境・省エネルギー化をメインテーマに、実測・熱負荷シミュレーション・CFD解析を組み合わせて評価しています。CFDと機械学習によるサロゲートモデル開発は、設計支援の高速化に向けた手段として並行して取り組んでいます。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {subpages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {page.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
