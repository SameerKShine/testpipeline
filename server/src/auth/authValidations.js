const Helper = require("../../helper/index")
const helpObj =new Helper()
const {status} = require("../../helper/status")
const {message}= require("../../helper/message")
class Valid{
    loginValid=(req,res,next)=>{
      const {email,password}=req.body;
      

      if(!email){
         return helpObj.resObj(res,status.BAD_REQUEST,message.EMAIL_EMPTY)
      }
      if(!password){
        return helpObj.resObj(res,status.BAD_REQUEST,message.PASSWORD_EMPTY)
     }
     next()
    }
}
module.exports = Valid