const express = require("express");
const router = express.Router();

// Get home page
router.get('/', function (request, response) {
    response.send("I love hacktiv8");
});

module.exports = router;