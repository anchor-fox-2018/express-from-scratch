const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('I love Hactiv8'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))