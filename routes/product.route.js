import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  createProductController,
  deleteProductDetails,
  getAllProductsController,
  getProductByCategory,
  getProductDetails,
  getProductsByCategoryAndSubCategory,
  searchProducts,
  updateProductDetails,
} from "../controllers/product.controller.js";
import { admin } from "../middleware/admin.js";

const productRouter = Router();

productRouter.post("/create", auth, admin, createProductController);
productRouter.post("/get", getAllProductsController);
productRouter.post("/get-product-by-category", getProductByCategory);
productRouter.post(
  "/get-product-by-category-and-subcategory",
  getProductsByCategoryAndSubCategory
);
productRouter.post("/get-product-details", getProductDetails);
productRouter.put("/update-product-details", auth, admin, updateProductDetails);
productRouter.delete(
  "/delete-product-details",
  auth,
  admin,
  deleteProductDetails
);
productRouter.post("/search-product", searchProducts);

export default productRouter;
