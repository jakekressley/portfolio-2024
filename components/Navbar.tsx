"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle/ModeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#bookshelf", label: "Bookshelf" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:justify-end md:p-10 md:gap-10 md:text-xl">

        <div className="flex items-center gap-2">
          {/* Maybe add logo or something?*/}
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex md:items-center md:gap-6 md:text-xl dark:text-white">
          {links.map((l) => (
            <li key={l.href} className="underline-hover dark:underline-hover-dark">
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6 dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          ref={panelRef}
          className="mx-4 mb-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          <ul className="flex flex-col gap-3 text-base dark:text-white">
            {links.map((l) => (
              <li key={l.href} className="underline-hover dark:underline-hover-dark">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block w-full py-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
