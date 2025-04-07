const express = require('express');
const router = express.Router();

const { uploadFile, getAllFiles } = require("../controller/fileUpload");
const upload = require("../middleware/multer");
const isAuthenticated = require("../middleware/isAuthenticated");

router.post('/upload', upload.single("img"), isAuthenticated, uploadFile);
router.get('/files', getAllFiles);

module.exports = router;
