import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 5000,
  db: {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'your_database',
    password: process.env.DB_PASSWORD || 'postgre',
    port: parseInt(process.env.DB_PORT || '5432'),
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    expiresIn: '1h',
  },
};
