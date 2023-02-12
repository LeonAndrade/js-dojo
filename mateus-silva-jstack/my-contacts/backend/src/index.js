const express = require('express');

const routes = require('./routes');

// Set up server address
const PORT = 3000;
// const HOST = '0.0.0.0';

// Initialize app
const app = express();
app.use(express.json());
app.use(routes);

// Listen to server on HOST:PORT
app.listen(PORT, () => {
  console.log('🔥 The Server running at http://localhost:3000');
});
