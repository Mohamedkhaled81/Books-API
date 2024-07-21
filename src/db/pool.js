const { Pool } = require('pg');
const { configs } = require("../configs");

const db_config = {
  user: configs.db_user,
  password: configs.db_password,
  host: configs.db_host,
  port: configs.db_port,
  database: configs.db_database,
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 0,
  max: 20,
};

const pool = new Pool(db_config);

pool.on('connect', client => {
  console.log("Database is connected");
});

pool.on('remove', client => {
  console.log("Database connection is removed..");
});

pool.on('release', cleint => {
  console.log("connection is released..")
})

module.exports = pool;
