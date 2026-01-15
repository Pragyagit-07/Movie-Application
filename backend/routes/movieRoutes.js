const express = require("express");
const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const {
  getMovies,
  searchMovies,
  sortMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/sorted", sortMovies);

router.post("/", protect, isAdmin, addMovie);
router.put("/:id", protect, isAdmin, updateMovie);
router.delete("/:id", protect, isAdmin, deleteMovie);

module.exports = router;
