import Movie from "../models/Movie.js";

// export const getMovies = async (req, res) => {
//   const page = Number(req.query.page) || 1;
//   const limit = 18;
//   const skip = (page - 1) * limit;

//   const movies = await Movie.find().skip(skip).limit(limit);
//   const total = await Movie.countDocuments();

//   res.json({ movies, totalPages: Math.ceil(total / limit) });
// };
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


export const searchMovies = async (req, res) => {
  const q = req.query.query;
  const movies = await Movie.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } }
    ]
  });
  res.json(movies);
};

export const sortMovies = async (req, res) => {
  const { by } = req.query;
  const movies = await Movie.find().sort({ [by]: 1 });
  res.json(movies);
};

export const addMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

export const updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

export const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};
