import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, LineChart, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Domain-based learning",
    description:
      "Learn by AWS Cloud Practitioner exam domains with concise lessons mapped to real blueprint objectives.",
    icon: ShieldCheck,
  },
  {
    title: "Practice quizzes",
    description:
      "Reinforce every module with short quizzes designed to improve retention and confidence before exam day.",
    icon: CheckCircle2,
  },
  {
    title: "Mock exams",
    description:
      "Simulate timed exam conditions with full-length mocks and detailed explanations for every answer.",
    icon: Clock3,
  },
  {
    title: "Progress analytics",
    description: "Track readiness by domain and focus your effort where it has the highest score impact.",
    icon: LineChart,
  },
];

const learningPath = [
  {
    phase: "Foundations",
    title: "Cloud Concepts",
    description: "Understand value propositions, global infrastructure, and core cloud economics.",
  },
  {
    phase: "Core Services",
    title: "Security, Technology, and Billing",
    description: "Master IAM basics, shared responsibility, deployment models, pricing, and support plans.",
  },
  {
    phase: "Exam Readiness",
    title: "Domain Reviews + Mock Exams",
    description: "Validate your readiness with targeted revision sessions and exam-style practice.",
  },
];

const testimonials = [
  {
    name: "A. Martinez",
    role: "IT Support Specialist",
    quote: "The domain breakdown made study sessions focused. I passed CLF-C02 on my first attempt.",
  },
  {
    name: "N. Patel",
    role: "Career Switcher",
    quote: "Practice quizzes + mock exams gave me a clear plan each week and reduced test anxiety.",
  },
  {
    name: "R. Chen",
    role: "Junior Developer",
    quote: "Progress analytics showed exactly where I was weak, so revision time was far more efficient.",
  },
];

const faqs = [
  {
    question: "Who is this training platform for?",
    answer: "Anyone preparing for the AWS Certified Cloud Practitioner exam, from beginners to technical professionals.",
  },
  {
    question: "How long does preparation usually take?",
    answer: "Most learners prepare in 4-8 weeks depending on prior cloud exposure and weekly study time.",
  },
  {
    question: "Are explanations included for quiz and mock answers?",
    answer: "Yes. Every question includes rationale to help you understand why answers are correct or incorrect.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-8 pt-6 md:space-y-28">
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-background to-muted/30 px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="secondary" className="text-xs uppercase tracking-wide">
            AWS Certified Cloud Practitioner (CLF-C02)
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pass AWS Cloud Practitioner with a focused, premium prep experience.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Structured domain learning, realistic practice, and performance insights to help you prepare with clarity and
            confidence.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/dashboard">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#learning-path">View Learning Path</Link>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 id="features-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to prepare efficiently
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A complete exam prep workflow designed for practical understanding, not just memorization.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="h-full border-border/70 bg-card/80">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-background">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="learning-path" aria-labelledby="learning-path-heading" className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 id="learning-path-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Learning path preview
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Follow a guided sequence from cloud fundamentals to full exam simulation.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {learningPath.map((item, index) => (
            <Card key={item.title} className="relative h-full">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Step {index + 1} · {item.phase}
                </Badge>
                <CardTitle className="pt-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="social-proof-heading" className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 id="social-proof-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Learner feedback
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Placeholder testimonials to be replaced with verified stories.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="pricing-heading" className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 id="pricing-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing preview
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Transparent plans placeholder. Final pricing and limits will be confirmed before launch.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Starter", "Pro", "Team"].map((plan) => (
            <Card key={plan} className={plan === "Pro" ? "border-primary" : undefined}>
              <CardHeader>
                <CardTitle>{plan}</CardTitle>
                <CardDescription>
                  {plan === "Starter" && "Foundational prep for individual learners."}
                  {plan === "Pro" && "Full practice suite with advanced analytics."}
                  {plan === "Team" && "Manager dashboards for cohort training."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-3xl font-semibold">
                  {plan === "Starter" && "$19"}
                  {plan === "Pro" && "$39"}
                  {plan === "Team" && "$99"}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
                <Button variant={plan === "Pro" ? "default" : "outline"} className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 id="faq-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            FAQ preview
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Common questions from AWS Cloud Practitioner candidates.</p>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardHeader>
                <CardTitle className="text-base">{faq.question}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{faq.answer}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to earn your AWS Cloud Practitioner certification?</h2>
          <p className="max-w-2xl text-primary-foreground/90">
            Start your guided prep today and build the cloud fundamentals employers trust.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/dashboard">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
