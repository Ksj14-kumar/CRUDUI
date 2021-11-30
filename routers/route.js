// import express from 'express'
const express = require("express")
const path = require("path")
const Post= require("../modal/modal")









const router= express.Router()
const bodyParser= require("body-parser")
const app= express()
app.use(bodyParser.json())


app.set("view engine","ejs")







router.get("/",async (req,res)=>{
    try{

        const resultData=await Post.find()
        

    
    
    
    res.render("../views/pages/Home.ejs",{result:resultData,i:0})
    // res.end()
}
    catch(err){
        res.send({message:err})
    }
})


router.post("/",async(req,res)=>{
    console.log(req.body)
    try{
        const postData= await new Post({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    postData.save()

    res.redirect("/") 
    }

catch(err){
    res.send({message:err})
}


    
})


router.post("/delete/:id",async (req,res)=>{
    try{

        const data= await Post.findByIdAndDelete(req.params.id)
        res.redirect("/")

    }

    catch(err){
        res.json({message:err})
    }

})

var updateValueId
router.get("/edit/:id",(req,res)=>{
    updateValueId= req.params.id
    res.render("../views//partials/form.ejs",{update:"update"})
    

})

router.post("/update",async(req,res)=>{
    try{
        // console.log(req.body)
        // console.log(req.body)
        const data=await Post.findByIdAndUpdate({_id:updateValueId}, {$set:{name:req.body.name,email:req.body.email,age:req.body.age,}})
        res.redirect("/")
    }
    catch(err){
        res.send("error")
    }
})


// export default router;
module.exports = router

