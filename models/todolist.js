const mongoose=require('mongoose')



const todolistSchema=mongoose.Schema({
    task:String,
    category:String,
    date:String
})




module.exports=mongoose.model('todolist',todolistSchema)