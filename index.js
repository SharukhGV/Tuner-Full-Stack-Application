const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");

app.use(cors());

let songController = require("./controllers/songController");
app.use("/songs", songController);

app.get("/", (req, res) => {
  res.send("This is an App to MAke your Music Playlist!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

module.exports = app;
