const router = require('express').Router()
const db = require('../utils/db')

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/all', async function (req, res) {
  const { data, columns } = await db.getAllASC()
  res.render('employees', { data, columns })
})

module.exports = router
