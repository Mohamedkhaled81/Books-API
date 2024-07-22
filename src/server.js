// SETUP: Server => Importing packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const storeRoute = require("./routes/storeRoute");
const { configs } = require("./configs");
const morgan = require("morgan");


// Creating instance of express
const app = express();

// Adding middlewares
app.use(cors());

// adding the request body to the request object
app.use(bodyParser.json());

// this function will return a middleware..
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.use("/api/v1/stores", storeRoute);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

// Starting the server
const PORT = configs.server_port || 3000;
app.listen(PORT, () => {
  console.log(`Starting Server at http://localhost:${PORT}..`);
});
