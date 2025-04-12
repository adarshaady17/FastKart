import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            uniqe:true,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        Role:{
            type: String,
            enum: ["admin", "user"],
            required: true,
        }

    },{
            timestamps: true,
    }
)

export const User=mongoose.model("User",UserSchema);