"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import cloudinary from "@/lib/cloudinary";
import { dbConnect } from "@/lib/dbConn";
import User from "@/models/UserModel";
import { mongoose } from "mongoose";
import { getServerSession } from "next-auth";

export const updateUser = async(data) => {
       const image = data.get("image")
       const profile_data = data.get("data")
       const { name, email, phone, country, bio } = JSON.parse(profile_data)
       const session = await getServerSession(authOptions);
       const user_id = new mongoose.Types.ObjectId(session.user.user_id);
    
       if(typeof image === "object"){ 
              //Image has been uploaded
              const arrayBuffer = await image.arrayBuffer();
              const buffer = new Uint8Array(arrayBuffer);

              //upload image to cloudinary and get back the image url
             const imageResult =  await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream({}, async function(error, result){
                             if(error){
                                       reject(error);
                                       return;
                             }
                            resolve(result)
                 }).end(buffer)
               })
              

               //connect to DB
               await dbConnect();

              const updated_user = await User.findByIdAndUpdate(user_id, {
                     name: name,
                     email: email,
                     phone: phone,
                     country: country,
                     bio: bio,
                     image: imageResult.url
              }, { new: true})
               
               if(updated_user){
                     const client_data = {
                            name: updated_user.name,
                            email: updated_user.email,
                            username: updated_user.username,
                            role: updated_user.role,
                            image: updated_user.image,
                            verified: updated_user.verified,
                            bio: updated_user.bio,
                            country: updated_user.country,
                            phone: updated_user.phone
                   }

                     return { type: "success", data: JSON.stringify(client_data), msg: "Settings saved successfully."}
               }else{
                  return { type: "error", msg: "Error! Please try again later"}
               }
       }else{
              //connect to DB
              await dbConnect();

              const updated_user = await User.findByIdAndUpdate(user_id, {
                     name: name,
                     email: email,
                     phone: phone,
                     country: country,
                     bio: bio,
              }, { new: true})
               
              if(updated_user){
                     const client_data = {
                            name: updated_user.name,
                            email: updated_user.email,
                            username: updated_user.username,
                            role: updated_user.role,
                            image: updated_user.image,
                            verified: updated_user.verified,
                            bio: updated_user.bio,
                            country: updated_user.country,
                            phone: updated_user.phone
                   }

                        return { type: "success", data: JSON.stringify(client_data), msg: "Settings saved successfully."}
              }else{
                     return { type: "error", msg: "Error! Please try again later"}
              }
       }

}