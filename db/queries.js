exports.queryList = {
    GET_STORE_LIST_QUERY: `SELECT store_id, store_name FROM Store;`,
    CREATE_STORE_QUERY: `INSERT INTO Store (store_name, address) VALUES ($1, $2);`,
    GET_CERTIAN_STORE: `SELECT store_id, store_name FROM Store WHERE store_id = ($1);`,
    UPDATE_STORE_NAME: `UPDATE Store SET store_name = ($1) WHERE store_id = ($2);`
}