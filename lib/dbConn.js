import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if(!MONGO_URL){
       throw new Error("Please define the Mongo url connection");
}

const connection = {};

async function dbConnect() {
       if(connection.isConnected){
              return;
       }
       const db = await mongoose.connect(MONGO_URL);

       connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;