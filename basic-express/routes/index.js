const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

const todoRoutes = require("./todos");
const userRoutes = require("./users");
route.use("/todos", todoRoutes);
route.use("/users", userRoutes);

module.exports = route;
