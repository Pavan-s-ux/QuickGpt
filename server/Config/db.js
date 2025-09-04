import mongoose from "mongoose";
 
const connectDB = async ()=>{
    try{

        mongoose.connection.on("connected",()=> console.log("Databse connected!"));
        await mongoose.connect(`${process.env.MONGODB_URI}/quickgpt`)
    }catch(error){
        console.log(`Error connecting to database: ${error.message}`)
    }
}

export default connectDB;