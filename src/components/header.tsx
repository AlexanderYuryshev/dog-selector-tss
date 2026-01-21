"use client";

import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="bg-card/95 border-border sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              <img src="/icon.png" />
            </div>
            <span className="text-foreground text-xl font-bold">ЛапаМатч</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
