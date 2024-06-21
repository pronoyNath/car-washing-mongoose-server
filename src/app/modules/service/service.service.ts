import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {
    const service = await Service.create(payload);
    return service;
  };
  
  
  export const ServiceServices = {
    createServiceIntoDB
  }