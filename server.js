const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb')

dotenv.config();
connectDb();

const app = express()


//creating middlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("<h1>Hello From Server</h1>")
})

const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.yellow.bold)
})