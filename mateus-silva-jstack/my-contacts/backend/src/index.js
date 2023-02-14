const express = require('express');
require('express-async-errors');

const routes = require('./routes');

// Set up server address
const PORT = 3000;
// const HOST = '0.0.0.0';

// Initialize app
const app = express();

// Body Parser Middleware
app.use(express.json());

// Routes Middleware
app.use(routes);

// Error Handler Middleware
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

// Listen to server on HOST:PORT
app.listen(PORT, () => {
  console.log('🔥 The Server running at http://localhost:3000');
});
