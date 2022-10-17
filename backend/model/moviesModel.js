const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    release: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", MoviesSchema);
module.exports = Movies;
