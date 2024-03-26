import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import dbConnect from "./lib/dbConn.js";
import User from "./models/UserModel.js";

const authConfig= {
    providers: [
        Credentials({
                // async authorize(credentials){
                //         const { email, password } = credentials;
                //         await dbConnect();
                        
                //         const user = await User.findOne({ email });

                //         if(!user || !user.password) return null;

                //        const passwordMatch =  bcrypt.compare(password, user.password);

                //        if(passwordMatch) return user;

                //        return null;
                // }
        })
   ]
}

export default authConfig satisfies NextAuthConfig