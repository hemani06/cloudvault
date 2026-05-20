const File = require("../models/File");

const uploadFile = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // Save file info in MongoDB
    const file = await File.create({
      filename: req.file.filename,
      path: req.file.path,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  uploadFile,
};