/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_Role } from "./user.constant";

export interface TUser {
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  name: string;
  email: string;
  phone: number;
  address: string;
  role: "admin" | "user";
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}

export type TUserRole = keyof typeof USER_Role;
