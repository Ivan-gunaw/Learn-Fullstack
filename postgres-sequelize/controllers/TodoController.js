const { Todo } = require ("../models");

class TodoController {
    static getTodos (req,res){
        Todo.findAll()
        .then((todos) => {
            res.send(todos);
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static create (req,res){
        const { task,status } = req.body;
        Todo.create({ 
            task,
            status,
        })
        .then ((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });

    }

    static getTodoById (req,res){
        const id = +req.params.todoId;
        console.log(req.params);
        Todo.findByPk(id)
            .then((result) => {
                result
                ? res.send(result) 
                : res.send({
                    message: `Task ID ${id} not found.`
                });
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static delete (req,res){
        const id = Number(req.params.id);
        Todo.destroy({
            where: { id },
        })
            .then((result) => {
                result === 1
                ? res.send({
                    message: `Task ID ${id} has been deleted.`,
                })
                : res.send({
                    message: `Task has not been deleted.`,
                });
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static update (req,res){
    const id = Number(req.params.id);
    const { task, status } = req.body;
    Todo.update(
        {
            task,
            status,
        },
        {
            where: { id },
        }
    )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });

    }
}

module.exports = TodoController;