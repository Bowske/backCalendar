const mongoose = require('mongoose');

const ZajeciaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  minute: {
    type: Number,
    required: true,
  },
  description: String,
  additionalInfo: String,
});

module.exports = mongoose.model('zajecia', ZajeciaSchema);
