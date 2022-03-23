import { Role } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export const roleCheck =
  (role: Role) => (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as any;

    if (user.role === role) {
      next();
    }

    res.status(403).json({ error: 'Access denied' });
  };
