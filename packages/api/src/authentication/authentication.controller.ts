import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import userRepository from '../user/user.repository';
import jwt from 'jsonwebtoken';
import Constants from '../config/constants';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userRepository.getUserByEmail(email);

  if (!user) {
    res.status(404).json({ error: 'Email ou senha incorretos' });
    return;
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    res.status(404).json({ error: 'Email ou senha incorretos' });
    return;
  }

  const accessToken = jwt.sign(
    { userId: user.id, email: user.email, role: user.profile.role },
    Constants.JWT_SECRET
  );

  res.json({ accessToken });
};

export default {
  login,
};
