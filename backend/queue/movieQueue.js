const Queue = require("bull");
const Movie = require("../models/Movie");

const movieQueue = new Queue("movieQueue", process.env.REDIS_URL);

movieQueue.process(async (job) => {
  await Movie.create(job.data);
});

module.exports = movieQueue;
