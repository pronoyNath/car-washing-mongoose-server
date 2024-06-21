import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validation";
import { BookingControllers } from "./booking.controller";

const router = express.Router();

router.post(
  "/",
  auth(USER_Role.user),
  validateRequest(BookingValidation.bookingValidationSchema),
  BookingControllers.createBooking
);
router.get(
  "/",
  auth(USER_Role.admin),
  BookingControllers.getAllBookings
);

export const BookingRoutes = router;
