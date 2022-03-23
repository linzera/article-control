import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { CreateUserDTO } from './user.dto';
import userRepository from './user.repository';

const createUser = async (req: Request, res: Response) => {
  try {
    validationResult(req).throw();

    const data = req.body as CreateUserDTO;

    const userData = await userRepository.createUser(data);

    res.json({ user: userData });
  } catch (err) {
    const error = err as any;

    if (error.errors) {
      res.status(400).json({ errors: error.errors });
      return;
    }

    res.status(400).json({ errors: [error.message] });
  }
};

export default {
  createUser,
};
