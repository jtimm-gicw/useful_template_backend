'use strict';

/*
========================================================
START SERVER
========================================================
*/

// Import the Express app from server.js
const app = require('./server');

// Choose a port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
