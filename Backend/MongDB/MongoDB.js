import express from "express";
//import mongoose from 'mongoose'
import { MongoClient } from "mongodb";
import dotev from "dotenv";
import mongoose, { mongo } from "mongoose";
dotev.config();

const url = "mongodb://localhost:27017/Portfolio";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed: ", err);
    throw err;
  }
};
/*
 const MongoDB = mongoose.connect(`${url}/Portfolio`,  { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('its connect to Database Now')
}).catch((err)=>{
    console.log(err)
})*/

export default connectDB;
