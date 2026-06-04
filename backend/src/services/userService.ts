import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";

export const getAllUsers = () => {
  return prisma.user.findMany();
};

export const createUser = (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const updateUser = (id: number, data: Prisma.UserUpdateInput) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};
