const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/preview', (req, res) => {

})

app.listen((process.env.PORT), () => console.log(`App started`))