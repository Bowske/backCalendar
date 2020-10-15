const express = require('express');
const router = express.Router();
const Zajecia = require('../models/Zajecia');

router.get('/', (req, res) => {
  zajecia.find().then((zajecia) => res.json(zajecia));
});

router.post('/', (req, res) => {
  let start = new Date(2020, 9, 19, 4, 0, 0);
  let end = new Date(2021, 5, 23);

  console.log(req.body.day);
  while (start <= end) {
    if (start.getDay() === req.body.day) {
      let cwiczenia = new Date(
        start.setUTCHours(req.body.hour, req.body.minute)
      );
      console.log(cwiczenia.toISOString());
    }
    start.setDate(start.getDate() + 1);
  }

  const zajecie = new Zajecia({
    title: req.body.title,
    description: req.body.description,
    additionalInfo: req.body.additionalInfo,
    hour: req.body.hour,
    minute: req.body.minute,
    day: req.body.day,
  });

  zajecie
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
module.exports = router;
