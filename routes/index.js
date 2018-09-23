const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('I love Hactiv8'))

module.exports = router