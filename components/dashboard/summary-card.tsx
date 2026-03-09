import { type LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SummaryCardProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export function SummaryCard({ title, value, description, icon: Icon }: SummaryCardProps) {
  return (
    <Card className="h-full border-border/70 bg-card/90">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="rounded-md border bg-background p-2">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold tracking-tight">{value}</div>
        <CardDescription className="pt-1 text-xs">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
