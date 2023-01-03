const mongoose  = require("mongoose")

exports.connectDB = async ()=>{
    try{
      await mongoose.connect('mongodb://localhost:27017/react',{
        useUnifiedTopology: true,
      useNewUrlParser: true,
      })
      console.log("SERVER CONNECTED SUCCESSFULLY");  
    }
    catch(err)
    {
        console.log("ERROR IN THE CONNECTION WItH DATABASE",err);
    }
}