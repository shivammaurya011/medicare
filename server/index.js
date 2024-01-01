const express = require("express")

const app = express()

app.use(express.json())

app.listen(3030, ()=>{
    try{
        console.log("Server is Running on Port 3030")
    }catch(err){
        console.log(err)
    }
})