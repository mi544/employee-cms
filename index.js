require('dotenv').config()
const { Client } = require('pg')

const client = new Client()

client.connect()

client.query('SELECT * FROM employee_master', (err, res) => {
  if (err) console.log(err)
  console.table(res.rows)
  client.end()
})
