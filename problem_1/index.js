const express = require('express')
const app = express()

app.use(express.urlencoded())
app.set('view engine', 'ejs')

var home = require('./routes/calculator')

app.use('/', home)

app.listen(3000, () => {
    console.log('app start')
})