const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello CHIKA!'))
app.listen(6000, () => console.log('Server is not ready'))
