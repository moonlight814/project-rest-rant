require('dotenv').config()


const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('i love u david')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 Page </>')
})

app.listen(process.env.PORT, () =>{
    console.log('server running')
})
