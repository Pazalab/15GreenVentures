import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserByEmail, getUserById } from "./lib/user";
import dbConnect from "./lib/dbConn";
import User from "./models/UserModel";

export const { handlers: { POST, GET },  auth, signIn, signOut } = NextAuth({
        callbacks: {
                async signIn({ profile}){
                        console.log(profile)
                        try {
                               if(profile){
                                       await dbConnect();

                                      const userExists = await getUserByEmail({ email: profile.email })

                                     if(!userExists){
                                            const user = await User.create({
                                                  name: profile.name,
                                                  email: profile.email,
                                                  image: profile.picture,
                                                  verified: profile.email_verified,
                                             })
                                       }
                               }
                                return true;
                        } catch (error) {
                                return false;
                        }
                },
                async session ({ token, session }){
                        if(token.sub && session.user){
                                  session.user.id = token.sub
                        }
                        if(token.role && session.user){
                                session.user.role = token.role
                        }
                },
                async jwt({ token }) {
                        if(!token.sub) return token;

                        const existingUser = await getUserById(token.sub);

                        if(!existingUser) return token;

                        token.role = existingUser.role;

                         return token;
                }
        },
        session: { strategy: "jwt"},
        ...authConfig,
})