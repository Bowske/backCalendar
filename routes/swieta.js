const express = require('express');
const router = express.Router();
const Swieta = require('../models/Swieta');

router.get('/', (req, res) => {
  Swieta.find().then((swieta) => res.json(swieta));
});

router.post('/', (req, res) => {
  const swieto = new Swieta({
    title: req.body.title,
    description: req.body.description,
  });

  swieto
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
module.exports = router;
