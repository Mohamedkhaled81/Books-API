// Store Controllers
const queries = require("../db/queries");
const pool = require("../db/pool");

// Get all stores
exports.getStoreList = async (req, res) => {
  try {
    const storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    const result = await pool.query(storeListQuery);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching store list:", err);
    return res
      .status(500)
      .json({ error: `Failed to return list of stores :<` });
  }
};

// Get certain store by id
exports.getCertainStore = async (req, res) => {
  try {
    const store_id = req.params.storeId;
    const singleStoreQuery = queries.queryList.GET_CERTAIN_STORE;

    const result = await pool.query(singleStoreQuery, [store_id]);

    return res.status(200).json(result.rows[0]);
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
    await pool.query(storeCreateQuery, [name, address]);

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

    if (!newName) {
      return res.status(400).json({ error: `New Name must be provided :<` });
    }

    const updateQuery = queries.queryList.UPDATE_STORE_NAME;
    await pool.query(updateQuery, [newName, storeId]);
    
    return res.status(200).json({ message: `Store's Name is Updated` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to update a store." });
  }
};
