import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  duration: {
    type: Number,
    required: [true, "duration is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});


export const Service = model<TService>("Service", serviceSchema);