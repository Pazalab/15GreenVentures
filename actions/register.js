"use server"

import { getUserByEmail } from "@/lib/user";
import User from "@/models/UserModel";

export const registerUser = async (data) =>{
         const { name, email, password } = data;
       
         const userExists = await getUserByEmail(email);

         if(userExists){
                return { error: 'User account with the email already exists!'}
         }

        await User.create({ name, email, password })

         return { success: 'Account registered successfully.'}
}