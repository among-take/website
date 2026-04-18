import type { Metadata } from "next";

export const metadata: Metadata = { title: "Publications" };

type Publication = {
  key: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  url: string;
  series?: string;
};

type Group = {
  id: string;
  name: string;
  description?: string;
  items: Publication[];
};

const AIJ_TAIKAI = "日本建築学会大会学術講演梗概集（環境工学I）";

const groups: Group[] = [
  {
    id: "daikyo",
    name: "大京プロジェクト",
    description:
      "集合住宅における断熱性能と空調方式の改善による温熱環境と省エネルギー性能の向上に関する研究（シリーズ）",
    items: [
      {
        key: "B3BNX5HP",
        year: 2025,
        series: "その6",
        title:
          "標準プランにおける簡易全室連続空調システムのシミュレーション評価と適用範囲の検討",
        authors: "竹中, 前, 高瀬, 孫, 岸本",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=712818",
      },
      {
        key: "9YUDNB3L",
        year: 2025,
        series: "その5",
        title:
          "実物件における簡易全室連続空調のエアコン・搬送ファン風量による影響の分析",
        authors: "猪又, 竹中, 前, 高瀬, 孫, 岸本",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=712817",
      },
      {
        key: "2L32FZU4",
        year: 2025,
        series: "その4",
        title:
          "実物件に導入した簡易全室連続空調の夏期・冬期実測および運転方式の検討",
        authors: "朝長, 竹中, 前, 高瀬, 孫, 岸本",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=712816",
      },
      {
        key: "Y2XVX6VA",
        year: 2024,
        series: "その3",
        title:
          "ルームエアコン一台で複数居室を暖冷房可能な集合住宅用空調システムの冬期実測結果",
        authors: "陳, 竹中, 前, 高瀬, 孫, 岸本",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=701408",
      },
      {
        key: "ZDHIN4V2",
        year: 2023,
        series: "その2",
        title: "CFD解析による冬期の室内温熱環境比較",
        authors: "竹中, 前, 高瀬, 孫, 岸本, 田公",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=691301",
      },
      {
        key: "LR6LR4KF",
        year: 2023,
        series: "その1",
        title:
          "改修の概要と冬期における暖房消費電力量と室内温度環境の比較",
        authors: "竹中, 前, 高瀬, 孫, 岸本, 田公",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=691300",
      },
    ],
  },
  {
    id: "single",
    name: "単発報告",
    description: "大京シリーズ外の筆頭著者報告",
    items: [
      {
        key: "RZSWWWI3",
        year: 2025,
        title:
          "木造共同住宅における空調・日射制御による断熱等級別の温熱環境改善および消費エネルギー削減効果の検討",
        authors: "竹中, 前, 高瀬, 孫, 岸本",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=712802",
      },
      {
        key: "MLBUT8GP",
        year: 2024,
        title:
          "RC造集合住宅における断熱等級別の熱収支とルームエアコン個別空調の効率に関する検討 — 熱負荷シミュレーションとCOPモデルによる期間暖冷房消費電力量の算出",
        authors: "竹中, 前, 高瀬, 孫, 岸本, 田公",
        journal: AIJ_TAIKAI,
        url: "https://www.aij.or.jp/paper/detail.html?productId=701410",
      },
    ],
  },
];

function groupByJournal(items: Publication[]) {
  const map = new Map<string, Publication[]>();
  for (const p of items) {
    const arr = map.get(p.journal) ?? [];
    arr.push(p);
    map.set(p.journal, arr);
  }
  return Array.from(map.entries());
}

export default function PublicationsPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Publications</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          論文・学会発表の記録。プロジェクト別に整理し、各項目内では掲載誌ごとにまとめています。
        </p>
      </div>

      {groups.map((group) => (
        <section key={group.id} className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{group.name}</h2>
            {group.description && (
              <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
            )}
          </div>

          {groupByJournal(group.items).map(([journal, items]) => (
            <div key={journal} className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-500">{journal}</h3>
              <ul className="space-y-3">
                {items.map((p) => (
                  <li
                    key={p.key}
                    className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-zinc-500">
                      <span>{p.year}</span>
                      {p.series && (
                        <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                          {p.series}
                        </span>
                      )}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[15px] font-medium text-blue-700 hover:underline dark:text-blue-400"
                    >
                      {p.title}
                    </a>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.authors}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
