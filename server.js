const express=require('express')
const app=express()
const router=require('./routers/mainrouter')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/todo')



app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(router)
app.set('view engine','ejs')
app.listen(5000)