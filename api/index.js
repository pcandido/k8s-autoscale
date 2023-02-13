const express = require('express')

process.on('SIGINT', () => {
  process.exit()
})

const app = new express()
const port = process.env.PORT || 3000
const maxProcessingTime = process.env.MAX_TIME || 1000

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK')
})

app.get('/', (req, res) => {
  const timeToProcess = Math.round(Math.random() * maxProcessingTime)
  setTimeout(() => {
    res.status(200).send(`Hello World. Processed in ${timeToProcess}ms`)
  }, timeToProcess)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
