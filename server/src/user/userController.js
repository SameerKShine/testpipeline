const userModel =require("../../model/user")
const Helper = require("../../helper/index")
const helpObj = new Helper();
const {status}= require("../../helper/status")
const {message}=require("../../helper/message")

  class User{
    signUp = async(req,res)=>{
      try{
       
        const userData = await userModel.findOne({email:req.body.email.trim()})
        if(userData){
         return helpObj.resObj(res,status.BAD_REQUEST,message.USER_EXISTS)
        }
       req.body.password = await helpObj.passwordhash(req.body.password)
         const userResult =await userModel.create(req.body)
         if(!userResult){
            return helpObj.resObj(res,status.NOT_FOUND,message.SOMETHING_WENT_WRONG)

         }
        
        console.log(userResult)
         return helpObj.resObj(res,status.ACCEPTED,message.USER_CREATED)
      }catch(err){
        return helpObj.resErr(res,status.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERRRRR,err.message)
      }

    }
  }
  module.exports= User;