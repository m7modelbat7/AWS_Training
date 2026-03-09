import { LessonCatalog } from "@/components/learning/lesson-catalog";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge } from "@/components/ui/badge";
import { cloudPractitionerCourse } from "@/lib/learning/catalog";

export default function LearnPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Lesson Library"
        description="Explore structured AWS Cloud Practitioner lessons by domain and module."
        actions={<Badge variant="secondary">{cloudPractitionerCourse.examCode}</Badge>}
      />
      <LessonCatalog course={cloudPractitionerCourse} />
    </div>
  );
}
