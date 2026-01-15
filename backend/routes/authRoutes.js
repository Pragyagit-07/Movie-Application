// const express = require("express");
// const { register, login } = require("../controllers/authController");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;

import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);

export default router;

