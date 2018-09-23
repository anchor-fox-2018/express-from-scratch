"use strict";

const express = require("express");
const indexRouter= require("./routes/index");
const PORT = 8888;

let webApp = express();

webApp.use('/', indexRouter);
webApp.listen(PORT, function() {
    console.log(`WebApp listen and runs on ${PORT}`)
});

