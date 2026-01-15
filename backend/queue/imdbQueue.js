const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const Movie = require("../models/Movie");

import Movie from "../models/Movie.js";

const imdbQueue = async () => {
  setTimeout(async () => {
    console.log("IMDb queue started");
    // Placeholder: IMDb scraping requires auth; explain in README
  }, 3000);
};

// module.exports = imdbQueue;
export default imdbQueue;
