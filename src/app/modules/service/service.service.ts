import { TService } from "./service.interface";
import { Service } from "./service.model";
import { User } from "../user/user.model";
import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";

const createServiceIntoDB = async (payload: TService) => {
  const service = await Service.create(payload);
  return service;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);

  return result;
};

const getAllServicesFromDB = async () => {
  const result = Service.find();
  return result;
};

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteServiceFromDB = async (id: string) => {

  const isExits = await Service.findById(id);
  console.log("---->",isExits);

  if(!isExits){
    throw new AppError(httpStatus.BAD_REQUEST, "NO servive available!");
  }

  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
  getAllServicesFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB
};
