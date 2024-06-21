import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {
    const service = await Service.create(payload);
    return service;
  };
  
  const getSingleServiceFromDB = async (id: string) => {
    const result = await Service.findById(id)
      
    return result;
  };

  export const ServiceServices = {
    createServiceIntoDB,
    getSingleServiceFromDB
  }