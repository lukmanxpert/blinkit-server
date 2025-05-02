import { Router } from "express";
import auth from "../middleware/auth";
import { addCategoryController } from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.post("/add-category", auth, addCategoryController);

export default categoryRouter;
