const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./route');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/karabi', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
