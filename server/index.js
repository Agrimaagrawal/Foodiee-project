const express = require('express');
const app = express();
require('dotenv').config()
const ProductRouter = require('./routes/productRoutes')
const mongoose = require('mongoose');
const uri = `mongodb+srv://jerkinvestor:${process.env.DATABASE_PASSWORD}@cluster0.iv8h6cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(err){
    console.log(err);
  }
}
run()
app.get('/products', ProductRouter);
app.get("/",(req,res) => {
    res.status(200).json({
        success:true,
        message:"Welcome to the backend of Foodie App This place makes it work"
    })
})
const port = process.env.PORT||3000;
app.listen(port,()=>{console.log(`server on port ${port}`)});