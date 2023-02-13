const { Client } = require('pg');

const {
  DB_HOST, DB_USER, DB_PORT, DB_DATABASE, DB_PASSWORD
} = process.env;

const client = new Client({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
