import { Request, Response } from "express";
import * as userService from "../services/userService";
import asyncHandler from "../utils/asyncHandler";

/**
 * GET ALL USERS
 */
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

/**
 * CREATE USER
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await userService.createUser({ name, email });
  res.status(201).json(user);
});

/**
 * UPDATE USER
 */
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const user = await userService.updateUser(id, { name, email });
  res.status(200).json(user);
});

/**
 * DELETE USER
 */
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(200).json({ message: "User deleted successfully" });
});
