import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Takenaka Hiroaki",
    template: "%s | Takenaka Hiroaki",
  },
  description: "Research and personal website of Takenaka Hiroaki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navigation />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Takenaka Hiroaki
          </div>
        </footer>
      </body>
    </html>
  );
}
