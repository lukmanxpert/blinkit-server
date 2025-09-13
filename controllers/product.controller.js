import productModel from "../models/product.model.js";

export const createProductController = async (req, res) => {
  try {
    const {
      name,
      image,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
      more_details,
    } = req.body;
    if (
      !name ||
      !image[0] ||
      !category[0] ||
      !subCategory[0] ||
      !unit ||
      !stock ||
      !price ||
      !description
    ) {
      return res.status(400).json({
        message: "Enter required fields",
        error: true,
        success: false,
      });
    }
    const newProducts = new productModel({
      name,
      image,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
      more_details,
    });
    const saveInfo = await newProducts.save();
    return res.json({
      message: "Product Uploaded",
      success: true,
      error: false,
      data: saveInfo,
    });
  } catch (error) {
    return req.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    let { page, limit, search } = req.body;
    if (!page) {
      page = 2;
    }
    if (!limit) {
      limit = 10;
    }
    const query = search
      ? {
          $text: {
            $search: search,
          },
        }
      : {};
    const skip = (page - 1) * limit;
    const [data, totalCount] = await Promise.all([
      productModel
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category subCategory"),
      productModel.countDocuments(query),
    ]);
    return res.json({
      message: "Product data",
      error: false,
      success: true,
      totalCount,
      totalNoPage: Math.ceil(totalCount / limit),
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "Provide category id",
        error: true,
        success: false,
      });
    }
    const product = await productModel
      .find({
        category: {
          $in: id,
        },
      })
      .limit(15);
    return res.json({
      message: "Category product list",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductsByCategoryAndSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategoryId, page, limit } = req.body;
    if (!categoryId || !subCategoryId) {
      return res.status(400).json({
        message: "categoryId & subCategoryId required.",
        error: true,
        success: false,
      });
    }
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 10;
    }
    const query = {
      category: { $in: categoryId },
      subCategory: { $in: subCategoryId },
    };
    const skip = (page - 1) * limit;
    const [data, dataCount] = await Promise.all([
      productModel.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
      productModel.countDocuments(query),
    ]);
    return res.json({
      message: "Product List",
      data: data,
      totalCount: dataCount,
      page: page,
      limit: limit,
      success: true,
      error: false,
    });
  } catch (error) {
    return req.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findOne({ _id: productId });

    return res.json({
      message: "product details",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// update products
export const updateProductDetails = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(400).json({
        message: "provide the _id",
        error: true,
        success: false,
      });
    }
    const updateProduct = await productModel.updateOne(
      { _id: _id },
      {
        ...req.body,
      }
    );
    return res.json({
      message: "Updated successfully",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error || "Something went wrong",
      error: true,
      success: true,
    });
  }
};

// delete products
export const deleteProductDetails = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(400).json({
        message: "Provide the ID",
        error: true,
        success: false,
      });
    }
    const deleteResult = await productModel.deleteOne({ _id });
    return res.json({
      message: "Delete Successfully",
      error: false,
      success: true,
      data: deleteResult,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error || "Something went wrong",
      success: false,
      error: true,
    });
  }
};
