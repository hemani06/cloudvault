const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadmiddleware");

const { uploadFile } = require("../controllers/fileController");

// Upload Route
router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadFile
);

module.exports = router;