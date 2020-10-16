const { json } = require('body-parser');
const { response } = require('express');
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
  let end = new Date(2021, 1, 12, 4, 0, 0);

  let arrayToSend = [];

  async function setDates() {
    while (start < end) {
      if (start.getDay() === req.body.day) {
        let zajecie = new Zajecia({
          ...req.body,
          date: new Date(start.setUTCHours(req.body.hour, req.body.minute)),
        });

        arrayToSend.push(zajecie);

        await zajecie.save().then(() => {
          let copiedDate = new Date(start.getTime());
          if (new Date(copiedDate.setDate(start.getDate() + 7)) >= end) {
            res.json(arrayToSend);
          }
        });
      }

      start.setDate(start.getDate() + 1);
    }
  }
  setDatesS();
});
module.exports = router;
