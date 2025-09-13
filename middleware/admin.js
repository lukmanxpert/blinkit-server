import userModel from "../models/user.model";

export const admin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (user.role !== "ADMIN") {
      return res.status(400).json({
        message: "Permission denied",
        error: true,
        success: false,
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message || error || "Something went wrong",
      error: true,
      success: false,
    });
  }
};
