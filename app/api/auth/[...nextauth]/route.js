import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/user";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

export const authOptions = {
        providers: [
               GoogleProvider({
                       clientId: process.env.GOOGLE_CLIENT_ID,
                       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                       allowDangerousEmailAccountLinking: true,
                       profile(profile){
                            return {
                                    id: profile.sub,
                                    name: profile.name,
                                    email: profile.email,
                                    image: profile.picture,
                                    role: profile.role ?? "Investor",
                                    verified: false,
                                    username: profile.given_name,
                            }
                       }
               }),
               CredentialsProvider({
                      name: "credentials",
                      async authorize(credentials){
                               const { email, password } = credentials;
                                //check if user exists
                               const user = await getUserByEmail(email);

                               if(!user){
                                      throw new Error("No user found");
                               }

                               //check if passwords match
                               const passwordMatch = await bcrypt.compare(password, user.password);

                               if(!passwordMatch){
                                      throw new Error("Incorrect user details")
                               }

                               return user;
                      }
               })
        ],
        callbacks: {
               async jwt({ token, user, trigger, session }){
                       if(user){
                                token.role = user.role
                       }
                       return token;
               },
               async session({ session, token}){
                       session.user.role = token.role
                       return session
               }
        },
        secret: process.env.NEXT_PUBLIC__SECRET,
        adapter: MongoDBAdapter(clientPromise),
        session: {
               strategy: "jwt",
        },
        pages: {
              signIn: '/auth/login'
        }
        // debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }