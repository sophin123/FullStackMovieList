const Movies = require("../model/moviesModel");
const mongoose = require("mongoose");

const getallMovies = async (req, res) => {
  const user_id = req.user._id;
  const movies = await Movies.find({ user_id }).sort({ createAt: -1 });
  res.status(200).json(movies);
};

const singleMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }

  const movies = await Movies.findById(id);

  if (!movies) {
    return res.status(400).json({ error: "Movies does not exits" });
  }
  res.status(200).json(movies);
};

const postSingleMovie = async (req, res) => {
  const { title, release, rate } = req.body;

  const emptyField = [];

  if (!title) {
    emptyField.push("title");
  }
  if (!release) {
    emptyField.push("release");
  }
  if (!rate) {
    emptyField.push("rate");
  }

  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill up all fields", emptyField });
  }

  const user_id = req.user._id;

  try {
    const movies = await Movies.create({ title, release, rate, user_id });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const delSingleMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }

  const movies = await Movies.findOneAndDelete({
    _id: id,
  });

  if (!movies) {
    return res.status(400).json({ error: "Movies does not exits" });
  }

  res.status(200).json(movies);
};

const updateSingleMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }
  const movies = await Movies.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body }
  );

  if (!movies) {
    return res.status(400).json({ error: "Movies does not exits" });
  }

  res.status(200).json(movies);
};

module.exports = {
  getallMovies,
  singleMovie,
  postSingleMovie,
  delSingleMovie,
  updateSingleMovie,
};
