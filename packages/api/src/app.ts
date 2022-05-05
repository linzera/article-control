import express from 'express';
import cors from 'cors';

import userRouter from './user/user.routes';
import authRouter from './authentication/authentication.router';
import articleRoutes from 'article/article.routes';
import eventRoutes from 'event/event.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRouter);
app.use('/api/user', userRouter);
app.use('/api/article', articleRoutes);
app.use('/api/events', eventRoutes);

app.get('/healthcheck', (_, res) => {
  res.send('Alive');
});

export default app;
