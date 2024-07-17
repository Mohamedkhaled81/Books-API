// Store Controllers
const queries = require("../db/queries");
const dbConnection = require("../db/connection");

exports.getStoreList = async (req, res) => {
  try {
    const storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    const result = await dbConnection.dbQuery(storeListQuery);

    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
    return res
      .status(400)
      .send({ error: `Failed to return list of stores :(` });
  }
};

exports.createStore = async (req, res) => {
  try {
    // Getting params from the request
    const address = req.body.address;
    const name = req.body.name;

    // Validate inputs
    if (!address || !name) {
      return res.status(400).send({ error: "One or both fields are empty." });
    }

    // Group the parameters in a list
    const params = [name, address];

    // Getting the query
    const storeCreateQuery = queries.queryList.CREATE_STORE_QUERY;

    // Make a request to create data inside the db
    await dbConnection.dbQuery(storeCreateQuery, params);
    return res.status(201).send({ data: "Store is created in DB." });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).send({ error: "Failed to create a store." });
  }
};
