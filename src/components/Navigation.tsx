"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Publications", href: "/research/publications" },
      { label: "Materials", href: "/research/materials" },
      { label: "Tools", href: "/research/tools" },
    ],
  },
  {
    label: "Hobby",
    href: "/hobby",
    children: [
      { label: "Bouldering", href: "/hobby/bouldering" },
      { label: "Vocal Technique", href: "/hobby/vocal-technique" },
      { label: "Covers", href: "/hobby/covers" },
      { label: "Streaming", href: "/hobby/streaming" },
    ],
  },
  { label: "Life", href: "/life" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Takenaka Hiroaki
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.href)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "bg-zinc-100 font-medium dark:bg-zinc-800"
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.href && (
                <ul className="absolute left-0 top-full mt-1 min-w-[160px] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-zinc-100 font-medium dark:bg-zinc-800"
                            : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 px-6 py-4 md:hidden dark:border-zinc-800">
          {navItems.map((item) => (
            <div key={item.href} className="mb-2">
              <Link
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm ${
                  isActive(item.href) ? "bg-zinc-100 font-medium dark:bg-zinc-800" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block rounded-md px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 ${
                        isActive(child.href) ? "bg-zinc-100 font-medium dark:bg-zinc-800" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
