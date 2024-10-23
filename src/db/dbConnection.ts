import { Pool } from "pg";
import config from "../config/db";

const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

pool.on("connect", () => {
  console.log("Connected to the PostgreSQL database");
});

pool.on("error", (err: Error) => {
  console.error(err);
  process.exit(-1);
});

export default pool;
