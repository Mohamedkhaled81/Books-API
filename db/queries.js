exports.queryList = {
    GET_STORE_LIST_QUERY: `SELECT store_id, store_name FROM Store;`,
    CREATE_STORE_QUERY: `INSERT INTO Store (store_name, address) VALUES ($1, $2);`
}