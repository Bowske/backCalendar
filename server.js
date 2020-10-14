const express = require('express');
const app = express();

require('dotenv/config');

const mongoose = require('mongoose');
const port = 3000;

//midleware

const swietaRoute = require('./routes/swieta');

app.use('/swieta', swietaRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log('connected')
);

app.listen(port);
