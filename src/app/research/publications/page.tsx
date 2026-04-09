import type { Metadata } from "next";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Publications</h1>
      <p className="text-zinc-500">投稿・発表の記録を掲載予定です。</p>
    </div>
  );
}
