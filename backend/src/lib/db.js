import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("Mongo URI is not set");

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("MONGO DB CONNECTED:", conn.connection.host)
  } catch (error) {
    console.error("Error connecting mongoDB:", error)
    process.exit(1); //1 means fails and 0 means success
  }
};