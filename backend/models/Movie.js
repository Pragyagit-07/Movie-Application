import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  releaseDate: Date,
  duration: Number,
  poster: String
});

export default mongoose.model("Movie", movieSchema);
