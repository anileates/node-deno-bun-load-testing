const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3002, () => {
    console.log('Node server is up on port 3002.')
})