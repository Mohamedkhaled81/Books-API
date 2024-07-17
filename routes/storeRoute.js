// Importing Modules
const express = require("express");
const storeController = require("../controllers/storeController");

// Get instance of the router
const router = express.Router();

router.get("/", storeController.getStoreList);
router.post("/", storeController.createStore);

module.exports = router;