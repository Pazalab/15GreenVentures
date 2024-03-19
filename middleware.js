//import { auth } from "./auth";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, protectedRoutes, publicRoutes } from "./routes";

export default auth(req => {
       const { nextUrl } = req;

       const isLoggedIn = !!req.auth;

       const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

       const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

       const isProtected = protectedRoutes.includes(nextUrl.pathname);

       if(isApiAuthRoute) return;

       if(isProtected){
               if(isLoggedIn){
                     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
               }
               return null;
       }

       if(!isLoggedIn && !isPublicRoute){
                 return Response.redirect(new URL("/auth/login", nextUrl));
       }

       return null;
})

export const config = {
       matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}