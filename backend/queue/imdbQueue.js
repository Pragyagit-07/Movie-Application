import axios from "axios";
import Movie from "../models/Movie.js";

const imdbQueue = async () => {
  try {
    const { data } = await axios.get(IMDB_URL);

    const bulkOps = data.items.map((m) => ({
      updateOne: {
        filter: { title: m.title },
        update: {
          title: m.title,
          rating: m.imDbRating,
          poster: m.image
        },
        upsert: true
      }
    }));

    await Movie.bulkWrite(bulkOps);
    console.log("IMDb queue processed successfully");
  } catch (err) {
    console.error("Queue error:", err.message);
  }
};


export default imdbQueue;
