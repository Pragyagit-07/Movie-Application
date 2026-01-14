const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");
const { protect, adminOnly } = require("../middleware/auth");

router.get("/", controller.getMovies);
router.get("/search", controller.searchMovies);
router.post("/", protect, adminOnly, controller.addMovie);
router.put("/:id", protect, adminOnly, controller.updateMovie);
router.delete("/:id", protect, adminOnly, controller.deleteMovie);

module.exports = router;
