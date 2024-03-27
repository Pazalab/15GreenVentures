import dbConnect from "./dbConn";
import User from "@/models/UserModel";

export const getUserByEmail = async (email) =>{
      try {
           await dbConnect();
           const user = await User.findOne({ email });
           return user;
      } catch (error) {
            return null;
      }
}

export const getUserById = async(id) => {
        try {
              await dbConnect();
              const user = await User.findById(id);
              return user;
        } catch (error) {
            return null;
        }
}