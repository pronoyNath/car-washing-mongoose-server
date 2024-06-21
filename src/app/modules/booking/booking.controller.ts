import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  // console.log(req.user.email,"------>");
  const result = await BookingServices.createBookingIntoDB(req.body,req?.user?.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking succesfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {

  const result = await BookingServices.getAllBookingsFromDB();

  if (result.length > 0) {
    // Send success response with data
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bookings retrieved successfully",
      data: result,
    });
  } else {
    // Send failure response indicating no data found
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "No Data Found",
      data: [],
    });
  }
});

export const BookingControllers = {
    createBooking,
    getAllBookings
};
