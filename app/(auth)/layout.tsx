import { SiteHeader } from "@/components/layout/site-header";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-muted/20">
      <SiteHeader />
      <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">{children}</main>
    </div>
  );
}
