import { Router } from "express";
import { login, register } from '../controllers/AuthController.js';

const loginRoute = Router();

loginRoute.post('/', login);
loginRoute.post('/register', register);

export default loginRoute;