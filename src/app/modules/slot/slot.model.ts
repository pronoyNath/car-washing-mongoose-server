import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";
import { SLOT_BookedType } from "./slot.constant";

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: [true, "Service Id is required."],
      ref: "Service",
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    startTime: {
      type: String,
      required: [true, "Start Time is required"],
    },
    endTime: {
      type: String,
      required: [true, "End Time is required"],
    },
    isBooked: {
      type: String,
      enum: Object.keys(SLOT_BookedType),
      default: SLOT_BookedType.available,
    },
  },
  {
    timestamps: true,
  }
);

export const Slot = model<TSlot>("Slot", slotSchema);
