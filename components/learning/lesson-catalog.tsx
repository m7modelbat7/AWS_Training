"use client";

import Link from "next/link";

import { useLessonCompletion } from "@/components/learning/use-lesson-completion";
import type { Course } from "@/lib/learning/catalog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LessonCatalogProps = {
  course: Course;
};

function getPercentage(completed: number, total: number) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function LessonCatalog({ course }: LessonCatalogProps) {
  const { completedLessonIds, isLessonComplete } = useLessonCompletion();

  return (
    <div className="space-y-6">
      {course.domains.map((domain) => {
        const domainLessons = domain.modules.flatMap((module) => module.lessons);
        const completedDomainLessons = domainLessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
        const domainPercent = getPercentage(completedDomainLessons, domainLessons.length);

        return (
          <Card key={domain.id}>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>{domain.title}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </div>
                <Badge variant="secondary">
                  {completedDomainLessons}/{domainLessons.length} complete ({domainPercent}%)
                </Badge>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${domainPercent}%` }} />
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {domain.modules.map((module) => {
                const completedModuleLessons = module.lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
                const modulePercent = getPercentage(completedModuleLessons, module.lessons.length);

                return (
                  <div key={module.id} className="rounded-xl border p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-medium tracking-tight">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {completedModuleLessons}/{module.lessons.length} lessons · {modulePercent}%
                      </p>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-foreground/80" style={{ width: `${modulePercent}%` }} />
                    </div>

                    <ul className="mt-4 space-y-2">
                      {module.lessons.map((lesson) => {
                        const href = `/learn/${domain.slug}/${module.slug}/${lesson.slug}`;
                        const completed = isLessonComplete(lesson.id);

                        return (
                          <li key={lesson.id}>
                            <Link
                              href={href}
                              className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted/50"
                            >
                              <span className="font-medium">{lesson.title}</span>
                              <span className="text-xs text-muted-foreground">
                                {lesson.durationMinutes} min · {completed ? "Completed" : "Not started"}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
