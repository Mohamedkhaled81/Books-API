// SETUP: Server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const storeRoute = require("./routes/storeRoute");
const {configs} = require("./configs");
const { loggingMiddleware } = require("./middlewares/logger");

// Creating instance of express
const app = express();

// Adding middlewares
app.use(cors());

// adding the request body to the request object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// adding custom middleware applied on all requests 
app.use(loggingMiddleware);

// adding a new attribute in req
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
})

// Routing
app.use("/api/v1/stores", storeRoute);


// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Starting the server
const PORT = configs.server_port || 3000;
app.listen(PORT, () => {
  console.log(`Starting Server at http://localhost:${PORT}..`);
});
