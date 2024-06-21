import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import { MyBookingControllers } from "./myBookings.controller";

const router = express.Router();

router.get(
  "/",
  auth(USER_Role.user),
  MyBookingControllers.getAllMyBookings
);

export const MyBookingRoutes = router;
