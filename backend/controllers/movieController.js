import Movie from "../models/Movie.js";


export const getMovies = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 16;
    const skip = (page - 1) * limit;

    const total = await Movie.countDocuments();
    const movies = await Movie.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      movies,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalMovies: total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const searchMovies = async (req, res) => {
  try {
    const q = req.query.query || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 16;
    const skip = (page - 1) * limit;

    const filter = {
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ]
    };

    const total = await Movie.countDocuments(filter);
    const movies = await Movie.find(filter)
      .skip(skip)
      .limit(limit);

    res.json({
      movies,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalMovies: total
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const sortMovies = async (req, res) => {
  try {
    const { by = "title", order = "asc" } = req.query;

    const allowedFields = ["title", "rating", "releaseDate", "duration"];
    if (!allowedFields.includes(by)) {
      return res.status(400).json({ message: "Invalid sort field" });
    }

    const sortOrder = order === "desc" ? -1 : 1;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 16;
    const skip = (page - 1) * limit;

    const total = await Movie.countDocuments();
    const movies = await Movie.find()
      .sort({ [by]: sortOrder })
      .skip(skip)
      .limit(limit);

    res.json({
      movies,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalMovies: total
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addMovie = async (req, res) => {
  try {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
} catch (err) {
  res.status(400).json({ message: err.message });
}

};
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    await movie.deleteOne();
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
