// Importing Modules
const { Router } = require("express");
const storeController = require("../controllers/storeController");
const { checkStoreId } = require("../middlewares/checkStoreId");

// router is a middleware
const router = Router();

// Route functions are just middle-wares
router
  .route("/")
  .get(storeController.getStoreList)
  .post(storeController.createStore);

// adding middleware to check on the existed id in the db..
router.param("storeId", checkStoreId);

router
  .route("/:storeId")
  .get(storeController.getCertainStore)
  .patch(storeController.updateStoreName);

module.exports = router;
