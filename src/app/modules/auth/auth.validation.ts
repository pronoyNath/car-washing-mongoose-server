import { z } from 'zod';
import { USER_Role } from '../user/user.constant';

const signupValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(USER_Role),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    password: z.string(),
  }),
});



const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidation = {
  signupValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
};