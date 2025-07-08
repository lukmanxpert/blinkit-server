import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  createProductController,
  getAllProductsController,
  getProductByCategory,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/create", auth, createProductController);
productRouter.post("/get", getAllProductsController);
productRouter.post("/get-product-by-category", getProductByCategory);

export default productRouter;
