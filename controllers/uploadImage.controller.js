import uploadImageCloudinary from "../utils/uploadImageCloudinary.js";

const uploadImageController = async (req, res) => {
  try {
    const file = req.file;
    console.log("this is from file console", file);
    const uploadImage = await uploadImageCloudinary(file);
    return res.json({
      message: "upload done",
      success: true,
      error: false,
      data: uploadImage,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export default uploadImageController;
