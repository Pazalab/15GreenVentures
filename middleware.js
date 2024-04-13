import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(req){
           console.log(req.nextauth)
    },
    {
        callbacks: {
               authorized: async ({ token }) => {
                     return !!token
               }
        }
    }
)
export const config = { matcher: ["/user/:path*", "/admin/:path*"] }