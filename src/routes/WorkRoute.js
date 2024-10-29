import { Router } from "express";
import { createWork } from '../controllers/WorkController.js';
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
import { hasPermission } from "../middlewares/GlobalMiddleware.js";

const workRoute = Router();

workRoute.post('/create-work', authMiddleware, hasPermission('works', 'create'), createWork);

export default workRoute;