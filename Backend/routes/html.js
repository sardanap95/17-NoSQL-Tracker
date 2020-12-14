var express = require("express");
const path = require("path");
const htmlRouter = express.Router();

htmlRouter.get("/", (req, res) => {
  console.log("Sending index");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../../Frontend/index.html"));
});

htmlRouter.get("/exercise", (req, res) => {
  console.log("Sending exercise");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../../Frontend/exercise.html"));
});

htmlRouter.get("/stats", (req, res) => {
  console.log("Sending stats");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../../Frontend/stats.html"));
});

module.exports = htmlRouter;
