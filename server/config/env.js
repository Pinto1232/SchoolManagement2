// File: config/env.js

// Load the dotenv library
require("dotenv").config();

// Define the environment variables
const env = {
  PORT: process.env.PORT || 5000, // Port for the server to listen on
  JWT_SECRET: process.env.JWT_SECRET || "secret", // Secret for JWT authentication
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/test" // URI for MongoDB database
};

// Export the environment variables
module.exports = env;
