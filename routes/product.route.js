import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  createProductController,
  getAllProductsController,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/create", auth, createProductController);
productRouter.post("/get", getAllProductsController);

export default productRouter;
