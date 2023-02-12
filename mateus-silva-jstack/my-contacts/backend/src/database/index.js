const { Client } = require('pg');

const client = new Client({
  host: '0.0.0.0',
  port: 5432,
  user: 'mycontacts_user',
  password: 'mycontacts_pw',
  database: 'mycontacts_db'
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
