// File: utils/jwt.js

// Require the jsonwebtoken module
const jwt = require('jsonwebtoken');

// Export a function to generate a JWT
module.exports = function generateToken(payload) {
  // Get the secret from the environment
  const secret = process.env.JWT_SECRET;

  // Return the generated JWT
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

// Export a function to verify a JWT
module.exports = function verifyToken(token) {
  // Get the secret from the environment
  const secret = process.env.JWT_SECRET;

  // Return the verification result
  return jwt.verify(token, secret);
};
