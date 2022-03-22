import express from 'express';

import userRouter from './user/user.routes';

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);

export default app;
