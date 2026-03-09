"use server";

import { redirect } from "next/navigation";

import { createSessionToken, setSessionCookie } from "@/lib/auth/session";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/dashboard");

  if (!validateEmail(email) || password.length < 8) {
    redirect(`/sign-in?error=invalid_credentials&next=${encodeURIComponent(next)}`);
  }

  setSessionCookie(createSessionToken());
  redirect(next.startsWith("/") ? next : "/dashboard");
}

export async function signUpAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (name.length < 2 || !validateEmail(email) || password.length < 8) {
    redirect("/sign-up?error=invalid_input");
  }

  setSessionCookie(createSessionToken());
  redirect("/dashboard");
}

export async function forgotPasswordAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!validateEmail(email)) {
    redirect("/forgot-password?error=invalid_email");
  }

  redirect("/forgot-password?sent=1");
}
