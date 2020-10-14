const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swietaRoute = require('./routes/swieta');

require('dotenv/config');

const mongoose = require('mongoose');
const port = 3000;

//midleware

app.use(bodyParser.json());
app.use('/swieta', swietaRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log('connected')
);

app.listen(port);
