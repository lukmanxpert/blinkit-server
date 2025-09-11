import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  createProductController,
  getAllProductsController,
  getProductByCategory,
  getProductDetails,
  getProductsByCategoryAndSubCategory,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/create", auth, createProductController);
productRouter.post("/get", getAllProductsController);
productRouter.post("/get-product-by-category", getProductByCategory);
productRouter.post(
  "/get-product-by-category-and-subcategory",
  getProductsByCategoryAndSubCategory
);
productRouter.post("/get-product-details", getProductDetails);

export default productRouter;
