const express = require('express')
const app = express()

// THIS IS A COMMENT

app.get('/', (req, res) => res.send('Hello Argo CD!'))
app.listen(3000, () => console.log('Server ready'))
