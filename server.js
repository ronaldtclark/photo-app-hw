const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const PORT = 6000

require('./db/db')

app.use(session({
  secret: 'o38274y98u3',
  resave: false,
  saveUninitialized: false
}))

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: false}))

const photoController = require('./controllers/photoController')
const userController = require('./controllers/userController')

app.use('/photos', photoController)
app.use('/users', userController)

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(PORT, () => {
  console.log('app listening on port', PORT)
})
