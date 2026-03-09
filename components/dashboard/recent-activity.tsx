import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  title: string;
  detail: string;
  time: string;
};

type RecentActivityProps = {
  items: ActivityItem[];
};

export function RecentActivity({ items }: RecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest learning events and completed tasks.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.time}`} className="rounded-lg border p-3">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
            <p className="pt-1 text-xs text-muted-foreground">{item.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
