const express = require("express")
const router = express.Router()
const User = require("./userController")
const user  = new User()

router.post("/signup",user.signUp)

module.exports =router;