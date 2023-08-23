import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+..+)(.*)",
    "/api/trpc/post.all",
    "/api/trpc/post.byId",
    "/api/trpc/post.create",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
