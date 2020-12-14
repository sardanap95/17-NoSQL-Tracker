const express = require("express");
const path = require("path");

const app = express();
const htmlRouter = require("./routes/html");
const workoutRouter = require("./routes/workout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Frontend")));

app.use(htmlRouter);
app.use(workoutRouter);

const port = process.env.PORT || 9090;

//Serving the static files.

app.listen(port, () => {
  console.log("Workout server running on port http://localhost:" + port);
});
