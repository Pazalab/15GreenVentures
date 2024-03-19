"use server"

import dbConnect from "@/lib/dbConn";
import User from "@/models/UserModel";

export const registerUser = async (data) =>{
         const { name, email, password } = data;
         await dbConnect();

         const userExists = await User.findOne({ email });

         if(userExists){
                return { error: 'User account with the email already exists!'}
         }

        await User.create({ name, email, password, role: 'investor'})

         return { success: 'Account registered successfully.'}
}