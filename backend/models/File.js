const mongoose=require("mongoose");

const FileSchema =new mongoose.Schema({

    imagePath:{
        type:String,
        required:true
    },
    ImgName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("File",FileSchema)