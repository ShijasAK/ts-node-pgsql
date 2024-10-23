  import pool from '../db/dbConnection';

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  
  try {
    await pool.query(query);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

createUsersTable();
