const mongoose = require("mongoose")
const {Schema} = mongoose
const userSchema = new Schema ({
    email:{
        type:String,
        unique:true,
        required:true
    },
  password:{
    type:String,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  ProfilePath:{
    type:String,
    
  }

},{ timestamps: true })

let userModel = mongoose.model("user", userSchema)
module.exports= userModel