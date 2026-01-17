import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  poster: String,
  rating: Number,
  releaseDate: Date,
  duration: Number,
  
},

  { timestamps: true }

);

export default mongoose.model("Movie", movieSchema);
