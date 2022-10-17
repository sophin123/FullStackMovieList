const express = require("express");
const { userSignUp, userLogin } = require("../controller/userController");

const userRoute = express.Router();

userRoute.post("/login", userLogin);

userRoute.post("/signup", userSignUp);

module.exports = userRoute;
