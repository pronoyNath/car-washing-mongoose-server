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

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.getSingleServiceFromDB(id);

  if (result) {
    // Send success response with data
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service retrieve succesfully",
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

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllServicesFromDB();


  if (result.length > 0) {
    // Send success response with data
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Services retrieve sucessfully",
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

const updateSevice = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.updateServiceIntoDB(
    id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated succesfully",
    data: result,
  });
});

const deleteService = catchAsync(
  async (req, res) => {
    const { id } = req.params;
    const result = await ServiceServices.deleteServiceFromDB(id);

  

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service deleted sucessfully",
      data: result,
    });
  }
);

export const ServiceControllers = {
  createService,
  getSingleService,
  getAllServices,
  updateSevice,
  deleteService
};
