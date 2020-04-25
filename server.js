const express = require('express')
const connectDB = require ('./config/db')

const app = express()
connectDB()

const PORT = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.send('API is running')})

// Init Middleware so that we can use req.body
app.use(express.json({ extended: false}))

//Define route
app.use('/api/users', require('./routes/api/users'))
app.use('/api/collections', require('./routes/api/collections'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))


app.listen(PORT, ()=>{
    console.log('Port is up and listening at ' + PORT)
})