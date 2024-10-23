export interface User {
  id: number;
  username: string;
  email: string;
  password: string; // Note: In production, passwords should be hashed
  created_at: Date;
  updated_at: Date;
}
