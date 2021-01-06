require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(routes)

app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`)
})
