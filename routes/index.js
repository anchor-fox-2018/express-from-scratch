const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('I love hacktiv8')
});

module.exports = routes;