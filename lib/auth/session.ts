import { cookies } from "next/headers";

import { AUTH_COOKIE_NAME } from "@/lib/auth/constants";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export function getSessionToken() {
  return cookies().get(AUTH_COOKIE_NAME)?.value;
}

export function createSessionToken() {
  return crypto.randomUUID();
}

export function setSessionCookie(token: string) {
  cookies().set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export function clearSessionCookie() {
  cookies().set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
