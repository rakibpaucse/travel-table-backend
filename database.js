const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'freedb.tech',
  user: 'freedbtech_Wahid',
  password: 'HpS4H@T7Lym@k87',
  database: 'freedbtech_lekhapora',
}

async function query(sql, params) {
  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}