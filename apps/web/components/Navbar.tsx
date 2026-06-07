"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/10 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          CostAPI
        </Link>

        <nav className=" items-center gap-8 space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        

        {/* <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-muted-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button> */}
      </div>

      {/* <div
        className={cn(
          "border-t border-border bg-card md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          >
            Join Waitlist
          </Link>
        </div>
      </div> */}
    </header>
  );
};
