import express from 'express';
import cors from 'cors';

import userRouter from './user/user.routes';
import authRouter from './authentication/authentication.router';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRouter);
app.use('/api/user', userRouter);

app.get('/healthcheck', (_, res) => {
  res.send('Alive');
});

export default app;
