import { BookOpen, CheckCircle2, ClipboardCheck, Gauge } from "lucide-react";

import { DashboardSection } from "@/components/dashboard/dashboard-section";
import { LearningPathProgress } from "@/components/dashboard/learning-path-progress";
import { QuickStats } from "@/components/dashboard/quick-stats";
import { ReadinessScore } from "@/components/dashboard/readiness-score";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RecommendedNextStep } from "@/components/dashboard/recommended-next-step";
import { SummaryCard } from "@/components/dashboard/summary-card";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const summaryCards = [
  {
    title: "Overall Progress",
    value: "62%",
    description: "+8% from last week",
    icon: Gauge,
  },
  {
    title: "Lessons Completed",
    value: "34 / 55",
    description: "21 lessons remaining",
    icon: BookOpen,
  },
  {
    title: "Quizzes Completed",
    value: "18",
    description: "Avg score: 78%",
    icon: CheckCircle2,
  },
  {
    title: "Mock Exam Readiness",
    value: "74%",
    description: "Approaching exam-ready zone",
    icon: ClipboardCheck,
  },
];

const quickStats = [
  { label: "Current Streak", value: "7 days", hint: "2 more days to hit your weekly goal" },
  { label: "Weekly Study Time", value: "5h 40m", hint: "Up 1h 10m from last week" },
  { label: "Target Exam Date", value: "Apr 28", hint: "50 days remaining" },
];

const learningPathItems = [
  { title: "Cloud Concepts", progress: 78, lessonsDone: 11, lessonsTotal: 14 },
  { title: "Security and Compliance", progress: 66, lessonsDone: 10, lessonsTotal: 15 },
  { title: "Cloud Technology and Services", progress: 53, lessonsDone: 8, lessonsTotal: 15 },
  { title: "Billing, Pricing, and Support", progress: 38, lessonsDone: 5, lessonsTotal: 11 },
];

const activityItems = [
  {
    title: "Completed quiz: Shared Responsibility Model",
    detail: "Scored 8/10 · Review recommended for question 6.",
    time: "Today · 09:20",
  },
  {
    title: "Finished lesson: AWS Global Infrastructure",
    detail: "Duration: 14 min · Marked as complete.",
    time: "Yesterday · 17:45",
  },
  {
    title: "Mock exam practice set #2",
    detail: "Scored 72% · 12 questions flagged for review.",
    time: "2 days ago · 20:10",
  },
];

const readinessBreakdown = [
  { label: "Cloud Concepts", score: 81 },
  { label: "Security", score: 75 },
  { label: "Services", score: 71 },
  { label: "Billing & Support", score: 66 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Learner Dashboard"
        description="Monitor your AWS Cloud Practitioner preparation and stay on track for exam success."
        actions={
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Updated just now</Badge>
            <Button size="sm">Resume Learning</Button>
          </div>
        }
      />

      <DashboardSection title="Performance Overview" description="Your core preparation metrics at a glance.">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryCard key={card.title} title={card.title} value={card.value} description={card.description} icon={card.icon} />
          ))}
        </div>
      </DashboardSection>

      <DashboardSection title="Learning Momentum" description="Short-term signals that help keep your consistency high.">
        <QuickStats stats={quickStats} />
      </DashboardSection>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <LearningPathProgress items={learningPathItems} />
          <RecentActivity items={activityItems} />
        </div>

        <div className="space-y-4">
          <ReadinessScore score={74} trendText="+6% improvement over the last 14 days" breakdown={readinessBreakdown} />
          <RecommendedNextStep
            title="Take the 40-question timed mock exam"
            description="Based on your current weak spots, this mock will improve your readiness in Billing and Support."
            ctaLabel="Start Mock Exam"
            ctaHref="/projects"
          />
        </div>
      </section>
    </div>
  );
}
