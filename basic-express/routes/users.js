const userRoute = require ("express").Router();
const userController = require ("../controllers/userController");

userRoute.get("/", userController.getUsers);
userRoute.get("/create", userController.create);

module.exports = userRoute;