import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotServices } from "./slot.service";

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot created succesfully",
    data: result,
  });
});

const getAllSlots = catchAsync(async (req, res) => {

  const result = await SlotServices.getAllSlotsFromDB(req.query);

  if (result.length > 0) {
    // Send success response with data
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Slots retrieve sucessfully",
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

export const SlotControllers = {
  createSlot,
  getAllSlots,
};
