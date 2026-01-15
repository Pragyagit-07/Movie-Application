// require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
import authRoutes from "./routes/authRoutes.js";
import imdbQueue from "./queue/imdbQueue.js";
import movieRoutes from "./routes/movieRoutes.js";
// const imdbQueue = require("./queue/imdbQueue");
dotenv.config();

const app = express();
connectDB();
imdbQueue();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/movies", require("./routes/movieRoutes"));

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
