import express from 'express';
import mongoose from 'mongoose';

const EmployeeShema = new mongoose.Schema({
    First_name: String,
    Last_name: String,
    Email:{type: String , required:true , unique: true},
    Password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeShema);

export default EmployeeModel;