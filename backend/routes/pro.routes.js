import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import {addProduct,getAllproduct } from "../controller/Pro.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router=express.Router();

router.route("/upload").post(isAuthenticated,singleUpload,addProduct);
router.route("/get").get(getAllproduct);

export default router;