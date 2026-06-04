import { Request, Response } from "express";
import { pool } from "../config/db";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");

    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, email } = req.body;

    const result = await pool.query(
      "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
      [name, email],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await pool.query(
      "UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *",
      [name, email, id],
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM users WHERE id=$1", [id]);

    res.json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
