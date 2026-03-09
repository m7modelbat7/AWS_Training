import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type RecommendedNextStepProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function RecommendedNextStep({ title, description, ctaLabel, ctaHref }: RecommendedNextStepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Next Step</CardTitle>
        <CardDescription>What to do next to maximize your exam readiness.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-xl border bg-muted/30 p-4">
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button asChild className="w-full">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
