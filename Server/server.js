require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { upload } = require('./Middlewares/Upload')
const _ = require('lodash')
const Verify = require('./Middlewares/Jwtverify')
const corsOptions = require('./Config/corsOptions')

app.use(express.json())


const port = process.env.PORT || 3000;


app.use(cors(corsOptions));


app.use('/auth', require('./Routes/authRouter'))


app.post('/upload',Verify ,upload.single('uploaded_file'), function (req, res) {

    res.status(200).json("File Uploaded")
//    res.sendFile(path.join(__dirname+`/Storage/${req.UNIQUESUFFIX}`))
  // console.log(req.UNIQUESUFFIX)
 });


 //This Is responsible for showing 404 not found pages that the user might have been navigated
 app.all('*',(req, res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'Public','404.html'))
    }else if(req.accepts('json')){
        res.json({message:'404 Not Found'})
    }else{
        res.type('txt').send('404 Not Found')
    }
})


 app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
 })