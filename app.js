"use strict";

const express = require("express");

let webApp = express();
webApp.get('/', function (request, response) {
    response.send("I love hacktiv8");
});
webApp.listen(8888);

