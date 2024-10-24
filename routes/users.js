const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://divyanshurajwar:vj9Mwd0gsKCvoY5o@test-pro.uocks.mongodb.net/?retryWrites=true&w=majority&appName=test-pro");


const userSchema = mongoose.Schema({
  name:String,
  last:String,
  age:Number,
  Campus:String
});



module.exports = mongoose.model("Student" ,userSchema);