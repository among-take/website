import type { Metadata } from "next";

export const metadata: Metadata = { title: "Materials" };

const modules = [
  {
    id: "M1",
    title: "COP特性と熱負荷",
    notebooks: [
      "1-1: 伝熱と外皮負荷計算",
      "1-2: エアコン部分負荷COP特性",
      "1-3: 個別空調 vs 全室連続空調の消費量比較",
    ],
  },
  {
    id: "M2",
    title: "EnergyPlus シミュレーション",
    notebooks: [
      "2-1: EnergyPlusの物理モデルと環境構築",
      "2-2: IDFファイル構造と編集",
      "2-3: シミュレーション実行と結果分析",
    ],
  },
  {
    id: "M3",
    title: "ダクト設計",
    notebooks: [
      "3-1: ダクト圧力損失計算",
      "3-2: ダクト熱損失計算",
    ],
  },
];

export default function MaterialsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Materials</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Google Colab で実行可能な教育用ノートブックです。
      </p>

      <div className="space-y-6">
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="font-semibold">
              <span className="text-blue-600 dark:text-blue-400">{mod.id}</span>{" "}
              {mod.title}
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {mod.notebooks.map((nb) => (
                <li key={nb}>- {nb}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
