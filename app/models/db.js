const mysql = require('mysql2/promise');
const config = require('../config/db-config');
const pool = mysql.createPool(config.db);

mysql.query = async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);

  return rows;
}

module.exports = mysql;
//module.exports = {
//  query
//}