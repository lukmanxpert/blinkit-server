import { Router } from "express";
import auth from "../middleware/auth.js";
import { addToCartItemController } from "../controllers/cart.controller";

export default cartRouter = Router();

cartRouter.post("/create", auth, addToCartItemController);
