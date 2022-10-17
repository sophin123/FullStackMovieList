const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const moviesRouter = require("./route/movies");
const userRoute = require("./route/user");

//handle incoming data parse into JSON()
app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//router
app.use("/user", userRoute);
app.use("/movies", moviesRouter);

mongoose
  .connect(process.env.MONGOOSEURI)
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log("Listening and connected to DB", process.env.PORT);
    });
  })
  .catch((err) => console.log("error", err));
