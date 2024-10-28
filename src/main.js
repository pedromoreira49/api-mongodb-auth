import express from 'express';
import dotenv from 'dotenv';
import loginRoute from './routes/AuthRoute.js';
import connect from './config/Database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connect();
app.use(express.json());

app.use('/auth', loginRoute);

app.listen(port, console.log('server started!'));