import express from "express";
import protect from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js";
import {
  getMovies,
  getMovieById,
  searchMovies,
  sortMovies,
  addMovie,
  updateMovie,
  deleteMovie
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);   

router.get("/search", searchMovies);
router.get("/sorted", sortMovies);
router.post("/", protect, isAdmin, addMovie);
router.put("/:id", protect, isAdmin, updateMovie);
router.delete("/:id", protect, isAdmin, deleteMovie);

export default router;
