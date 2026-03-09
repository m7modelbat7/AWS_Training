import Link from "next/link";

import { signInAction } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SignInPageProps = {
  searchParams?: {
    error?: string;
    next?: string;
  };
};

export default function SignInPage({ searchParams }: SignInPageProps) {
  const next = searchParams?.next ?? "/dashboard";
  const hasError = searchParams?.error === "invalid_credentials";

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Continue your AWS Cloud Practitioner preparation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={signInAction} className="space-y-4">
          <input type="hidden" name="next" value={next} />
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" name="password" type="password" required autoComplete="current-password" minLength={8} />
          </div>
          {hasError ? <p className="text-sm text-destructive">Invalid credentials. Please check your details.</p> : null}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="flex items-center justify-between text-sm">
          <Link href="/forgot-password" className="text-muted-foreground underline-offset-4 hover:underline">
            Forgot password?
          </Link>
          <Link href="/sign-up" className="text-muted-foreground underline-offset-4 hover:underline">
            Create account
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
