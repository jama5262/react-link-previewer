const express = require('express')
const dotenv = require('dotenv');

const scraperHandler = require('./app/scrapeWebPage');

dotenv.config();
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/preview', (req, res) => {
  res.send(scraperHandler.handler());
})

app.listen((process.env.PORT), () => console.log(`App started`))