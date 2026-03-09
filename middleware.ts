import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_COOKIE_NAME, AUTH_PAGES, PROTECTED_ROUTES } from "@/lib/auth/constants";

function matchesRoute(pathname: string, routes: string[]) {
  return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isAuthenticated = Boolean(request.cookies.get(AUTH_COOKIE_NAME)?.value);

  if (matchesRoute(pathname, PROTECTED_ROUTES) && !isAuthenticated) {
    const redirectUrl = new URL("/sign-in", request.url);
    redirectUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(redirectUrl);
  }

  if (matchesRoute(pathname, AUTH_PAGES) && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
    "/settings/:path*",
    "/learn/:path*",
    "/sign-in",
    "/sign-up",
    "/forgot-password",
  ],
};
