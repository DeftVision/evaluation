const express = require("express");
const router = express.Router();

const { getFiles, uploadFile, getFile, deleteFile } = require("../controllers/fileController")


router.get("/files", getFiles);
router.get("/file/:id", getFile);

router.post("/upload", uploadFile);

router.delete("/delete/:id", deleteFile);

module.exports = router;