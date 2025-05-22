import categoryModel from "../models/category.model.js";

// get category controller
export const addCategoryController = async (req, res) => {
  try {
    const { name, image } = req.body;
    if (!name || !image) {
      return res.status.json({
        message: "Enter require fields",
        error: true,
        success: false,
      });
    }

    const addCategory = new categoryModel({
      name,
      image,
    });

    const saveCategory = await addCategory.save();

    if (!saveCategory) {
      return res.status(500).json({
        message: "Category not created",
        error: true,
        success: false,
      });
    }

    return res.json({
      message: "Category Added",
      data: saveCategory,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// get category controller
export const getCategoryController = async (req, res) => {
  try {
    const data = await categoryModel.find();
    res.json({
      data: data,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// update category controller
export const updateCategoryController = async (req, res) => {
  try {
    const { categoryId, name, image } = req?.body;
    const update = await categoryModel.updateOne(
      { _id: categoryId },
      { name, image }
    );
    return res.json({
      message: "Updated successfully",
      success: true,
      error: false,
      data: update,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
