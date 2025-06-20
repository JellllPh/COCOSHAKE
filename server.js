const express = require('express');
const cors = require ('cors');
const app = express();
const PORT = 3000

app.use(cors());
app.use(express.static('public'))

app.use(express.json())

app.use('/api/messages', require('./messageRoutes'))
// http://localhost:3000/api/messages

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})


