import { Router } from 'express';

import userController from './user.controller';
import { createUserValidationMiddleware } from './user.validators';

const userRoutes = Router();

userRoutes.post(
  '/create',
  createUserValidationMiddleware,
  userController.createUser
);

export default userRoutes;
