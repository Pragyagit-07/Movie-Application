import axios from "axios";
import Movie from "../models/Movie.js";

const imdbQueue = async () => {
  const { data } = await axios.get("https://imdb-api.com/en/API/Top250Movies/YOUR_KEY");
  for (const m of data.items) {
    await Movie.updateOne(
      { title: m.title },
      {
        title: m.title,
        rating: m.imDbRating,
        poster: m.image
      },
      { upsert: true }
    );
  }
  console.log("IMDb queue completed");
};

export default imdbQueue;
