import { Types } from "mongoose"

export type TBooking = {
    serviceId: Types.ObjectId;
    slotId: Types.ObjectId;
    customer: Types.ObjectId;
    vehicleType: string;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
}