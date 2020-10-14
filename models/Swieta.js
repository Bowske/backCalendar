const mongoose = require('mongoose');

const SwietaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: String,
});

module.exports = mongoose.model('Swieta', SwietaSchema);
