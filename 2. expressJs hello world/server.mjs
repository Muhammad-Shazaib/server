
console.log("this is express server hello world");

import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Hello World!', new Date())
  res.send('Hello World!'+ new Date())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.get('/profile', (req, res) => {
  console.log('This is profile', new Date())
  res.send('This is profile' + new Date())
})