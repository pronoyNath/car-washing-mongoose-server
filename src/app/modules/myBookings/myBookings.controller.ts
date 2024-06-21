import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MyBookingServices } from "./myBookings.service";

const getAllMyBookings = catchAsync(async (req, res) => {

    const result = await MyBookingServices.getAllMyBookingsFromDB(req?.user?.email);
  
    if (result.length > 0) {
      // Send success response with data
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User Bookings retrieve sucessfully",
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

  export const MyBookingControllers = {
    getAllMyBookings
};
