import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "../models/Movie.js";

dotenv.config();

const TMDB_API = process.env.TMDB_API_KEY;
const TMDB_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const { data } = await axios.get(TMDB_URL, {
      headers: {
        Authorization: `Bearer ${TMDB_API}`,
        accept: "application/json",
      },
    });

    const movies = data.results.map((m) => ({
      title: m.title,
      description: m.overview,
      poster: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
      rating: m.vote_average,
      releaseDate: m.release_date,
      duration: Math.floor(Math.random() * 60) + 90, // TMDB doesn't give runtime here
    }));

    await Movie.deleteMany();
    await Movie.insertMany(movies);

    console.log(" REAL movies imported from TMDB");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedMovies();
