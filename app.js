const express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Hi, how are thou?')
});

//starting the server
app.listen(8000)