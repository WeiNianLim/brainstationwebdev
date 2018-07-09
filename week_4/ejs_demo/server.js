const express = require('express')
const app = express()
const port = process.argv[2] || 8080

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data ={
        msg : "hello world!"
    }
    res.render('index', data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
