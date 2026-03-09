import { SiteHeader } from "@/components/layout/site-header";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container py-10">{children}</main>
    </div>
  );
}
