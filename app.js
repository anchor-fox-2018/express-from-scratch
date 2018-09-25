const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')
const routes = require('./routes')


app.listen(port, function(){
    console.log(`app running on localhost:${port}`);
})

app.use('/', routes)