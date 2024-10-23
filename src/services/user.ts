import pool from '../db/dbConnection';
import { User } from '../models/user';

const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query('SELECT id, username, email, created_at, updated_at FROM users');
  return result.rows;
};

const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT id, username, email, created_at, updated_at FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export default {
  getAllUsers,
  getUserById,
};
