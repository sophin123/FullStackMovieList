const express = require("express");
const {
  getallMovies,
  singleMovie,
  postSingleMovie,
  delSingleMovie,
  updateSingleMovie,
} = require("../controller/moviesController");
const reqAuth = require("../middleware/reqAuth");

const router = express.Router();

router.use(reqAuth);

//get all movies
router.get("/", getallMovies);

//get only single movie
router.get("/:id", singleMovie);

//add single movies
router.post("/", postSingleMovie);

//delete single movies
router.delete("/:id", delSingleMovie);

//update movies
router.patch("/:id", updateSingleMovie);

module.exports = router;
