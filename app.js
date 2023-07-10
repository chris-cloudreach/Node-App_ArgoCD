const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello chrisjr2!'))
app.listen(3000, () => console.log('Server YES ready'))
