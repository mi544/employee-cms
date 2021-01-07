const db = require('../utils/db')
const router = require('express').Router()
const { fnErr, lnErr, rErr, mErr } = require('../utils/error-msgs')

router.post('/employee', async function (req, res) {
  const { first_name, last_name, role, manager } = req.body
  if (!first_name) return res.render('error', { message: fnErr, redirect: '/add' })
  if (!last_name) return res.render('error', { message: lnErr, redirect: '/add' })
  if (!role) return res.render('error', { message: rErr, redirect: '/add' })
  if (!manager) return res.render('error', { message: mErr, redirect: '/add' })
  const result = await db.addEmployee(first_name, last_name, role, manager)
  console.log(result)
  res.status(200).redirect('/employee-add-success')
})

module.exports = router
