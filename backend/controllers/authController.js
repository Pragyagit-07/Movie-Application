// // const User = require("../models/User");
// import User from "../models/User.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// // const jwt = require("jsonwebtoken");

// const generateToken = (id) =>
//   jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// exports.register = async (req, res) => {
//   const { email, password, role } = req.body;
//   const user = await User.create({ email, password, role });
//   res.json({
//     token: generateToken(user._id),
//     role: user.role,
//   });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       token: generateToken(user._id),
//       role: user.role,
//     });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// };


import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
