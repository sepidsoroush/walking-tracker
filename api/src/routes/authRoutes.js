const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const secretKey = process.env.SECRECT_KEY;

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
