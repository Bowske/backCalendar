const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const zajeciaRoute = require('./routes/zajecia');
app.use(cors());

require('dotenv/config');

const mongoose = require('mongoose');
const port = 3001;

//midleware

app.use(bodyParser.json());
app.use('/zajecia', zajeciaRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log('connected')
);

app.listen(port);
