import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Projects"
        description="Organize initiatives and map them to training tracks."
        actions={<Button size="sm">Create Project</Button>}
      />
      <Card>
        <CardHeader>
          <CardTitle>Project Backlog</CardTitle>
          <CardDescription>Placeholder table/list for upcoming project records.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">No projects yet. Add your first initiative to get started.</CardContent>
      </Card>
    </div>
  );
}
