const todoRoute = require("express").Router();
const TodoController = require("../controllers/TodoController");

todoRoute.get("/", TodoController.getTodos);
todoRoute.post("/create", TodoController.create);
todoRoute.get("/details/:todoId", TodoController.getTodoById);
todoRoute.get("/delete/:id", TodoController.delete);
todoRoute.post("/update/:id", TodoController.update);

module.exports = todoRoute;