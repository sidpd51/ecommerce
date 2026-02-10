const express = require('express')
const router = require('./router')
const app = express()

const PORT = 3001

app.use(express.json())
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port no: http://localhost:${PORT}`)
})


// http://localhost:3001/api/v1/users