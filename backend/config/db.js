import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb://muskan_db_user:7355800657@ac-dszgycv-shard-00-00.hccfhws.mongodb.net:27017,ac-dszgycv-shard-00-01.hccfhws.mongodb.net:27017,ac-dszgycv-shard-00-02.hccfhws.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-pe7ay8-shard-0&authSource=admin&appName=Cluster0').then(()=>console.log('DB Connected'));
}

