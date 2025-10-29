import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("Mongo URI is not set");

    const conn = await mongoose.connect(ENV.MONGO_URI)
    console.log("MONGO DB CONNECTED:", conn.connection.host)
  } catch (error) {
    console.error("Error connecting mongoDB:", error)
    process.exit(1); //1 means fails and 0 means success
  }
};