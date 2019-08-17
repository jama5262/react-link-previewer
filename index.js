const express = require('express')
const dotenv = require('dotenv');

const scraperHandler = require('./app/scrapeWebPage');

dotenv.config();
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/preview', async (req, res) => {
  try {
    res.status(200).json(await scraperHandler.handler(req));
  } catch (e) {
    res.status(404).json("There was an error => " + e);
  }
})

app.listen((process.env.PORT), () => console.log(`App started`))