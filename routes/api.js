const db = require('../utils/db')
const router = require('express').Router()

router.post('/employee', async function (req, res) {
  const { first_name, last_name, role, manager } = req.body
  const result = await db.addEmployee(first_name, last_name, role, manager)
  console.log(result)
  res.status(200).redirect('/employee-add-success')
})

module.exports = router
