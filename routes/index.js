const express = require("express");
const router = express.Router();

// Get home page
router.get('/', function (request, response) {
    response.render("index", {title: "Hello not so express"});
});

module.exports = router;