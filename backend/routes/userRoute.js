const express = require('express');
//import isAuthenticated from "../middleware/isAuthenticated.js";
const {login,logout,register}=require("../controller/user_controller.js");
const upload = require("../middleware/multer");
 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;