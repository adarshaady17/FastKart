import { Product } from "../models/product.js";
import getDataUri from "../database/datauri.js";
import cloudinary from "../database/cloudinary.js";

export const addProduct=async (req,res)=>{
    try{
        const {ProName,Price,Description}=req.body;
        if(!ProName ||!Price||!Description){
            return res.status(400).json({
                message:"Something is missing",
                succes:false,
            });
        }
        const file=req.file;
        const fileUri=getDataUri(file);
        const cloudResponse=await cloudinary.uploader.upload(fileUri.content);

        const pro=await Product.create({
            ProName,
            Price,
            Description,
            Img:cloudResponse.secure_url
        });
        return res.status(201).json({
            message: "Product Create successfully.",
            pro,
            success: true
        })

    }catch(error){
        console.log("upload error",error);
    }
}

export const getAllproduct=async(req,res)=>{
    try{
        const pro=await Product.find({});
        res.status(200).json({
            success: true,
            pro,
          });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch Product",
            error: error.message,
        });
    }
}