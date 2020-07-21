const express = require('express')
const path = require('path')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json({ extended: false }))

app.use('/api/v1/users', require('./routes/api/v1/users'))
app.use('/api/v1/auth', require('./routes/api/v1/auth'))
app.use('/api/v1/contacts', require('./routes/api/v1/contacts'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
