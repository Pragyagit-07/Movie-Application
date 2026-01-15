// // const express = require("express");
// import express from "express";
// import protect from "../middleware/authMiddleware";
// import isAdmin from "../middleware/authMiddleware";
// // const protect = require("../middleware/authMiddleware");
// // const isAdmin = require("../middleware/adminMiddleware");
// const {
//   getMovies,
//   searchMovies,
//   sortMovies,
//   addMovie,
//   updateMovie,
//   deleteMovie,
// } = require("../controllers/movieController");

// const router = express.Router();

// router.get("/", getMovies);
// router.get("/search", searchMovies);
// router.get("/sorted", sortMovies);

// router.post("/", protect, isAdmin, addMovie);
// router.put("/:id", protect, isAdmin, updateMovie);
// router.delete("/:id", protect, isAdmin, deleteMovie);
// export default router;

import express from "express";
import protect from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js";

import {
  getMovies,
  searchMovies,
  sortMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/sorted", sortMovies);

router.post("/", protect, isAdmin, addMovie);
router.put("/:id", protect, isAdmin, updateMovie);
router.delete("/:id", protect, isAdmin, deleteMovie);

export default router;

