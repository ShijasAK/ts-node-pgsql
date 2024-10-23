import pool from '../db/dbConnection';
import { User } from '../models/user';
import { hashPassword, comparePasswords } from '../utils/hash';
import { generateToken } from '../utils/generateToken';

interface RegisterInput {
  username: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

const register = async ({ username, email, password }: RegisterInput): Promise<Omit<User, 'password'>> => {
  // Check if user already exists
  const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (existingUser.rows.length > 0) {
    throw new Error('User already exists');
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Insert user into database
  const result = await pool.query(
    'INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING id, username, email, created_at, updated_at',
    [username, email, hashedPassword]
  );

  return result.rows[0];
};

const login = async ({ email, password }: LoginInput): Promise<string> => {
  // Find user by email
  const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = userResult.rows[0];
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Compare passwords
  const isMatch = await comparePasswords(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT
  return generateToken(user.id);
};

export default {
  register,
  login,
};
