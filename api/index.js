const express = require('express')

process.on('SIGINT', () => {
  process.exit()
})

const app = new express()
const port = process.env.PORT || 3000

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK')
})

app.get('/', (req, res) => {
  const timeToProcess = Math.round(Math.random() * 1000)
  setTimeout(() => {
    res.status(200).send(`Hello World. Processed in ${timeToProcess}ms`)
  }, timeToProcess)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
