export { default } from "next-auth/middleware";

import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;
  const loginUrl = new URL("/login", request.nextUrl.origin);
  const homeUrl = new URL("/", request.nextUrl.origin);

  if (!token && path !== "/") {
    return NextResponse.redirect(loginUrl);
  } else if (token && path === "/login") {
    return NextResponse.redirect(homeUrl);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/advertisement-registration",
    "/bookmarks",
    "/my-advertisements",
    "/my-resume",
    "/profile",
    "/resumes-received",
  ],
};
