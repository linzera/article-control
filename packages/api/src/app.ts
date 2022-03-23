import express from 'express';

import userRouter from './user/user.routes';
import authRouter from './authentication/authentication.router';

const app = express();

app.use(express.json());
app.use('/api', authRouter);
app.use('/api/user', userRouter);

export default app;
