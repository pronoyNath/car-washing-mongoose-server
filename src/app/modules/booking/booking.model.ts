import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";
const bookingSchema = new Schema<TBooking>(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      required: [true, "Service Id is required."],
      ref: "Service",
    },
    slotId: {
      type: Schema.Types.ObjectId,
      required: [true, "Slot Id is required."],
      ref: "Slot",
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    vehicleType: {
      type: String,
      required: [true, "vehicleType is required"],
    },
    vehicleBrand: {
      type: String,
      required: [true, "vehicleBrand is required"],
    },
    vehicleModel: {
      type: String,
      required: [true, "vehicleModel is required"],
    },
    manufacturingYear: {
      type: Number,
      required: [true, "manufacturingYear is required"],
    },
    registrationPlate: {
      type: String,
      required: [true, "registrationPlate is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("Booking", bookingSchema);
