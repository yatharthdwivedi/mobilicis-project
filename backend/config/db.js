import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`Connected to MONGO ${conn.connection.host}`);

    return mongoose;
  } catch (error) {
    console.log(`Error   ${error}`);
  }
};

export default connectDb;
