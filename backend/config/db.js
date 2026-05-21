import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('cluster_address here.......').then(()=>console.log('DB Connected'));
}

