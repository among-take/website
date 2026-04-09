import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Research" };

const subpages = [
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
    description: "研究用ツール・ソフトウェア",
    href: "/research/tools",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Research</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          建築環境工学を基盤に、CFDと機械学習を組み合わせた室内温熱環境予測の研究を行っています。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
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
