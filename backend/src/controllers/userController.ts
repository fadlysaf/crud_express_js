import { Request, Response } from "express";
import * as userService from "../services/userService";

/**
 * GET ALL USERS
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to get users",
    });
  }
};

/**
 * CREATE USER
 */
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, email } = req.body;

    const user = await userService.createUser({ name, email });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create user",
    });
  }
};

/**
 * UPDATE USER
 */
export const updateUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const user = await userService.updateUser(id, { name, email });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update user",
    });
  }
};

/**
 * DELETE USER
 */
export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    await userService.deleteUser(id);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete user",
    });
  }
};
