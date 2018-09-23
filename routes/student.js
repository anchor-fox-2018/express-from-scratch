const express = require("express");
const router = express.Router();

router.get('/', function (request, response) {
    response.send("sekolah");
});

router.get('/student', function (request, response) {
    response.send("students");
});

router.post('/student', function (request, response) {
    request.read();
});

router.get('/teachers', function (request, response) {
    response.send("guru");
});

module.exports = router;