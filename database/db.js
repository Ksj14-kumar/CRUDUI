const mongoose= require("mongoose")




async function DatabaseConnection(URL){
    try{
        await mongoose.connect(URL,(err,db)=>{
            if(err){
                console.log("database not connected")
            }
            else{
                console.log("database connected")
            }
        })
    }
    catch(err){
        console.log({message:err})
    }

}


module.exports = DatabaseConnection