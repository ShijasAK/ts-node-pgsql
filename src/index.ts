import express from "express";
import pool from "./db/dbConnection";
import config from "./config/db";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
