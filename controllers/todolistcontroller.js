const Todolist=require('../models/todolist')


exports.tododata=(req,res)=>{
    const {task,category,date}=req.body
    const record=new Todolist({task:task,category:category,date:date})
    record.save()
    res.redirect('/')
}


exports.tododatashow=async(req,res)=>{
    const record= await Todolist.find()
    res.render('index.ejs',{record})
}

exports.tododatadelete=async(req,res)=>{
    const id=req.params.id
    await Todolist.findByIdAndDelete(id)
    res.redirect('/')
}

exports.edittodolistdata=async(req,res)=>{
    const id=req.params.id
    const data= await Todolist.findById(id)
    const record= await Todolist.find()
    // console.log(recordid.task)
    res.render('editupdate.ejs',{data,record})
}

exports.editdataupdate=async(req,res)=>{
    const id=req.params.id
    const {task,category,date}=req.body
    await Todolist.findByIdAndUpdate(id,{task:task,category:category,date:date})
    res.redirect('/')
}