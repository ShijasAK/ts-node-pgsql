import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/db';

interface JwtPayload {
  userId: number;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction):void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
     res.sendStatus(401); // Unauthorized
     return;
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, config.jwt.secret, (err, decoded) => {
    if (err) {
       res.sendStatus(403); // Forbidden
       return;
    }
    req.user = (decoded as JwtPayload).userId;
    next();
  });
};
