const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: [String],
  totalCopies: Number,
  availableCopies: Number,
  borrowedBy: [
    {
      name: String,
      lastDayToReturn: Date,
      totalFine: {
        type: Number,
        default: 0
      }
    }
  ],
  lastUpdatedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);
