// Store Controllers
const queries = require("../db/queries");
const dbConnection = require("../db/connection");

// Get all stores
exports.getStoreList = async (req, res) => {
  try {
    const storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    const result = await dbConnection.dbQuery(storeListQuery);
    return res.status(200).json(result.rows);
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Failed to return list of stores :<` });
  }
};

// Get certain store by id
exports.getCertainStore = async (req, res) => {
  try {
    const store_id = req.params.storeId;
    const singleStoreQuery = queries.queryList.GET_CERTIAN_STORE;
    const result = await dbConnection.dbQuery(singleStoreQuery, [store_id]);

    if (result.rows.length === 1) {
      return res.status(200).json(result.rows[0]);
    }
    return res.status(404).json({ error: `Store Not Found` });
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Failed to return a specific store :<` });
  }
};

// Create Store in the DB
exports.createStore = async (req, res) => {
  try {
    const address = req.body.address;
    const name = req.body.name;

    if (!address || !name) {
      return res.status(400).json({ error: "One or both fields are empty." });
    }

    const storeCreateQuery = queries.queryList.CREATE_STORE_QUERY;

    await dbConnection.dbQuery(storeCreateQuery, [name, address]);

    return res.status(201).json({ data: "Store is created in DB." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create a store." });
  }
};

// Update Store Name
exports.updateStoreName = async (req, res) => {
  try {
    const newName = req.body.name;
    const storeId = req.params.storeId;

    const checkStoreExisted = queries.queryList.GET_CERTIAN_STORE;
    const result = await dbConnection.dbQuery(checkStoreExisted, [storeId]);

    console.log(result.rows[0]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Store Not Found :<` });
    }

    if (!newName) {
      return res.status(400).json({ error: `New Name must be provided :<` });
    }

    const updateQuery = queries.queryList.UPDATE_STORE_NAME;
    await dbConnection.dbQuery(updateQuery, [newName, storeId]);
    return res
      .status(200)
      .json({ message: `Store's Name is Updated` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to update a store." });
  }
};
