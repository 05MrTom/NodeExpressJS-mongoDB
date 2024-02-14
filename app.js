const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("task manager")
})

app.use('/api/v1/user',tasks)


const port = 3000
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(` Server is lisiting on port ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()