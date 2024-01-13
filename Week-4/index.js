const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Create a rate limiter with a maximum of 5 requests per minute
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
});

// Apply the rate limiter middleware to all routes
app.use(limiter);

// Your API routes go here
app.get('/applied', (req, res) => {
  res.send('Hello, throttled world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
