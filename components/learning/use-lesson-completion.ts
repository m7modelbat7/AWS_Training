"use client";

import { useContext } from "react";

import { CompletionContext } from "@/components/learning/completion-provider";

export function useLessonCompletion() {
  const context = useContext(CompletionContext);

  if (!context) {
    throw new Error("useLessonCompletion must be used within CompletionProvider");
  }

  return context;
}
