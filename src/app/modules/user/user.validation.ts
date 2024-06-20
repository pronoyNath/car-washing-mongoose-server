import { z } from "zod";
import { USER_Role } from "./user.constant";

const createUserValidations = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.user),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    password: z.string(),
  }),
});


const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidations = {
  createUserValidations,
  updateUserValidations,
};