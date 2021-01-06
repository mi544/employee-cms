const router = require('express').Router()

const client = require('../utils/db/client')

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/all', async function (req, res) {
  const result = await client.query(
    'SELECT * FROM employee_main ORDER BY "Full Name" ASC'
  )
  const data = result.rows
  const columns = Object.keys(result.rows[0])
  console.log(data)

  res.render('employees', { columns, data })
})

module.exports = router
