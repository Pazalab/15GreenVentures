"use server"

import dbConnect from "@/app/lib/dbConn";
import User from "@/app/models/UserModel";

export const registerUser = async (data) =>{
         const { name, email, password } = data;
         const dbConnection = await dbConnect();

         if(dbConnection){
               //console.log(dbConnection.connections[0].host);
               const userExists = await User.findOne({ email });

               if(userExists){
                      return { error: 'User account with the email already exists!'}
               }

              await User.create({ name, email, password, role: 'investor'})

               return { success: 'Account registered successfully.'}
         }else{
                throw new Error("Error connecting to the database");
         }
}