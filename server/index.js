const express = require("express")
const { connection } = require("./config/db")
require("dotenv").config()
const port = process.env.PORT
const app = express()

app.use(express.json())

app.listen(port, async()=>{
    try{
        await connection
        console.log("Connected to database.")
        console.log(`Server is Running on port ${port}.`)
    }catch(err){
        console.log(err)
    }
})