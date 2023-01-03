const jwt = require("jsonwebtoken")
const {message}= require("../helper/message")
const {status}= require("../helper/status")
const Helper = require("../helper/index")
const helpObj = new Helper()
const userModel = require("../model/user")
const verifyToken =async (req,res,next)=>{
    try{

        const token = req.headers["x-header"]
        if(!token){
            return helpObj.resObj(res,status.BAD_REQUEST,message.TOKEN_N_PROVIDED)
        }
        const tokenResponse = await jwt.verify(token,process.env.JWT_KEY)
        
        if(!tokenResponse)
        {
              return helpObj.resObj(res,status.BAD_REQUEST,message.INVALID_TOKEN)
        }
        const tokenId = tokenResponse._id
        const result = await userModel.findOne({_id:tokenId})
        
        if(!result){
            return helpObj.resObj(res,status.BAD_REQUEST,message.INVALID_TOKEN)
        }else{
            req.userDetail = result
            next()
        }
    }
    catch(err)
    {
        return helpObj.errorObj(res,status.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERR,err)
    }

}

module.exports= verifyToken