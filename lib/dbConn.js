import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const cached = {};

async function dbConnect() {
        if(!MONGO_URL){
                 throw new Error("Please define the Mongo url connection");
        }
        if(cached.connection){
                 return cached.connection;
        }

        if(!cached.promise){
               const opts = {
                      bufferCommands: false,
               }
               cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose)=>{
                      return mongoose;
               });
        }
        try {
               cached.connection = await cached.promise;
        } catch (e) {
                cached.promise = undefined;
                throw e;
        }

        return cached.connection;
}

export default dbConnect;