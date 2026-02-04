import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};

export default connection;
