import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { Service } from "../service/service.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Slot } from "../slot/slot.model";
import { User } from "../user/user.model";

const createBookingIntoDB = async (payload: TBooking, userEmail: string) => {
  const isServiceExists = await Service.findOne({
    _id: payload?.serviceId,
  });

  if (!isServiceExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "This service is no found!");
  }

  const isSlotExists = await Slot.findOne({
    _id: payload?.slotId,
  });

  if (!isSlotExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Slot is no found!");
  }

  if (isSlotExists?.isBooked !== "available") {
    throw new AppError(httpStatus.BAD_REQUEST, "This Slot is not available!");
  }

  const userDetails = await User.findOne({ email: userEmail }).select(
    "-password -__v"
  );

  if (!userDetails) {
    // Handle case where user details are not found
    throw new AppError(httpStatus.BAD_REQUEST, "User not found!");
  }

  // set the customer details to booking data
  payload.customer = userDetails._id;
  const booking = await Booking.create(payload);

  // Update the slot to booked
  isSlotExists.isBooked = "booked";
  await isSlotExists.save();

  // Populate the booking with serviceId and slotId
  const populatedBooking = await Booking.findById(booking._id)
    .populate("serviceId")
    .populate("slotId")
    .populate("customer");

  return populatedBooking;
};

const getAllBookingsFromDB = async () => {
  const result = Booking.find()
    .populate("serviceId")
    .populate("slotId")
    .populate("customer");
  return result;
};


export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
