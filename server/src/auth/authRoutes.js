const express = require("express")
const router = express.Router()
const Authentication = require("./authController")
const auth =new Authentication()
const Valid = require("./authValidations")
const valid = new Valid()
router.post("/login",valid.loginValid,auth.logIn)
router.get("/getProfile/:id",auth.getProfile)
router.post("/signup",auth.signUp)








module.exports=router