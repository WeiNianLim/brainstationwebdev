const express = require('express')
const app = express()
const router = require('./routes')
const logger = require('./middleware/express-logger')

app.set('view engine', 'ejs')

app.use(logger)
app.use('/', router)


app.listen(8081, () =>{
    console.log("http://localhost:8081")
})


