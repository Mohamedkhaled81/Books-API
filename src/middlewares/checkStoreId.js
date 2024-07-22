// Check ID Middleware

const { queryList } = require("../db/queries");
const pool = require("../db/pool");

exports.checkStoreId = async (req, res, next, value) => {
  const store_id = value;
  
  const check_query = queryList.GET_CERTAIN_STORE;
  const result = await pool.query(check_query, [store_id]);

  if (result.rowCount === 0) {
    return res.status(404).json({ Error: "Required Store Not Found :<" });
  }
  next();
};
