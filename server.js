const express = require("express");
const bodyParser = require("body-parser");
const { createTours, findTour, findPlan } = require("./helpers");

const app = express();
const port = 5000;

const tours = createTours();

app.use(bodyParser.json());

app.get("/tours", (req, res) => {
  res.json(tours);
});

app.get("/tours/:tourId", (req, res) => {
  const tourId = req.params.tourId;
  const tour = findTour(tourId);
  res.json(tour);
});

app.get("/tours/:tourId/:planId", (req, res) => {
  const tourId = req.params.tourId;
  const planId = req.params.planId;
  const tour = findTour(tourId);
  const plan = findPlan(tour, planId);
  res.json(plan);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
