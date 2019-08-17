const express = require('express')
const dotenv = require('dotenv');

const scraperHandler = require('./app/scrapeWebPage');

dotenv.config();
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/preview', async (req, res) => {
  try {
    const result = await scraperHandler.handler(req);
    res.status(200).json({
      data: {
        status: 200,
        result
      }
    });
  } catch ({ status, message }) {
    res.status(status).json({
      error: {
        status: status,
        message: message
      }
    });
  }
})

app.listen((process.env.PORT), () => console.log(`App started`))