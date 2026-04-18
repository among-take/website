import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

type ArticleLink = {
  title: string;
  url: string;
  source: string;
};

type Project = {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  articles?: ArticleLink[];
};

const projects: Project[] = [
  {
    id: "daikyo",
    name: "大京プロジェクト（マンション向け全館空調）",
    subtitle: "RC造集合住宅における断熱改修と簡易全室連続空調の開発",
    description:
      "戸建てで普及が進む全館空調の考え方を、集合住宅の制約下で実現する研究。既存RC造集合住宅を対象に、断熱改修とルームエアコン一台による複数居室空調（簡易全室連続空調）を組み合わせ、温熱環境の改善と消費エネルギー削減を両立させる空調方式を開発しています。実物件での実測、熱負荷シミュレーション、CFD解析を組み合わせて性能を評価しています。",
    articles: [
      {
        title: "マンション向けの全館空調の開発",
        url: "https://note.com/amongtake/n/n4f6aae68f115",
        source: "note",
      },
    ],
  },
  {
    id: "cfd-ml",
    name: "CFD-ML サロゲートモデル",
    subtitle: "3D U-Netによる室内温度場の高速予測",
    description:
      "設計段階で多数ケースを検討するには CFD は計算コストが高すぎるという課題に対し、機械学習でCFDを高速代替する試み。室形状・境界条件をボクセル化して入力し、3D U-Netで室内温度場を予測するモデルを構築しています。熱回路網モデルとの連成を見据え、境界条件の複雑さを段階的に拡張中です。",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          現在取り組んでいる研究プロジェクトの紹介。関連する解説記事へのリンクもここから辿れます。
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            {p.subtitle && (
              <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p.description}
            </p>

            {p.articles && p.articles.length > 0 && (
              <div className="mt-4 space-y-2">
                <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  関連記事
                </h3>
                <ul className="space-y-1">
                  {p.articles.map((a) => (
                    <li key={a.url}>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-400"
                      >
                        {a.title}
                      </a>
                      <span className="ml-2 text-xs text-zinc-500">
                        — {a.source}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
