import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const adminExists = await User.findOne({ email: "admin@movie.com" });

    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    await User.create({
      name: "Admin",
      email: "admin@movie.com",
      password: "Admin@123",
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
