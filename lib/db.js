import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URL;

const options = {}

if(!URI) throw new Error("Please add your mongo URI");

let client = new MongoClient(URI, options)
let clientPromise

if(process.env.NODE_ENV !== 'production'){
       if(!global._mongoClientPromise){
           global._mongoClientPromise = client.connect();
       }
       clientPromise = global._mongoClientPromise
}else{
       clientPromise = client.connect()
}

export default clientPromise;