// Importing Modules
const { Router } = require("express");
const storeController = require("../controllers/storeController");

// Get instance of the router
const router = Router();

// Route functions are just middle-wares
router.route("/")
    .get(storeController.getStoreList)
    .post(storeController.createStore);

router.route("/:storeId")
    .get(storeController.getCertainStore)
    .patch(storeController.updateStoreName);


module.exports = router;
