import { notFound } from "next/navigation";

import { LessonViewer } from "@/components/learning/lesson-viewer";
import { cloudPractitionerCourse, findLessonBySlugs, getAdjacentLessons } from "@/lib/learning/catalog";

type LessonPageProps = {
  params: {
    domainSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  };
};

export default function LessonPage({ params }: LessonPageProps) {
  const resolved = findLessonBySlugs(cloudPractitionerCourse, params.domainSlug, params.moduleSlug, params.lessonSlug);

  if (!resolved) {
    notFound();
  }

  const { previous, next } = getAdjacentLessons(cloudPractitionerCourse, resolved.lesson.id);

  return (
    <LessonViewer
      course={cloudPractitionerCourse}
      domain={resolved.domain}
      module={resolved.module}
      lesson={resolved.lesson}
      previous={previous}
      next={next}
    />
  );
}
