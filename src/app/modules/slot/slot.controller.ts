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

// const getSingleService = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await ServiceServices.getSingleServiceFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Service retrieve succesfully",
//     data: result,
//   });
// });

const getAllSlots = catchAsync(async (req, res) => {

  const result = await SlotServices.getAllSlotsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots retrieve sucessfully",
    data: result,
  });
});

// const updateSevice = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await ServiceServices.updateServiceIntoDB(
//     id,
//     req.body
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Service updated succesfully",
//     data: result,
//   });
// });

// const deleteService = catchAsync(
//   async (req, res) => {
//     const { id } = req.params;
//     const result = await ServiceServices.deleteServiceFromDB(id);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Service deleted sucessfully",
//       data: result,
//     });
//   }
// );

export const SlotControllers = {
  createSlot,
  //   getSingleService,
  getAllSlots,
  //   updateSevice,
  //   deleteService
};
