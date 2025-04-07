const express = require('express');
const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/userController');

// ✅ User Routes
router
  .route('/') // Added /users prefix
  .get(getAllUsers) // Get all users
  .post(createUser); // Create a new user

module.exports = router;
