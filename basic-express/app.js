const express = require ("express");
const app = express ();
const port = 1000;

const routes = require ("./routes");
app.use(routes);

app.listen(port, () => {
    console.log(`Example App listening on port ${port}`);
});
