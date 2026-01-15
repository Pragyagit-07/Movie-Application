// const mongoose = require("mongoose");
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: String,
    rating: Number,
    releaseDate: Date,
    duration: Number,
    poster: String,
    imdbId: String,
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Movie", movieSchema);
export default mongoose.model("Movie", movieSchema);
