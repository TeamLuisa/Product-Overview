const pgp = require('pg-promise')();

const credentials = {
  user: 'postgres',
  host: 'localhost',
  database: 'product_overview',
  password: '',
  port: 5432
};

const db = pgp(credentials);
module.exports = db;

