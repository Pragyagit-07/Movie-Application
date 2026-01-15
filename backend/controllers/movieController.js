const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const movies = await Movie.find().skip(skip).limit(limit);
  const total = await Movie.countDocuments();

  res.json({
    movies,
    totalPages: Math.ceil(total / limit),
  });
};

exports.searchMovies = async (req, res) => {
  const query = req.query.query;
  const movies = await Movie.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ],
  });
  res.json(movies);
};

exports.sortMovies = async (req, res) => {
  const sortBy = req.query.by;
  const movies = await Movie.find().sort({ [sortBy]: 1 });
  res.json(movies);
};

exports.addMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};
