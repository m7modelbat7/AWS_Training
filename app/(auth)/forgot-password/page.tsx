import Link from "next/link";

import { forgotPasswordAction } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ForgotPasswordPageProps = {
  searchParams?: {
    error?: string;
    sent?: string;
  };
};

export default function ForgotPasswordPage({ searchParams }: ForgotPasswordPageProps) {
  const hasError = searchParams?.error === "invalid_email";
  const sent = searchParams?.sent === "1";

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Forgot password</CardTitle>
        <CardDescription>Enter your email and we&apos;ll send reset instructions (placeholder flow).</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={forgotPasswordAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
          </div>
          {hasError ? <p className="text-sm text-destructive">Please enter a valid email address.</p> : null}
          {sent ? (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">If an account exists, reset instructions have been sent.</p>
          ) : null}
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Back to{" "}
          <Link href="/sign-in" className="underline-offset-4 hover:underline">
            sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
