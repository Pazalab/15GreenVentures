import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
// export default withAuth(
//     function middleware(req){
//            console.log(req.nextauth)
//            if(req.nextauth.token?.role !== 'Admin'){
//                   return NextResponse.redirect(new URL("/user/dashboard", req.url))
//            }else{
//                  return NextResponse.redirect(new URL("/admin/dashboard", req.url))
//             }
//     },
//     {
//         callbacks: {
//                authorized: async ({ token }) => {
//                      return !!token
//                }
//         }
//     }
// )
export async function middleware(req) {
        const token = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRET})

        if(!token) return NextResponse.redirect(new URL('/auth/login', req.url));

        switch (token.role){
               case "Admin": 
                      if(!req.nextUrl.pathname.startsWith("/admin")){
                              return NextResponse.redirect(new URL('/admin/dashboard', req.url))
                      }
                      break;
              case "Investor":
                     if(!req.nextUrl.pathname.startsWith("/user")){
                             return NextResponse.redirect(new URL('/user/dashboard', req.url))
                     }
                     break;
              default: 
                    return NextResponse.redirect(new URL('/auth/login', req.url))
        }
}
export const config = { matcher: ["/user/:path*", "/admin/:path*"] }