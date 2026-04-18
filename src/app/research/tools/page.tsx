import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tools" };

type Tool = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
};

type Article = {
  title: string;
  description: string;
  url: string;
  source: string;
};

const tools: Tool[] = [
  {
    name: "ondotori",
    description:
      "おんどとり WebStorage API から温湿度データを自動取得し、10分間隔の累積CSVとして出力するツール。PyQt6 GUI + ヘッドレスモード対応。",
    tech: ["Python", "PyQt6", "PyInstaller"],
    github: "03210083/ondotori",
  },
  {
    name: "Literature Research Tool",
    description:
      "Zotero API + Semantic Scholar を統合した文献調査パイプライン。PDF自動取得・メタデータ抽出・スクリーニングを一連のワークフローで実行。",
    tech: ["Python", "Zotero API", "GROBID"],
  },
];

const articles: Article[] = [
  {
    title: "Claude Codeで研究ワークフローを統合する",
    description:
      "WSL + VS Code + Claude Code を軸に、文献調査・データ分析・論文執筆・教材作成までを単一環境で回す構成の紹介。研究室標準ツール基盤としての整備についても。",
    url: "https://note.com/amongtake/n/n52b7e6aa15cc",
    source: "note",
  },
];

export default function ToolsPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Tools</h1>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">ソフトウェア</h2>
        <div className="space-y-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{tool.name}</h3>
                {tool.github && (
                  <a
                    href={`https://github.com/${tool.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    GitHub &rarr;
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {tool.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tool.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs dark:bg-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">環境構築・ワークフロー記事</h2>
        <div className="space-y-4">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-blue-700 dark:text-blue-400">
                  {a.title}
                </h3>
                <span className="text-xs text-zinc-500">— {a.source}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {a.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
