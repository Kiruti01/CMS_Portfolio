import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  (auth, req) => {
    if (!auth().userId) {
      auth().redirectToSignIn({
        returnBackUrl: "/auth",
      });
    }
  },
  { debug: true }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
