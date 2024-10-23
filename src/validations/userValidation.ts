import { body } from 'express-validator';

export const registerValidation = [

  body('username').isString().isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
];

export const loginValidation = [
  body('email').isEmail(),
  body('password').isString(),
];
