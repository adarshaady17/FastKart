const File = require("../models/File");
require("dotenv").config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const { name, price, description } = req.body;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path);

    // Save to DB
    const newFile = await File.create({
      imagePath: result.secure_url,
      ImgName: name,
      price,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      data: newFile,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).json({
      success: false,
      message: "File upload failed",
      error: error.message,
    });
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).json({
      success: true,
      files,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch files",
      error: error.message,
    });
  }
};
