import NextAuth from "next-auth";
//import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/UserModel";
import bcrypt from "bcryptjs";
import dbConnect from "./lib/dbConn";

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
        providers: [
                Credentials({
                        async authorize(credentials){
                                const { email, password } = credentials;
                                await dbConnect();
                                
                                const user = await User.findOne({ email });

                                if(!user || !user.password) return null;

                               const passwordMatch = await bcrypt.compare(password, user.password);

                               if(passwordMatch) return user;

                               return null;
                        }
                })
        ]
})