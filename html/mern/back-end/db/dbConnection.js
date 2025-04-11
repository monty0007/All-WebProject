const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log('Connected to MongoDb');
  } 
  catch (error) {
    console.log(error);
  }
};

module.exports=connectDb;