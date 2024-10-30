import { Router } from "express";
import { isAdmin } from "../middlewares/GlobalMiddleware.js";
import { getActivityLogs } from "../controllers/LogController.js";

const logRoute = Router();

logRoute.get('/', isAdmin, getActivityLogs);

export default logRoute;