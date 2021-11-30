

const mongoose= require("mongoose")
const Schema= new mongoose.Schema({
    name:{type:String,required:true, trim:true},
    email:{type:String,trim:true,required:true},
    age:{type:Number,required:true, trim:true},
    date:{type:Date, default:Date.now()}

})







module.exports= mongoose.model("coll1",Schema)
