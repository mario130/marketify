const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        min: 4
    },
    lastName:{
        type: String,
        required:true,
        min: 4
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min: 6
    },
    password:{
        type:String,
        required:true,
        min: 6,
        max: 1024
    },
    purchases:{
        type:Array
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);