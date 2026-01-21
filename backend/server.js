import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import imdbQueue from "./queue/imdbQueue.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";


dotenv.config();

const app = express();
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later"
});

app.use(limiter);

// Middleware
app.use(cors({
  origin: [
        "http://localhost:3000",
        "http://192.168.1.3:3000",
"https://movie-application-five.vercel.app",
  ],
  credentials: true
}

));
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
