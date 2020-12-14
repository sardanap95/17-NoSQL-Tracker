const express = require("express");
const workoutRouter = express.Router();
const { workoutModel } = require("../db/db");

workoutRouter.post("/api/workouts", (req, res) => {
  console.group("Creating a new workout...");
  workoutModel
    .create({})
    .then((workout) => {
      console.groupEnd();
      res.json(workout);
    })
    .catch((err) => {
      console.log("Something went wrong while adding workout." + err);
      console.groupEnd();
      res.status(400).status({ status: "Something went wrong while adding workout." });
    });
});

workoutRouter.put("/api/workouts/:id", (req, res) => {
  const workoutInfo = req.body;
  console.group("Adding exercise...");

  workoutModel
    .updateOne({ _id: req.params.id }, { $push: { exercises: workoutInfo } })
    .then(({ nModified }) => {
      if (nModified === 1) {
        console.log("Added exercise successfully.");
        console.groupEnd();
        res.json({ status: "Added exercise successfully." });
      } else {
        throw "Something went wrong while adding exercise.";
      }
    })
    .catch((err) => {
      console.log("Something went wrong while adding exercise." + err);
      console.groupEnd();
      res.status(400).status({ status: "Something went wrong while adding exercise." });
    });
});

workoutRouter.get("/api/workouts", (req, res) => {
  console.group("Fetching workouts...");
  workoutModel
    .find({})
    .then((workouts) => {
      console.log("Sending " + workouts.length + " workouts.");
      console.groupEnd();
      res.send(workouts);
    })
    .catch((err) => {
      console.log("Something went wrong while fetching workouts.");
      console.groupEnd();
      res.status(400).status({ status: "Something went wrong while fetching workouts." });
    });
});

workoutRouter.get("/api/workouts/range", (req, res) => {
  console.group("Fetching workout ranges...");
  workoutModel
    .find({})
    .limit(7)
    .then((workouts) => {
      console.log("Sending " + workouts.length + " workout ranges.");
      console.groupEnd();
      res.json(workouts);
    })
    .catch((err) => {
      console.log("Something went wrong while fetching workout range.");
      console.groupEnd();
      res.status(400).status({ status: "Something went wrong while fetching workout range." });
    });
});

module.exports = workoutRouter;
