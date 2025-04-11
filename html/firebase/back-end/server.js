const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()

const app=express()
app.use(express.json())  

app.use(cors({origin:"*"}))

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

app.use('/api',require('./routes/productRouter'))
app.use('/user',require('./routes/userRouter'))

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
