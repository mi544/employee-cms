require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

const hbs = exphbs.create({
  helpers: {
    isId(column) {
      return column === 'id'
    },
    print(context) {
      console.log(context, '\n\n\n')
      return 'printed'
    }
  },
  defaultLayout: 'main',
  extname: '.hbs'
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.use(routes)

app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`)
})
