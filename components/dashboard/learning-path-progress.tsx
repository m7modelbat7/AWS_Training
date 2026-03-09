import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LearningPathItem = {
  title: string;
  progress: number;
  lessonsDone: number;
  lessonsTotal: number;
};

type LearningPathProgressProps = {
  items: LearningPathItem[];
};

export function LearningPathProgress({ items }: LearningPathProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Path Progress</CardTitle>
        <CardDescription>Track your completion across AWS Cloud Practitioner domains.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <p className="font-medium">{item.title}</p>
              <p className="text-muted-foreground">
                {item.lessonsDone}/{item.lessonsTotal} lessons
              </p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
