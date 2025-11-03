const express = require('express');
const router = express.Router();
const Book = require('./bookSchema');

async function updateFines() {
  const today = new Date();
  const books = await Book.find();

  for (const book of books) {
    const updatedBorrowers = book.borrowedBy.map(user => {
      if (user.lastDayToReturn && today > user.lastDayToReturn) {
        const daysLate = Math.floor((today - user.lastDayToReturn) / (1000 * 60 * 60 * 24));
        user.totalFine = daysLate * 10;
      } else {
        user.totalFine = 0;
      }
      return user;
    });

    await Book.updateOne(
      { _id: book._id },
      { $set: { borrowedBy: updatedBorrowers } }
    );
  }
}

router.put('/update-fines', async (req, res) => {
  try {
    await updateFines();
    res.status(200).json({ message: 'Fines updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating fines', details: error.message });
  }
});

module.exports = router;
