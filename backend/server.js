import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import imdbQueue from "./queue/imdbQueue.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API running successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
