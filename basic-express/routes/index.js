const route = require ("express").Router();

route.get("/", (req,res) => {
    res.send("Hello World!!");
});

const todoRoutes = require ("./todos");
todoRoutes.use("/todos", todoRoutes);

const userRoutes = require ("./users");
userRoutes.use("/users", userRoutes);

module.exports = route;
