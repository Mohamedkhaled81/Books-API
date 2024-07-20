// SETUP: Server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const bookRoute = require("./routes/bookRoute");
const storeRoute = require("./routes/storeRoute");

// Creating instance of express
const app = express();

// Adding middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.use("/api/v1/stores", storeRoute);
//app.use("/api/v1/books", bookRoute);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Starting Server at http://localhost:${PORT}..`);
});
