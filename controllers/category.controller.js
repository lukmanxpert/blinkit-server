import categoryModel from "../models/category.model.js";
import productModel from "../models/product.model.js";
import subCategoryModel from "../models/subCategory.model.js";

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
    const data = await categoryModel.find().sort({ createdAt: -1 });
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
    const { _id, name, image } = req?.body;
    const update = await categoryModel.updateOne({ _id }, { name, image });
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

// delete category controller
export const deleteCategoryController = async (req, res) => {
  try {
    const { _id } = req.body;

    const checkSubCategory = await subCategoryModel
      .find({
        category: {
          $in: [_id],
        },
      })
      .countDocuments();

    const checkProducts = await productModel
      .find({
        category: {
          $in: [_id],
        },
      })
      .countDocuments();

    if (checkSubCategory > 0 || checkProducts > 0) {
      return res.status(400).json({
        message: "Category is already in use.",
        error: true,
        success: false,
      });
    }

    const result = await categoryModel.deleteOne({ _id });
    res.json({
      message: "Delete successfully",
      success: true,
      error: false,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
