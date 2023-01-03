const Helper = require("../../helper/index")
const helpObj = new Helper()
const userModel = require("../../model/user")
const { status } = require("../../helper/status")
const { message } = require("../../helper/message")
class Authentication {
   logIn = async (req, res) => {
      console.log("hello")
      try {
         const { email, password } = req.body
         console.log(email, password)
         const userResult = await userModel.findOne({ email: email })
         console.log(userResult)
         if (!userResult) {
            return helpObj.resObj(res, status.BAD_REQUEST, message.USER_NOT_FOUND)
         }
         console.log("user")
         const passwordCompare = await helpObj.comparePassword( userResult.password,password)
         if (!passwordCompare) {
            return helpObj.resObj(res, status.BAD_REQUEST, message.PASSWORD_WRONG)
         }
         console.log("pass")
         let token = helpObj.createToken({ email: email }, process.env.JWT_KEY,
            process.env.EXPIRE_TIME)
         // console.log("token:--- ", token)
         console.log("shdgh")
         return helpObj.resObj(res, status.ACCEPTED, message.LOGIN_SUCCESS, userResult, token)
      }
      catch (err) {
         return helpObj.resErr(res, status.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERRRRR, err.message)
      }
   }

   getProfile = async (req, res) => {
      try {

         const id = req.params.id



         const tokenResponse = await helpObj.verifyToken(id, process.env.JWT_KEY)
         if (!tokenResponse) {
            return helpObj.resObj(res, status.FORBIDDEN, message.INVALID_TOKEN)
         }
         console.log("user===", tokenResponse)
         const email = tokenResponse.email
         console.log(email)
         const data = await userModel.findOne({ email: email })
         console.log(data)
         if (!data) {
            return helpObj.resObj(res, status.NOT_FOUND, message.USER_NOT_FOUND)
         }
         return helpObj.resObj(res, status.OK, message.LOGIN_SUCCESS, data)
      }
      catch (err) {
         return helpObj.resErr(res, status.BAD_REQUEST, message.INTERNAL_SERVER_ERRRRR, err.message)
      }
   }

   signUp = async (req, res) => {
      const {firstName,lastName,email,password} = req.body
      const hash= await helpObj.passwordhash(password)
      const data = await userModel.create({
                     firstName:firstName,
                     lastName:lastName,
                     email:email,
                     password:hash
      })
      if (!data) {
         return helpObj.resObj(res, status.BAD_REQUEST, message.SOMETHING_WENT_WRONG)
      }
      return helpObj.resObj(res, status.OK, message.USER_CREATED)
   }
}

module.exports = Authentication