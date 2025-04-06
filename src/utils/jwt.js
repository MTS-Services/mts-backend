const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';
const EXPIRATION_TIME = '1h'; // Example: 1 hour

// Function to generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
}

// Function to verify a JWT token
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

// Function to decode a JWT token without verifying
function decodeToken(token) {
  return jwt.decode(token);
}

module.exports = {
  generateToken,
  verifyToken,
  decodeToken,
};
