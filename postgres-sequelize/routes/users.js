const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getUsers);
userRoute.post("/create", UserController.create);
userRoute.get("/details/:UserId", UserController.getUserById);
userRoute.get("/delete/:id", UserController.delete);
userRoute.post("/update/:id", UserController.update);

module.exports = userRoute
