const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.addMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};

exports.searchMovies = async (req, res) => {
  const q = req.query.q;
  const movies = await Movie.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } }
    ]
  });
  res.json(movies);
};
