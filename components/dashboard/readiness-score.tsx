import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ReadinessScoreProps = {
  score: number;
  trendText: string;
  breakdown: Array<{ label: string; score: number }>;
};

export function ReadinessScore({ score, trendText, breakdown }: ReadinessScoreProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mock Exam Readiness</CardTitle>
        <CardDescription>{trendText}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-end justify-between">
          <p className="text-4xl font-semibold tracking-tight">{score}%</p>
          <p className="text-xs text-muted-foreground">Target: 80%+</p>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary" style={{ width: `${score}%` }} />
        </div>
        <div className="space-y-3">
          {breakdown.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium">{item.score}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-foreground/80" style={{ width: `${item.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
