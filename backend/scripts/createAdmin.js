import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@test.com",
    password: "admin123",
    role: "admin",
  });

  console.log("Admin created");
  process.exit();
};

createAdmin();
