const express = require("express");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: {
    type : String , 
    required : true , 
  } , 
  email: {
    type : String , 
    required : true , 
  } , 
  password: {
    type : String , 
    required : true,
  } , 
  role : {
    type : String,
    default : 'visitor'
  }
});


const EmployeeModel = mongoose.model("employees", employeeSchema);

module.exports = EmployeeModel;
  