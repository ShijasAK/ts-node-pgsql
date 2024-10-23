import { Request, Response, NextFunction } from "express";
import userService from "../services/user";

// Get all users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    next(error);
  }
};

// Get single user by ID
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    next(error);
  }
};
