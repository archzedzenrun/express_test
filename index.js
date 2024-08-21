const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<img src="https://img.freepik.com/premium-vector/cute-cat-wave-hands-cartoon-illustration_640223-6.jpg?w=740">')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})