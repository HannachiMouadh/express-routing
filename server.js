const express = require('express')
const app = express()
const path = require('path')



app.use(express.static(path.join(__dirname, 'public')))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))


app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/services',(req,res)=>{
    res.sendFile(__dirname + '/public/services.html')
})


app.listen(5000,(err) =>{
    if(err){
        throw err
    }else{
        console.log("server is running...");
    }
})