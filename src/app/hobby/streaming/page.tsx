import type { Metadata } from "next";

export const metadata: Metadata = { title: "Streaming" };

export default function StreamingPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Streaming</h1>
      <p className="text-zinc-500">配信アーカイブを掲載予定です。</p>
    </div>
  );
}
