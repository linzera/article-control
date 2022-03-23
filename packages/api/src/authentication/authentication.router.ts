import { Router } from 'express';

import authController from './authentication.controller';

const userRoutes = Router();

userRoutes.post('/authenticate', authController.login);

export default userRoutes;
