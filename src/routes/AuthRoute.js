import { Router } from "express";
import { login } from '../controllers/AuthController.js';

const loginRoute = Router();

loginRoute.post('/', login);

export default loginRoute;