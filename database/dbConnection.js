const pgp = require('pg-promise')();

const credentials = {
  user: 'ubuntu',
  host: 'localhost',
  database: 'product_overview',
  password: 'password',
  port: 5432
};

const db = pgp(credentials);
module.exports = db;

