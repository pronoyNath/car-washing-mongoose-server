import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceServices } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created succesfully",
    data: result,
  });
});

const getSingleService = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const result = await ServiceServices.getSingleServiceFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service retrieve succesfully",
      data: result,
    });
  }
);

export const ServiceControllers = {
  createService,
  getSingleService,
};
