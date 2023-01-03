const userModel = require("../../model/user")
const Helper = require("../../helper/index")
const helpObj = new Helper()

const userSeeder =async ()=>{
    const hash = await helpObj.passwordhash("admin@123")
// const result = await roleModel.findOne({
//     name:"Admin"
// })
const userData = [{
    email:"admin@admin.com",
    password:"admin@123",
    firstName : "admin",
    lastName : "test",
    // roleId:result?.id,
    password:hash
}]
return userModel.create(userData)

}

module.exports = userSeeder