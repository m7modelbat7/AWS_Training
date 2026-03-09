import Link from "next/link";

import { signUpAction } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SignUpPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function SignUpPage({ searchParams }: SignUpPageProps) {
  const hasError = searchParams?.error === "invalid_input";

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create account</CardTitle>
        <CardDescription>Set up your learner profile and start preparing.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={signUpAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <Input id="name" name="name" placeholder="Jane Doe" required minLength={2} autoComplete="name" />
          </div>
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
            <Input id="password" name="password" type="password" required autoComplete="new-password" minLength={8} />
          </div>
          {hasError ? <p className="text-sm text-destructive">Please provide valid account details.</p> : null}
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
