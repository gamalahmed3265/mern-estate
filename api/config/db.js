import mongoose from "mongoose";

export async function connectDB(){
    await mongoose.connect(process.env.DATABASELINK).then(()=>{
        console.log("Connected to MongoStoreDB");
    }).catch((err)=>{
        console.log(err);
    })
}