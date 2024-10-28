import { Router } from "express";
import { createUser } from '../controllers/UserController.js';
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
import { isAdmin } from "../middlewares/GlobalMiddleware.js";

const userRoute = Router();

userRoute.post('/create-user', authMiddleware, isAdmin, createUser);

export default userRoute;