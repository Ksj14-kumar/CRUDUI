// import express from 'express'
const express = require("express")
require("dotenv/config")

const router= require("./routers/route")
const db= require("./database/db")
db(process.env.URL||'mongodb://127.0.0.1:27017/test14')
const pug= require("pug")
const bodyParser= require("body-parser")




const app = express()
app.use(bodyParser.urlencoded({extended:false}))
const  port = process.env.PORT||1500
app.use("/",router)








app.listen(port, (err)=>{
    if(err) {
        throw err
    }

    else{
        console.log(`the server is start at port ${port}`)
    }
})
















