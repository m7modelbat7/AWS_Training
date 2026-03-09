import { SectionHeader } from "@/components/layout/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Dashboard" description="Track team readiness and training progress." actions={<Badge>Beta</Badge>} />
      <div className="grid gap-4 md:grid-cols-3">
        {["Active learners", "Labs completed", "Certifications"].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle>{item}</CardTitle>
              <CardDescription>Metric placeholder</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">--</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
