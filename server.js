const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!!')
})

app.get('/about', function (req, res) {
  res.send('About page')
})
const port=3004
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})