"use client";

import Link from "next/link";

import { useLessonCompletion } from "@/components/learning/use-lesson-completion";
import type { Course, Domain, LearningModule, Lesson } from "@/lib/learning/catalog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type AdjacentLessonRef = {
  domain: Domain;
  module: LearningModule;
  lesson: Lesson;
};

type LessonViewerProps = {
  course: Course;
  domain: Domain;
  module: LearningModule;
  lesson: Lesson;
  previous: AdjacentLessonRef | null;
  next: AdjacentLessonRef | null;
};

function toLessonHref(domainSlug: string, moduleSlug: string, lessonSlug: string) {
  return `/learn/${domainSlug}/${moduleSlug}/${lessonSlug}`;
}

export function LessonViewer({ course, domain, module, lesson, previous, next }: LessonViewerProps) {
  const { isLessonComplete, toggleLessonComplete, completedLessonIds } = useLessonCompletion();

  const completed = isLessonComplete(lesson.id);
  const moduleCompleted = module.lessons.filter((item) => completedLessonIds.includes(item.id)).length;
  const modulePercent = Math.round((moduleCompleted / module.lessons.length) * 100);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{course.examCode}</Badge>
            <Badge variant="outline">{domain.title}</Badge>
            <Badge variant="outline">{module.title}</Badge>
          </div>
          <CardTitle className="text-3xl tracking-tight">{lesson.title}</CardTitle>
          <CardDescription>{lesson.summary}</CardDescription>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{lesson.durationMinutes} min lesson</span>
            <span>
              Module progress: {moduleCompleted}/{module.lessons.length} ({modulePercent}%)
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${modulePercent}%` }} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {lesson.content.map((section) => (
            <div key={section.heading} className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}

          <div className="rounded-xl border bg-muted/30 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key takeaways</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {lesson.keyTakeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </div>

          <Button type="button" onClick={() => toggleLessonComplete(lesson.id)} className="w-full sm:w-auto">
            {completed ? "Mark as incomplete" : "Mark as complete"}
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Button variant="outline" asChild className="justify-start">
            <Link href={toLessonHref(previous.domain.slug, previous.module.slug, previous.lesson.slug)}>
              ← Previous: {previous.lesson.title}
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {next ? (
          <Button asChild className="justify-end">
            <Link href={toLessonHref(next.domain.slug, next.module.slug, next.lesson.slug)}>Next: {next.lesson.title} →</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
