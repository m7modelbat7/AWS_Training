import { Card, CardContent } from "@/components/ui/card";

type QuickStat = {
  label: string;
  value: string;
  hint: string;
};

type QuickStatsProps = {
  stats: QuickStat[];
};

export function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/70 bg-card/90">
          <CardContent className="space-y-1 p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.hint}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
