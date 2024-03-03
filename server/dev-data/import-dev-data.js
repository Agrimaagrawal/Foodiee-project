
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('./../models/productModel');
require('dotenv').config()

// const connectDB = require('./db.js');

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri= "mongodb+srv://jerkinvestor:I24YViEakuXLl6Bz@cluster0.6vvalu6.mongodb.net/?retryWrites=true&w=majority";

// connectDB.connectDB();

const uri = `mongodb+srv://jerkinvestor:xlZeuPAVpjMCR7I8@cluster0.iv8h6cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(process.env.DATABASE_PASSWORD);
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

const products =JSON.parse(fs.readFileSync(`${__dirname}/fooditems.json`,'utf-8'));
console.log(products.length);

const importData = async () => {
	
	try{
	await Product.create(products);
	console.log('Success loading data');
	process.exit();
	}
	
	catch(err){
	console.log(err);
	}
};
//delete all data from collection
const deleteData = async() => {
	try{
	await Product.deleteMany();
	console.log('Sucess Deleted');
	process.exit();
	}
	catch(err){
	console.log(err);
	}
	
};
if(process.argv[2] === '--import'){
importData();
}
else if(process.argv[2] === '--delete'){
	deleteData();
}
console.log(process.argv);