const Queue = require("bull");

const movieQueue = new Queue("movieQueue", process.env.REDIS_URL);

movieQueue.process(async (job) => {
  const Movie = require("../models/Movie");
  await Movie.create(job.data);
});

module.exports = movieQueue;
