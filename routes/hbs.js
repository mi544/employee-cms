const db = require('../utils/db')
const router = require('express').Router()

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/all', async function (req, res) {
  const { data, columns } = await db.getAllASC()
  res.render('employees', { data, columns })
})

router.get('/add', async function (req, res) {
  const { data: roleData, columns: roleColumns } = await db.getRoles()
  const { data: managerData, columns: managerColumns } = await db.getManagers()
  res.render('add', {
    roles: [{ data: roleData, columns: roleColumns }],
    managers: [{ data: managerData, columns: managerColumns }]
  })
})

router.get('/employee-add-success', function (req, res) {
  res.render('employee-add-success')
})
module.exports = router
