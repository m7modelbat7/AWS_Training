import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureCards = [
  { title: "Dashboard", description: "Track learning progress and upcoming milestones." },
  { title: "Projects", description: "Organize training labs and implementation sprints." },
  { title: "Settings", description: "Manage profile, notifications, and workspace preferences." },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Badge variant="secondary">Scaffolded Starter</Badge>
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AWS Training Portal</h1>
        <p className="max-w-2xl text-muted-foreground">
          A production-ready Next.js foundation with TypeScript, Tailwind CSS, shadcn/ui primitives, and structured app
          routes.
        </p>
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {featureCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Placeholder content ready for implementation.</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
