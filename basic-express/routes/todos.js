const todoRoute = require ("express").Router();
const todoController = require ("../controllers/todoController");

todoRoute.get("/", todoController.getTodos);
todoRoute.get("/create", todoController.create);

module.exports = todoRoute;