const pgp = require('pg-promise')();

const credentials = {
  user: 'ubuntu',
  host: 'ec2-54-167-20-92.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432
};

const db = pgp(credentials);
module.exports = db;