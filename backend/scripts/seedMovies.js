// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import Movie from "../models/Movie.js";
// // import connectDB from "../config/db.js";

// // dotenv.config();
// // await connectDB();

// // const movies = [
// //   {
// //     title: "The Shawshank Redemption",
// //     description: "Two imprisoned men bond over years.",
// //     rating: 9.3,
// //     releaseDate: "1994-09-22",
// //     duration: 142,
// //     poster:
// //       "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
// //   },
// //   {
// //     title: "The Godfather",
// //     description: "Mafia family drama",
// //     rating: 9.2,
// //     releaseDate: "1972-03-24",
// //     duration: 175,
// //     poster:
// //       "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg",
// //   },
// // ];

// // await Movie.insertMany(movies);
// // console.log("Movies inserted");
// // process.exit();



// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Movie from "../models/Movie.js";

// dotenv.config();

// const movies = Array.from({ length: 60 }).map((_, i) => ({
//   title: `Movie ${i + 1}`,
//   description:
//     "A visually stunning cinematic experience with strong storytelling.",
//   poster: `https://picsum.photos/400/600?random=${i + 1}`,
//   rating: (Math.random() * 4 + 6).toFixed(1),
//   duration: 90 + i,
//   releaseDate: `20${10 + (i % 10)}-01-01`,
// }));

// const seed = async () => {
//   await mongoose.connect(process.env.MONGO_URI);
//   await Movie.deleteMany();
//   await Movie.insertMany(movies);
//   console.log("✅ Movies seeded successfully");
//   process.exit();
// };

// seed();



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

    console.log("✅ REAL movies imported from TMDB");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedMovies();
