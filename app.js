const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./src/routes/userRoutes');

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// User routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
