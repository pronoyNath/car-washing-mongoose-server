import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { Booking } from "../booking/booking.model";
import { User } from "../user/user.model";

const getAllMyBookingsFromDB = async (userEmail: string) => {

  const userDetails = await User.findOne({ email: userEmail }).select(
    "-password -__v"
  );

  if (!userDetails) {
    // Handle case where user details are not found
    throw new AppError(httpStatus.BAD_REQUEST, "User not found!");
  }

  const result = Booking.find({ customer: userDetails._id })
    .populate("serviceId")
    .populate("slotId")
    .select("-customer");
  return result;
};

export const MyBookingServices = {
  getAllMyBookingsFromDB,
};
