const express = require("express");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", employeeSchema);

module.exports = EmployeeModel;
