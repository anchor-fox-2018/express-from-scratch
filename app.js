"use strict";

const express = require("express");
const indexRouter= require("./routes/index");
const studentRouter = require("./routes/student");
const PORT = 8888;

let webApp = express();

webApp.use('/', indexRouter);
webApp.use('/student', studentRouter);
webApp.listen(PORT, function() {
    console.log(`WebApp listen and runs on ${PORT}`)
});

