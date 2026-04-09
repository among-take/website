import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bouldering" };

export default function BoulderingPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Bouldering</h1>
      <p className="text-zinc-500">ボルダリングの記録を掲載予定です。</p>
    </div>
  );
}
