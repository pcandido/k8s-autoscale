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
  const start = new Date().getTime()
  for(let i = 0; i< 500000000; i++){} // simulate load
  const end = new Date().getTime()

  res.status(200).send(`Hello World. Processed in ${end - start}ms`)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
