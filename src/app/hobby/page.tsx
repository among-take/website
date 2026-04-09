import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Hobby" };

const subpages = [
  {
    title: "Bouldering",
    description: "ボルダリングの記録",
    href: "/hobby/bouldering",
  },
  {
    title: "Vocal Technique",
    description: "発声技術の分析・研究",
    href: "/hobby/vocal-technique",
  },
  {
    title: "Covers",
    description: "歌唱カバー動画",
    href: "/hobby/covers",
  },
  {
    title: "Streaming",
    description: "配信アーカイブ",
    href: "/hobby/streaming",
  },
];

export default function HobbyPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Hobby</h1>

      <div className="grid gap-6 sm:grid-cols-2">
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
