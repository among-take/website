import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tools" };

const tools = [
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

export default function ToolsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Tools</h1>

      <div className="space-y-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div className="flex items-center gap-3">
              <h2 className="font-semibold">{tool.name}</h2>
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
    </div>
  );
}
