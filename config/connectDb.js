import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Please provide the mongodb uri in the .env file!");
}

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected DB");
  } catch (error) {
    console.log("Mongodb connect error", error);
    process.exit(1)
  }
}
export default connectDb;
