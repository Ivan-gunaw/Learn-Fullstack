const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getUsers);
userRoute.get("/create", UserController.create);

module.exports = userRoute;