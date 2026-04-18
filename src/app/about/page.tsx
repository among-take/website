import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Profile</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          <dt className="font-medium text-zinc-500">Name</dt>
          <dd>竹中 啓晶 (Takenaka Hiroaki)</dd>
          <dt className="font-medium text-zinc-500">Affiliation</dt>
          <dd>東京大学 工学系研究科 建築学専攻 M2</dd>
          <dt className="font-medium text-zinc-500">Lab</dt>
          <dd>前研究室（建築環境学）</dd>
          <dt className="font-medium text-zinc-500">Research</dt>
          <dd>RC造集合住宅の温熱環境・省エネルギー化 / CFD-MLサロゲートモデル</dd>
        </dl>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Research Interests</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          <li>RC造集合住宅の断熱性能・空調方式改善による温熱環境・省エネルギー効果の評価</li>
          <li>実測・熱負荷シミュレーション・CFD解析による多角的評価</li>
          <li>CFDと機械学習の融合によるサロゲートモデル構築（手段）</li>
          <li>3D U-Net による室内温度場予測・熱回路網モデルとの連成</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Python", "PyTorch", "FlowDesigner", "EnergyPlus",
            "CFD", "Machine Learning", "Git/GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
