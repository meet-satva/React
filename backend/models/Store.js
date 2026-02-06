import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    city: { type: String, required: true }, 
});


  
  export default mongoose.model("Store", storeSchema);