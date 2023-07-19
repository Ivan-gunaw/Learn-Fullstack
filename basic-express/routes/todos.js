const todoRoute = require("express").Router();
const TodoController = require("../controllers/TodoController");

todoRoute.get("/", TodoController.getTodos);
todoRoute.get("/create", TodoController.create);

module.exports = todoRoute;