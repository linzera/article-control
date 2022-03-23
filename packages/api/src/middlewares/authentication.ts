import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Constants from 'config/constants';

type JWTUser = {};

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, Constants.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user as JWTUser;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
