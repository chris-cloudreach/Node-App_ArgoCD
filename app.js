const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello CHINEDU OGBUNUZOR!'))
app.listen(3000, () => console.log('Server ready'))
