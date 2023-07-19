class TodoController {
    static getTodos(req, res) {
      res.send("Todos Page");
    }
    static create(req, res) {
      res.send("Create Todo page");
    }
  }
  
  module.exports = TodoController;