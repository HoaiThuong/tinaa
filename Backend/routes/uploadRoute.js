const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const multer = require('multer');
const router = express.Router();
const path = require("path");


// var upload = multer({ storage: storage });
// router.get(
//   "/",
//  (req,res) =>{
//   res.send("hello");
//  }
// );
// router.post(
//   "/",
//   upload.array("images", 10),
//   // productImgResize,
//   // uploadImages
// );

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
