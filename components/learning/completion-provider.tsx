"use client";

import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "aws-training-completed-lessons";

type CompletionContextValue = {
  completedLessonIds: string[];
  toggleLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
};

export const CompletionContext = createContext<CompletionContextValue | null>(null);

export function CompletionProvider({ children }: { children: ReactNode }) {
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as string[];
      if (Array.isArray(parsed)) {
        setCompletedLessonIds(parsed);
      }
    } catch {
      // no-op: fallback to empty completion state
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessonIds));
    } catch {
      // no-op: local persistence is best-effort
    }
  }, [completedLessonIds]);

  const value = useMemo<CompletionContextValue>(
    () => ({
      completedLessonIds,
      toggleLessonComplete: (lessonId: string) => {
        setCompletedLessonIds((prev) =>
          prev.includes(lessonId) ? prev.filter((item) => item !== lessonId) : [...prev, lessonId],
        );
      },
      isLessonComplete: (lessonId: string) => completedLessonIds.includes(lessonId),
    }),
    [completedLessonIds],
  );

  return <CompletionContext.Provider value={value}>{children}</CompletionContext.Provider>;
}
