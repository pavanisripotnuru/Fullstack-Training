const Pool = require('pg').Pool
const getConnection = new Pool({
  user: 'pavani',
  host: 'localhost',
  database: 'restapi',
  password: 'password',
  port: 5432,
})

module.exports={
    getConnection
}