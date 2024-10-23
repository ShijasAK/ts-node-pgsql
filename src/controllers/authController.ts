import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth';
import { validationResult } from 'express-validator';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
     return;
  }
  
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
     return;
  }
  
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};
