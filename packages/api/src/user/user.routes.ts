import { Router } from 'express';
import { body } from 'express-validator';

import userController from './user.controller';

const userRoutes = Router();

userRoutes.post(
  '/create',
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  userController.createUser
);

export default userRoutes;
