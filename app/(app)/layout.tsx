import { CompletionProvider } from "@/components/learning/completion-provider";
import { SiteHeader } from "@/components/layout/site-header";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-muted/20">
      <SiteHeader />
      <main className="container py-8">
        <CompletionProvider>{children}</CompletionProvider>
      </main>
    </div>
  );
}
