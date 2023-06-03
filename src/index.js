
// import { engine } from 'express-handlebars'

const {engine} = require('express-handlebars')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// Template engine
app.engine('.hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname , 'resources\\views'))

console.log(path.join(__dirname,'resources\\views'))

// HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home')
})


app.get('/news', (req,res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at "http://localhost:${port}"`)
})