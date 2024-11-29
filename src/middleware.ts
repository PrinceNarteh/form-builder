export { auth } from "@/auth";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const publicRoutes = ["/login", "/register"];

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  const isPublicRoute = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isPublicRoute) return NextResponse.next();

  // Your custom middleware logic goes here
});
