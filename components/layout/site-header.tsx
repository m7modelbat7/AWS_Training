import Link from "next/link";

import { getSessionToken } from "@/lib/auth/session";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/learn", label: "Lessons" },
  { href: "/projects", label: "Projects" },
  { href: "/settings", label: "Settings" },
];

export function SiteHeader() {
  const isAuthenticated = Boolean(getSessionToken());

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            AWS Training
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Button key={link.href} variant="ghost" size="sm" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <form action="/auth/sign-out" method="post">
              <Button variant="outline" size="sm" type="submit">
                Sign out
              </Button>
            </form>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
