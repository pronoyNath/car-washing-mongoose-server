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

// const getAllSlots = catchAsync(async (req, res) => {

//   const result = await SlotServices.getAllSlotsFromDB(req.query);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Slots retrieve sucessfully",
//     data: result,
//   });
// });

export const BookingControllers = {
    createBooking,
  //   getSingleService,
//   getAllSlots,
  //   updateSevice,
  //   deleteService
};
