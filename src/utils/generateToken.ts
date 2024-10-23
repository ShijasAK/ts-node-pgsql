import jwt from 'jsonwebtoken';
import config from '../config/db';

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
};
    