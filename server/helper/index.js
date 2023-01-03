const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class Helper{
     //for sending common response
  resObj=(res,status,message,data,token)=>{
   return res.status(status).send({
    message:message,
    data:data,
    token:token
  })
  }
 // for sending common error response
 resErr=(res,status,message,err)=>{
    return res.status(status).send({
        message:message,
        err:err
    })
 }

 // for  password hashing
 passwordhash=async(data)=>{
   const salt = bcrypt.genSaltSync(10);
   return  bcrypt.hashSync(data, salt);
 }

 //for hashed password comparing
comparePassword =async (oldPassword,newPassword)=>{
   return bcrypt.compareSync(newPassword, oldPassword);
}
//for generating token
createToken =(data,securityKey,expireTime)=>{
   return(jwt.sign(data,securityKey,{expiresIn:expireTime}))
}
//for verifying the token
verifyToken = (token,secretKey)=>{
   return jwt.verify(token,secretKey,function(err,result){
     if(err){
         console.log("jwt token error :-","",err)
       }else{
         return result
       }
   })

}
}


module.exports =Helper