const user = require("./user")
const mongoose  =require("mongoose");
(()=>{
    mongoose.connect('mongodb://localhost:27017/react', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }).then(async db =>{
          await user(),
           await db.disconnect()
           console.log("--seeder completed")
      })
})
()