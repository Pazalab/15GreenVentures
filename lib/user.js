import { dbConnect } from "./dbConn";
import User from "@/models/UserModel";

export const getUserByEmail = async (email) =>{
      await dbConnect(); 
      try {
           const user = await User.findOne({ email });
           return user;
      } catch (error) {
            return null;
      }
}

export const getUserById = async(id) => {
      await dbConnect(); 
        try {
              const user = await User.findById(id);
              return user;
        } catch (error) {
            return null;
        }
}

