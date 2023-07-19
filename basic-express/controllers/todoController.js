class todoController {
    static getTodos (req,res) {
        res.send("Todos Page");
    }

    static create (req,res) {
        res.send("Create Todo Page");
    }
}

module.exports = todoController;