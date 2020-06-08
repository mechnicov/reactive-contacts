const express = require('express')

const app = express()

app.get('/', (req, res) =>
  res.json({msg: 'Welcome to contacts keeper API'})
)

app.use('/api/v1/users', require('./routes/api/v1/users'))
app.use('/api/v1/auth', require('./routes/api/v1/auth'))
app.use('/api/v1/contacts', require('./routes/api/v1/contacts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
