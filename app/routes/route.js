const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const scraperHandler = require('../../app/scrapeWebPage');

dotenv.config();
const app = express()
app.use(cors())
// app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send('Hello World!')
})

app.post('/preview', async (req, res) => {
  try {
    const result = await scraperHandler.handler(req)
    return res.status(200).json({
      data: {
        status: 200,
        result
      }
    });
  } catch ({ status, message }) {
    return res.status(status).json({
      error: {
        status: status,
        message: message
      }
    });
  }
})

app.use((req, res, next) => {  
  return res.status(404).send({
    error: {
      status: 404,
      message: "Looks like you are lost"
    }
  })
})

module.exports = app