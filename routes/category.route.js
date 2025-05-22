import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  addCategoryController,
  getCategoryController,
  updateCategoryController,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/add-category", auth, addCategoryController);
categoryRouter.get("/get", getCategoryController);
categoryRouter.put("/update", auth, updateCategoryController);

export default categoryRouter;
