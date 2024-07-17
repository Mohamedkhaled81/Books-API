const pool = require("./pool");

// promisify
exports.dbQuery = (queryText, queryParams) => {
  return new Promise((resolve, reject) => {
    pool
      .query(queryText, queryParams)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
