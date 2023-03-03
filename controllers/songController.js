
const express = require("express");
const songs = express.Router();
const {
    getAllsongs,
    getOnesong,
    updateOnesong,
    deletesong,
    createsong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  try {
    const songs = await getAllsongs();
    res.json(songs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "ba-DUM! something sounds really wrong!" });
  }
});

songs.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = await getOnesong(id);
    res.json(song);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That song in your playlist does not exist!" });
  }
});

songs.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = req.body;

    const updatedsong = await updateOnesong(id, song);
    res.json(updatedsong);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update song" });
  }
});

songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedsong = await deletesong(id);
    res.json(deletedsong);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something sounds terrible!" });
  }
});

songs.post("/", async (req, res) => {
  try {
    const song = req.body;

    const createdsong = await createsong(song);
    res.json(createdsong);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect post body" });
    res.status(400).json({ error: "Incorrect post body" });

}
});

module.exports = songs;

