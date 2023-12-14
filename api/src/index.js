require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

dotenv.config();
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.log("Error Connecting to Mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your Email is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
