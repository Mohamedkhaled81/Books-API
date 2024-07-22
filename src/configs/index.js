const dotenv = require("dotenv");
dotenv.config();

const configs = {
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_database: process.env.DB_DATABASE,
  server_port: process.env.PORT,
};

module.exports = { configs };
