"use strict";

const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const studentRouter = require("./routes/student");
const PORT = 8888;

let webApp = express();

//view engine here
webApp.set("views", path.join(__dirname, "views"));
webApp.set("view engine", "ejs");
webApp.use('/', indexRouter);
webApp.use('/student', studentRouter);
webApp.listen(PORT, function () {
    console.log(`WebApp listen and runs on ${PORT}`)
});

