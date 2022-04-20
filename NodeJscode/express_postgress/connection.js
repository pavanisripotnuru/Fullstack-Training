const Pool = require('pg').Pool
require('dotenv').config();

const getConnection = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
})

module.exports={
    getConnection
}