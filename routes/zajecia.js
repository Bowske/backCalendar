const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Zajecia = require('../models/Zajecia');

router.get('/', async (req, res) => {
  try {
    const zajecias = await Zajecia.find();
    res.json(zajecias);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', (req, res) => {
  let start = new Date(2020, 9, 19, 4, 0, 0);
  let end = new Date(2021, 2, 12);

  function whileLoop() {
    let arrayToSend = [];
    return new Promise((resolve) => {
      while (start <= end) {
        if (start.getDay() === req.body.day) {
          let zajecie = new Zajecia({
            title: req.body.title,
            description: req.body.description,
            additionalInfo: req.body.additionalInfo,
            hour: req.body.hour,
            minute: req.body.minute,
            day: req.body.day,
            date: new Date(start.setUTCHours(req.body.hour, req.body.minute)),
          });

          zajecie.save().then((data) => {
            arrayToSend.push(data);
            if (start.toLocaleDateString() === end.toLocaleDateString()) {
              resolve(arrayToSend);
              console.log(arrayToSend);
            }
          });
        }
        start.setDate(start.getDate() + 1);
      }
    });
  }
  whileLoop();
});
module.exports = router;
