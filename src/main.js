import express from 'express';
import dotenv from 'dotenv';
import loginRoute from './routes/AuthRoute.js';
import connect from './config/Database.js';
import userRoute from './routes/UserRoute.js';
import workRoute from './routes/WorkRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connect();
app.use(express.json());

app.use('/auth', loginRoute);

app.use('/user', userRoute);

app.use('/works', workRoute);

app.listen(port, console.log('server started!'));