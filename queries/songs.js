const db = require("../db/dbConfig.js");

const getAllsongs = async () => await db.any("SELECT * FROM songs");

const getOnesong = async (id) =>
  await db.one("SELECT * FROM songs WHERE id=$1", id);

const updateOnesong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;

  return await db.one(
    "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5, WHERE id=$6 RETURNING *",
    [name, artist, album, time, is_favorite, id]
  );
};

const deletesong = async (id) =>
  await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id);

const createsong = async (song) =>
  await db.one(
    "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [song.name, song.artist, song.album, song.time, song.is_favorite]
  );

module.exports = {
  getAllsongs,
  getOnesong,
  updateOnesong,
  deletesong,
  createsong,
};
