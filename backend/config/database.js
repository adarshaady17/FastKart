const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("mongoDB connected"))
    .catch((err)=>{console.log(err);})
}

module.exports=dbConnect