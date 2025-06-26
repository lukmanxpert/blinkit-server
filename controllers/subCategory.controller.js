import subCategoryModel from "../models/subCategory.model.js";

export const addSubCategoryController = async (req, res) => {
  try {
    const { name, image, category } = req.body;
    if (!name && !image && !category[0]) {
      return res.status(400).json({
        message: "Provide the category name, image & category!",
        success: false,
        error: true,
      });
    }
    const payload = {
      name,
      image,
      category,
    };
    const createSubCategoryData = new subCategoryModel(payload);
    const save = await createSubCategoryData.save();
    return res.json({
      message: "Saved Sub Category",
      success: true,
      error: false,
      data: save,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export const getSubCategoryController = async (req, res) => {
  try {
    const data = await subCategoryModel.find().sort({ createdAt: -1 }).populate("category")
    return res.json({
      message: "Sub category data",
      data,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: true,
      error: false,
    });
  }
};
