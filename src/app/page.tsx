import Link from "next/link";

const sections = [
  {
    title: "Research",
    description: "RC造集合住宅の温熱環境・省エネルギー化を中心とした建築環境工学の研究活動",
    href: "/research",
    items: ["Projects", "Publications", "Materials", "Tools"],
  },
  {
    title: "Hobby",
    description: "ボルダリング、発声技術、歌唱カバー、配信",
    href: "/hobby",
    items: ["Bouldering", "Vocal Technique", "Covers", "Streaming"],
  },
  {
    title: "Life",
    description: "生活の知見・Tips",
    href: "/life",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-8">
        <h1 className="text-3xl font-bold tracking-tight">Takenaka Hiroaki</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          東京大学 工学系研究科 建築学専攻
        </p>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          RC造集合住宅の温熱環境・省エネルギー化を主テーマとし、実測・シミュレーション・CFDを軸に研究に取り組んでいます。CFDと機械学習を組み合わせたサロゲートモデル開発はその手段の一つです。
        </p>
        <Link
          href="/about"
          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          About me &rarr;
        </Link>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
            {section.items && (
              <ul className="mt-3 space-y-1 text-sm text-zinc-500 dark:text-zinc-500">
                {section.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
