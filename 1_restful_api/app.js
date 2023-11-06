//Before u do anything creat models,routes folder in root folder(where package.json is present)

//models/Items.js
//routes/items.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your-mongodb-url' with your MongoDB URL)
mongoose.connect('mongodb://127.0.0.1:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.use(express.json());

// Define routes for CRUD operations here
const itemRoutes = require('./routes/items'); // Import your API routes

// Use the API routes
app.use('/api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});