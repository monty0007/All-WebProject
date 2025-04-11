const express = require('express')
const app=express();
const mongoose=require('mongoose')
require('dotenv').config()
const cookieParser=require('cookie-parser')
const fileUpload = require('express-fileupload')
const PORT=process.env.PORT || 5000;
const cors=require('cors')

//Cors middleware
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser())

app.use(fileUpload({
    useTempFiles:true
}))

app.get('/',(req,res)=>{
    res.json({msg:"This is an Example"})
})

app.listen(PORT,()=>{
    console.log("Server is running....");
})

//Router
app.use('/user',require('./routes/useRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/productRouter'))
app.use('/api',require('./routes/upload'))

//connect MONGODB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI).then(()=>{
    console.log("MongoDb Connected");
}).catch(err => {
    console.log(err);
})